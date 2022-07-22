const express = require("express");
const app = express();
const logger = require("./logger");
const authorize = require("./authorize");
const data = require("./data.json")

// Using  a third party middleware
const morgan = require("morgan");

// Instead of passing the logger to all the api calls we can directly pass it to the app.use which gives the exact same behaviour
// app.use should on top of all the api calls to execute first
// when using multiple logger it executes in the given order

// app.use([authorize,logger]);
app.use(morgan('tiny'))
// app.use(logger);

// We can add a logger by the adding the function which accepts the req, res , next as parameters.
// next - when using the midleware like logger we need next to send the execution from the middleware to the api method
app.get("/",(req,res)=>{
    console.log("this is the get method");
    res.send("done check your console");
})

app.delete("/removehero/:name",(req,res)=>{
    // const {name} = req.params;
    console.log(req.params.name)
    console.log(data)
    var newherolist = data.filter((heros)=>heros.Name !== req.params.name);
    console.log(newherolist);

    if(!newherolist){
        res.status(400).json({success:false,msg:"No heros exist on the given Name"})
    }
    else{
        res.status(200).json({success:true,msg:"Hero deleted successfully",data:newherolist});
    }

})

app.listen(5000,()=>{
    console.log("the server has started listening")
})