const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");

// Instead of passing the logger to all the api calls we can directly pass it to the app.use which gives the exact same behaviour
// app.use should on top of all the api calls to execute first
// when using multiple logger it executes in the given order
app.use([authorize,logger]);

// We can add a logger by the adding the function which accepts the req, res , next as parameters.
// next - when using the midleware like logger we need next to send the execution from the middleware to the api method
app.get("/",(req,res)=>{
    console.log("this is the get method");
    res.send("done check your console");
})

app.listen(5000,()=>{
    console.log("the server has started listening")
})