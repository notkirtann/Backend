import mongoose from "mongoose";

const salesSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
    },
    quantity: {
      type: Number,
      required: true,
      min: 0,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    targetPrice: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  },
);

const Sales = mongoose.model("Sales", salesSchema);

export default Sales;
