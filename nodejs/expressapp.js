const express = require('express');
const app =express();
const path = require("path");
const data = require("./data.json");


// static takes care of all the static files if there are 100 files linked to a html component instead of 
// creating path for all the 100 files we can directly dump them in a older and pass it to the static, which 
// automatically setsup the mimetypes, status codes and required parameters 
//  static file can be javascript file, images, css etc


// An entire html project can be sent directly from the static without even defining a app.get for it (only using express)
// for ex: after adding all the files in the navbar folder I can directly hit the http://localhost:5000 to see the webpage directly


app.use(express.static('./navbar'))


app.get('/',(req,res)=>{
    res.send("Hello")
})

app.get("/herodata",(req,res)=>{
    res.status(200).json(data);
})

app.get("/heros",(req,res)=>{
    //Sending only Name, Homeworld and Jedi from the json
    const heros = data.map((hero)=>{
        const  {Name, Homeworld, Jedi} =hero;
        return {Name, Homeworld, Jedi}
    });
    res.status(200).json(heros);

})

app.get("/about",(req,res)=>{
    res.send("Welcome to the about us page")
})

app.get("/home",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./navbar/index.html"))
})

app.all("*",(req,res)=>{
    res.status(404).send("<h1>Oops! Sorry unable to go the requested page")
})

app.listen(5000,()=>{
    console.log("the server is listening");
    console.log(__dirname)
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use - is used for setting up the middleware
//app.listen