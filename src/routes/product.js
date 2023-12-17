const { Router } = require("express");
const getProductController = require("../controllers/product/getProductController");
const getProductByIdController = require("../controllers/product/getProductByIdController");
const editProductController = require("../controllers/product/editProductController");
const addProductController = require("../controllers/product/addProductController");
const deleteProductController = require("../controllers/product/deleteProductController");

const router = Router();

router.get("/", getProductController);
router.get("/:id", getProductByIdController);
router.put("/:id", editProductController);
router.post("/", addProductController);
router.delete("/:id", deleteProductController);

module.exports = router;
