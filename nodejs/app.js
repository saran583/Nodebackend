const http = require("http")
const {readFile} = require("fs");
const server = http.createServer((req,res)=>{

    if(req.url === "/about"){
        res.end("Welcome to the About page")
    }
    else if(req.url === "/" || req.url === "/home"){
        res.end("Welcome to the Homepage")
    }
    else if(req.url === "/readfile"){
        readFile("../nodejs&expressnotes.txt",'utf8',(err, result)=>{
            if(err){
                res.end("there is a error reading the file",err);
            }
            console.log("this is the file data",result);
            res.end(result)
        })
    }
    else{
        res.end("<h1>Oops! wrong page that does not exist</h1>  <p>Check out our homepage <a href='/home'>Home</a></p> ")
    }

});

server.listen(5000,()=>{
    console.log("the server is running")
});