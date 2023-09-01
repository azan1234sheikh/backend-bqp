const express = require("express");
const product = require("../models/productmodel.js"); // Adjust the path as needed
const productRouter = express.Router();
const jwt = require("jsonwebtoken");
const protect = require("../middlewares/auth");

productRouter.get("/all",async (req ,res)=>{
    const allproducts= await product.find({});
 
  if(allproducts.length){
    res.send({ products : allproducts });
  } else{
     res.send("No products Available")
  }
});
productRouter.post("/add",  protect , async (req, res) => {
  const productName = req.body.productName;
  const price = req.body.price;
  const description = req.body.description;
  const image = req.body.image;
  const productData = { productName , price ,description ,image}
  const productInstance = new product(productData)
  const savedProduct =await  productInstance.save() 

  res.send ({message: "Product added" , product:savedProduct});
});


module.exports = productRouter;


