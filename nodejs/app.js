const http = require("http")

const server = http.createServer((req,res)=>{

    if(req.url === "/about"){
        res.end("Welcome to the About page")
    }
    else if(req.url === "/" || req.url === "/home"){
        res.end("Welcome to the Homepage")
    }
    else{
        res.end("<h1>Oops! wrong page that does not exist</h1>  <p>Check out our homepage <a href='/home'>Home</a></p> ")
    }

});

server.listen(5000,()=>{
    console.log("the server is running")
});