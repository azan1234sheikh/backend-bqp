const express = require("express");
const Order = require("../models/order.js"); // Adjust the path as needed
const orderRouter = express.Router();

const protect = require("../middlewares/auth"); // Make sure you have the authentication middleware

// Get all orders
orderRouter.get("/all", async (req, res) => {
    try {
        const allOrders = await Order.find({});
        if (allOrders.length) {
            res.send({ orders: allOrders });
        } else {
            res.send("No orders available");
        }
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
});

// Create a new order
const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGYwN2Y1OWNlOWMyZmM2ZWJhOWVjODAiLCJpYXQiOjE2OTM0ODM5OTYsImV4cCI6MTY5NjA3NTk5Nn0.on0aPqJMDQHsgPL_Iq2jfqRiDufakVCe6zlFiceoBNY"
orderRouter.post("/add", protect, async (req, res) => {
    
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    
    try {
        const orderData = {
            products: req.body.products,
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            email: req.body.email,
        };
        const orderInstance = new Order(orderData);
        const savedOrder = await orderInstance.save();
        res.send({ message: "Order added", order: savedOrder });
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
});

module.exports = orderRouter;