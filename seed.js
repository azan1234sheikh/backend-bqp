const mongoose = require("mongoose");
const Product = require("./models/productmodel.js");
const mongoURI = "mongodb+srv://azoosheikh713:azansheikh1234@cluster0.1swicvg.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");

    // Create and add products using Product.create()
    const productsToAdd = [
        {
            productName: "Product 1",
            price: 10,
            quantity: 50,
            description: "Description of Product 1",
        },
        {
            productName: "Product 2",
            price: 20,
            quantity: 30,
            description: "Description of Product 2",
        },
        // Add more products as needed
    ];

    Product.create(productsToAdd)
        .then((createdProducts) => {
            console.log("Products added to the database:", createdProducts);
        })
        .catch((error) => {
            console.error("Error adding products:", error);
        });
}).catch(err => {
    console.error("Error connecting to MongoDB:", err);
});




