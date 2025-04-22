const authController    = require("../controllers/authController");
const express           = require("express");
const router            = express.Router();

router.post("/register", authController.createUser);

router.post("/login", authController.login);

router.post("/refresh", authController.refresh);

module.exports = router;