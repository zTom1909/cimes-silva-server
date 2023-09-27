const { Router } = require("express");
const getUserController = require("../controllers/user/getUserController");
const addUserController = require("../controllers/user/addUserController.js");

const router = Router();

router.get("/", getUserController);
router.post("/", addUserController);

module.exports = router;
