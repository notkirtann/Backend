require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const path = require("path");

//-------------------SWAGER----------------
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load(path.join(__dirname, "./swagger.yaml"));
//-------------------SWAGER----------------



const enterpriseNotReportingAssetScheduler = require("./scheduler/enterprise-not-reporting-asset");
const assetMaintenanceListScheduler = require("./scheduler/asset-maintenance-list");

const {
  assetRoutes,
  organizationRoutes,
  assetConfigRoutes,
  assetQARoutes,
  FirmwareVersionRoutes,
  CellManufacturerRoutes,
  CellManagementRoutes,
  CellInventoryRoutes,
  RtoDetailsRoutes,
  ServiceRequestConfigRoutes,
  ServiceRequestRoutes,
  enterpriseAssetCategoryRoutes,
  enterpriseAssetInfoRoutes,
} = require("./routes");

const authAndDbMiddleware = require("./middlewares/token");

const PORT = process.env.PORT || 2022;
const BASE_PATH = "/power-assets";
const API_PATH = `${BASE_PATH}/api`;
const SWAGGER_PATH = `${BASE_PATH}/swagger`;

const app = express();

app.use(cors());

// Morgan middleware for HTTP request
app.use(morgan("dev"));
// Middleware to parse incoming JSON payloads
app.use(express.json());
// Middleware to parse URL-encoded data (from HTML forms)
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(hpp());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 1000, // limit each IP
});
app.use(limiter);

if (process.env.ENVIRONMENT === "production") {
  app.set("trust proxy", true);
}

app.use(SWAGGER_PATH, authAndDbMiddleware, swaggerUi.serve, (req, res, next) => {
  const protocol = process.env.ENVIRONMENT === "dev" ? "http" : "https";
  const host = req.get("host");

  swaggerDocument.servers = [
    {
      url: `${protocol}://${host}${API_PATH}`,
      description: protocol === "https" ? "Production server" : "Dev server",
    },
  ];

  return swaggerUi.setup(swaggerDocument)(req, res, next);
});

const apiRouter = express.Router();
apiRouter.use(assetRoutes);
apiRouter.use(organizationRoutes);
apiRouter.use(assetConfigRoutes);
apiRouter.use(assetQARoutes);
apiRouter.use(FirmwareVersionRoutes);
apiRouter.use(CellManufacturerRoutes);
apiRouter.use(CellManagementRoutes);
apiRouter.use(CellInventoryRoutes);
apiRouter.use(RtoDetailsRoutes);
apiRouter.use(ServiceRequestConfigRoutes);
apiRouter.use(ServiceRequestRoutes);
apiRouter.use(enterpriseAssetCategoryRoutes);
apiRouter.use(enterpriseAssetInfoRoutes);

app.use(API_PATH, apiRouter);

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      status: err.status || 500,
      message: err.message || "Internal Server Error",
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  if (process.env.ENVIRONMENT === "production") {
    console.log("🚀 Initializing schedulers...");
    enterpriseNotReportingAssetScheduler();
    assetMaintenanceListScheduler();
  }
});