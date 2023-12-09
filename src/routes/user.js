const { Router } = require("express");
const getUserController = require("../controllers/user/getUserController");
const getUserByIdController = require("../controllers/user/getUserByIdController.js");
const addUserController = require("../controllers/user/addUserController.js");

const router = Router();

router.get("/", getUserController);
router.get("/:id", getUserByIdController);
router.post("/", addUserController);

module.exports = router;
