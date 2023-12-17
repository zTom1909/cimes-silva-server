const addAdminHandler = require("../../handlers/admin/addAdminHandler");
const addAdminController = async (req, res) => {
  try {
    const { username, password, type } = req.body;
    const newAdmin = await addAdminHandler(username, password, type);
    res.status(201).json(newAdmin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = addAdminController;
