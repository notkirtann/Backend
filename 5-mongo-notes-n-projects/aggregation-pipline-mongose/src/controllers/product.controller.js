import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const createProduct = async (req, res) => {
  try {
    const products = await Product.create(req.body);
    res.status(201).json({ success: true, data: products });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    
    let { page = 1, limit = 100, sort = "asc" } = req.query;

    page = Number(page);
    limit = Number(limit);

    let sortOption = {};
    if (sort === "asc") {
      sortOption.price = 1;
    } else if (sort === "desc") {
      sortOption.price = -1;
    }

    const skip = (page - 1) * limit;

    const totalProducts = await Product.countDocuments();

    const products = await Product.find()
      .sort(sortOption)
      .skip(skip)
      .limit(limit)
      .populate("company", "name")
      .populate("category", "name");

    res.status(200).json({
      success: true,
      total: totalProducts,
      page,
      limit,
      totalPages: Math.ceil(totalProducts / limit),
      data: products
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    if (!products) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const products = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!products) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.json({ success: true, data: products });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getProductsPriceGreater = async (req, res) => {
  try {
    const price = Number(req.query.price) || 0;

    const products = await Product.aggregate([
      { $match: { price: { $gt: price } } },
      {
        $project: {
          name: 1,
          price: 1,
          image: 1,
          isFeature: 1,
        },
      },
    ]);

    res.status(200).json({success: true, count: products.length, data: products});
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getProductsByCompany = async (req, res) => {
  try {
    const { companyId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(companyId)) {
      return res.status(400).json({ success: false, message: "Invalid company id" });
    }

    const products = await Product.aggregate([
      {
        $match: {
          company: new mongoose.Types.ObjectId(companyId)
        }
      },
      {
        $group: {
          _id: "$company",
          totalProducts: { $sum: 1 },
          avgPrice: { $avg: "$price" },
          products: {
            $push: {
              name: "$name",
              price: "$price",
              isFeature: "$isFeature"
            }
          }
        }
      }
    ]);

    res.status(200).json({ success: true, data: products });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getProductsByFeatureStatus = async (req, res) => {
  try {
    const isFeature = req.query.isFeature === "true";

    const products = await Product.aggregate([
      { $match: { isFeature } },
      {
        $project: {
          name: 1,
          price: 1,
          image: 1
        }
      }
    ]);

    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const groupProductsByCategory = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          totalProducts: { $sum: 1 },
          avgPrice: { $avg: "$price" },
          maxPrice: { $max: "$price" },
          minPrice: { $min: "$price" },
          products: {
            $push: {
              name: "$name",
              price: "$price",
              isFeature: "$isFeature"
            }
          }
        }
      },
      {
        $lookup: {
          from: "categories",
          localField: "_id",
          foreignField: "_id",
          as: "category"
        }
      },
      { $unwind: "$category" },
      {
        $project: {
          _id: 0,
          categoryId: "$category._id",
          categoryName: "$category.name",
          totalProducts: 1,
          avgPrice: { $round: ["$avgPrice", 2] },
          minPrice: 1,
          maxPrice: 1,
          products: 1
        }
      }
    ]);

    res.status(200).json({
      success: true,
      data: result
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const priceComparisonByCategory = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          highestPrice: { $max: "$price" },
          lowestPrice: { $min: "$price" }
        }
      }
    ]);

    res.status(200).json({
      success: true,
      data: result
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
