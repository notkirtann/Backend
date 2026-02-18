import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    _id: {
        type: Number  
    },
    quantity: {
        type: Number,
        required: true,
        min: 0
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    targetPrice: {
        type: Number,
        required: true,
        min: 0
    }
}, {
    timestamps: true
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
