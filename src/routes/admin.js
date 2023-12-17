const { Router } = require("express");
const loginController = require("../controllers/admin/loginController");
const getAdminController = require("../controllers/admin/getAdminController");
const getAdminByIdController = require("../controllers/admin/getAdminByIdController");
const editAdminController = require("../controllers/admin/editAdminController");
const addAdminController = require("../controllers/admin/addAdminController");
const deleteAdminController = require("../controllers/admin/deleteAdminController");

const router = Router();

router.post("/login", loginController);
router.get("/", getAdminController);
router.get("/:id", getAdminByIdController);
router.put("/:id", editAdminController);
router.post("/", addAdminController);
router.delete("/:id", deleteAdminController);

module.exports = router;
