const authorize =(req,res,next)=>{
    const {user} = req.query;
    if(user === "john"){
        req.user = {name:"john",id:5}
        next();
    }
    else{
        res.status(401).send("The user id not recognized by the Databse");
    }
}

module.exports = authorize;