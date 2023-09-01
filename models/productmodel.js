const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productName: String,
    price: Number,
    quantity: Number,
    description: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;