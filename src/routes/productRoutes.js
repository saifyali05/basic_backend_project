const express = require("express");
const { createProduct, getProducts, getProductById, updateProduct,deleteProduct } = require("../controllers/productController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", authMiddleware, deleteProduct);

module.exports = router;
