const http = require("http")

const server = http.createServer((req,res)=>{
res.write("Welcome to the nodejs Learnings");
res.end();
});

server.listen(5000,()=>{
    console.log("the server is runnign")
});