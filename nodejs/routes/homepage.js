const express = require("express");
const router = express.Router();

router.get("/homepage",(req,res)=>{
    res.status(200).json("this is data from the homepage");
});

module.exports = router;