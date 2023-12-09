const { Router } = require("express");
const getUserController = require("../controllers/user/getUserController");
const getUserByIdController = require("../controllers/user/getUserByIdController.js");
const editUserController = require("../controllers/user/editUserController");
const addUserController = require("../controllers/user/addUserController.js");

const router = Router();

router.get("/", getUserController);
router.get("/:id", getUserByIdController);
router.put("/:id", editUserController);
router.post("/", addUserController);

module.exports = router;
