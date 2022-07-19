const express = require('express');

const app =express();

app.get('/',(req,res)=>{
    res.send("Hello")
})

app.get("/about",(req,res)=>{
    res.send("Welcome to the about us page")
})

app.all("*",(req,res)=>{
    res.status(404).send("<h1>Oops! Sorry unable to go the requested page")
})

app.listen(5000,()=>{
    console.log("the server is listening")
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use - is used for setting up the middleware
//app.listen