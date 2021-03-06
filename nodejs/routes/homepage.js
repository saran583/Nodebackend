const express = require("express");
const router = express.Router();
const {homepage,homepagepost,homepage2,homepage3} = require("./homepagecontroller.js");


// router.get("/homepage",homepage);

// router.post("/homepage",homepagepost);

// router.get("/homepage2",homepage2);

// router.get("/homepage3",homepage3);


// Routers can also be called like this
router.route('/homepage').get(homepage).post(homepagepost);
router.route("/homepage2").get(homepage2);
router.route("/homepage3").get(homepage3);


module.exports = router;