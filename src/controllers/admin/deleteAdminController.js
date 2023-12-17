const deleteAdminHandler = require("../../handlers/admin/deleteAdminHandler");
const deleteAdminController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAdmin = await deleteAdminHandler(id);
    res.status(200).json(deletedAdmin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteAdminController;
