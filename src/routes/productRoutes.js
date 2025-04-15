const express = require("express");
const productController = require("../controllers/productController");
const router = express.Router();

router.get("/", productController.getProducts);

router.post("/", productController.createProduct);

router.put("/", productController.updateProduct);

router.delete("/", productController.deleteProduct);

module.exports = router;