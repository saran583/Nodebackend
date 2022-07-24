const homepage = (req,res)=>{
    res.status(200).json("this is data from the homepage");
}

const homepagepost= (req,res)=>{
    res.status(200).json(req.body);
}


const homepage2 = (req,res)=>{
    res.status(200).json("this is data from the homepage2");
}

const homepage3 = (req,res)=>{
    res.status(200).json("this is data from the homepage3");
}

module.exports = {homepage,homepagepost,homepage2,homepage3}