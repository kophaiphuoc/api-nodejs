const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const { json } = require('body-parser');
const userroutter = require("./routes/user");
const productrouter = require("./routes/products");
const cartrouter = require("./routes/cartproduct");
// connect to mongoose
mongoose.connect(mongodb_url = "mongodb+srv://phpmongodb:dunghoitao1@cluster0.5jsv4.mongodb.net/?retryWrites=true&w=majority",() => {
    console.log("connect to mongoose");
});

app.use(bodyParser.json({limit:"100mb"}));
app.use(cors());
app.use(morgan("common"));
// ROUTER user
app.use("/user",userroutter);
// router products
app.use("/product",productrouter);
// router cart
app.use("/cart",cartrouter);

app.get("/api",(req,res,next)=>{
    res.status(200).json("xin chào mọi người");
});

app.listen(9999,()=>{
    console.log('listening on port ');
});