const logger =(req, res, next)=>{
    const {method, url, params } = req;
    console.log({method: method,url:url,params:params});
    // if next is not declared then the browser keeps on loading since the execution is not passed to the intended function
    next();
}

module.exports =logger;