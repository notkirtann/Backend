import Order from "../models/sales.model.js";

export const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json({ success: true, data: order });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json({ success: true, count: orders.length, data: orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }
    res.json({ success: true, data: order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.json({ success: true, data: order });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    res.json({ success: true, message: "Order deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getTotalRevenue = async (req, res) => {
  try {
    const result = await Order.aggregate([
      {
        $project: {
          orderTotal: { $multiply: ["$quantity", "$price"] }
        }
      },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$orderTotal" }
        }
      }
    ]);

    res.json({ success: true, data: result[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


export const getProfitAnalysis = async (req, res) => {
  try {
    const result = await Order.aggregate([
      {
        $project: {
          quantity: 1,
          price: 1,
          targetPrice: 1,
          profitPerUnit: { $subtract: ["$price", "$targetPrice"] },
          totalProfit: {
            $multiply: [
              { $subtract: ["$price", "$targetPrice"] },
              "$quantity"
            ]
          }
        }
      },
      {
        $group: {
          _id: null,
          totalProfit: { $sum: "$totalProfit" }
        }
      }
    ]);

    res.json({ success: true, data: result[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getBelowTargetOrders = async (req, res) => {
  try {
    const result = await Order.aggregate([
      {
        $match: {
          $expr: { $lt: ["$price", "$targetPrice"] }
        }
      }
    ]);

    res.json({
      success: true,
      count: result.length,
      data: result
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getQuantityStats = async (req, res) => {
  try {
    const result = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalQuantity: { $sum: "$quantity" },
          avgQuantity: { $avg: "$quantity" },
          maxQuantity: { $max: "$quantity" },
          minQuantity: { $min: "$quantity" }
        }
      }
    ]);

    res.json({ success: true, data: result[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
