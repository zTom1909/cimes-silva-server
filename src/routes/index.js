const { Router } = require("express");
const userRouter = require("./user");
const adminRouter = require("./admin");
const productRouter = require("./product");

const router = Router();

router.use("/user", userRouter);
router.use("/admin", adminRouter);
router.use("/product", productRouter);

module.exports = router;
