const http = require("http")
const {readFile} = require("fs");
const util  = require("util");
const readFilePromise = util.promisify(readFile);


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

server.listen(5000,()=>{
    console.log("the server is running")
});