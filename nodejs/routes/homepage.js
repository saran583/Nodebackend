const express = require("express");
const router = express.Router();
const {homepage,homepagepost,homepage2,homepage3} = require("./homepagecontroller.js");


router.get("/homepage",homepage);

router.post("/homepage",homepagepost);

router.get("/homepage2",homepage2);

router.get("/homepage3",homepage3);


module.exports = router;