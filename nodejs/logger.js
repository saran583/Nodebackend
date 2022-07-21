const logger =(req, res, next)=>{
    const {method, url } = req;
    console.log({method: method,url:url});
    // if next is not declared then the browser keeps on loading since the execution is not passed to the intended function
    next();
}

module.exports =logger;