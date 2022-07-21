const express = require("express");
const app = express();

const logger =(req, res, next)=>{
const {method, url } = req;
console.log({method: method,url:url});
// if next is not declared then the browser keeps on loading since the execution is not passed to the intended function
next();
}
// We can add a logger by the adding the function which accepts the req, res , next as parameters.
// req - request from the webpage
// res - response data that needs to be sent
// next - when using the midleware like logger we need next tp send the execution from the middleware to the api method
app.get("/",logger,(req,res)=>{
    console.log("this is the get method");
    res.send("done check your console");
})

app.listen(5000,()=>{
    console.log("the server has started listening ")
})