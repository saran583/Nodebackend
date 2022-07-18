const http = require("http")
const {readFile} = require("fs");
const util  = require("util");
const readFilePromise = util.promisify(readFile);
const EventEmitter =  require("events");
const {readFileSync } = require("fs");

const Emitter = new EventEmitter();
const homepage = readFileSync("../index.html");

const server = http.createServer((req,res)=>{

    if(req.url === "/about"){
        res.end("Welcome to the About page")
    }

    //sending html data from the backend
    else if(req.url === "/" || req.url === "/home"){
        res.writeHead(200,{"content-type":"text/html"})
        res.end(homepage);
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
    else if(req.url === "/readasyncfile"){
        getdata("../nodejs&expressnotes.txt").then((data)=>{
            res.end(data);
        })
    }
    // reading file as a promise directly using utils
    else if(req.url === "/readfileaspromise"){
         getdataspromise(res)
        // res.end(text);

    }
    else if(req.url === "/triggerevent"){
        Emitter.emit("response", res);
    }
    else{
        res.end("<h1>Oops! wrong page that does not exist</h1>  <p>Check out our homepage <a href='/home'>Home</a></p> ")
    }

});

const getdata = (path) =>{
    return new Promise((resolve, reject)=>{
        readFile(path, "utf8",(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

const getdataspromise = async (res) =>{
    const data = await readFilePromise("../nodejs&expressnotes.txt","utf8");
    console.log("this is data",data)
    res.end(data)
    return data;
}

Emitter.on("response",(res)=>{
    console.log("the event is triggered");
    res.end("the event is triggered thank you for nothing")
})

server.listen(5000,()=>{
    console.log("the server is running")
});