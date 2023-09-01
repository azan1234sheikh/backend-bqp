const express = require("express");
const mongoose = require("mongoose"); // Update this if 'mongoose' is not an ES module
const userRouter = require('./models/user'); // Update the path accordingly
const router = require("./routes/user.js");
const productRouter = require("./routes/product");
const orderRouter  = require("./routes/order.js");
const cors = require('cors');

const app = express();
app.use(cors());

require("dotenv").config();

mongoose.connect(process.env.mongoURI).then(() => console.log('Connected!'));

app.use(express.json());

app.get("/first-api", (req , res) =>{
    res.status(200).send("first Api is Running");
});
 app.use("/users",router);
 app.use("/products",productRouter);
 app.use("/orders", orderRouter);

app.listen(9000,() =>console.log("Server is Running"));





