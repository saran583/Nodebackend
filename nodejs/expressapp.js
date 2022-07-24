const express = require('express');
const app =express();
const path = require("path");
const data = require("./data.json");
const homepage = require("./routes/homepage");


// static takes care of all the static files if there are 100 files linked to a html component instead of 
// creating path for all the 100 files we can directly dump them in a older and pass it to the static, which 
// automatically setsup the mimetypes, status codes and required parameters 
//  static file can be javascript file, images, css etc


// An entire html project can be sent directly from the static without even defining a app.get for it (only using express)
// for ex: after adding all the files in the navbar folder I can directly hit the http://localhost:5000 to see the webpage directly


app.use(express.static('./navbar'))

// this can be used setup the routes independently and also we can use the domain routes here to make is more simple for example
// if in the heros page all the app start with api/starwars/season1/heros then we can decalre api/starwars/season1 in the app.use as that part of url is common for all the api calls in that route file
app.use("/api",homepage);

// Querying using the get request
app.get("/api/isjedi",(req,res)=>{
    // api call - http://localhost:5000/api/isjedi?name=anakin&world=tatooine
    console.log(req.query);
    var hero = data.find(heros=>heros.Name.toLowerCase() == req.query.name && heros.Homeworld.toLowerCase() == req.query.world)
    if(hero){
        res.send(hero.Jedi);
    }
    else{
        res.status(404).send("No hero matches with given data");
    }
})

app.get("/selectiveheros",(req,res)=>{
    // http://localhost:5000/selectiveheros?search=A&limit=3
    console.log(req.query);
    const {search, limit} = req.query;
    var heros = data;
    if(search){
        heros = data.filter((hero)=>{return hero.Name.startsWith(search)});
    }
    if(limit){
        heros=heros.slice(0,Number(limit));
    }
    console.log(heros);
    if(heros.length<1){
        res.status(200).send("No heros matching with the query")
    }
    else{
        res.status(200).json(heros);
    }

})


app.get('/',(req,res)=>{
    res.send("Hello")
})

app.get("/herosdata",(req,res)=>{
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

// Route params
app.get("/herodetails/:heroname",(req,res)=>{
    const hero = data.find((hero)=>hero.Name === req.params.heroname);
    if(!hero){
        res.status(404).send("Hero does not exist in the Database")
    }
    res.status(200).json(hero)
});

app.get("/herodetails/:heroname/presence/:season",(req,res)=>{
    res.send(` ${req.params.heroname} presence in season ${req.params.season} is unknown yet`)
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