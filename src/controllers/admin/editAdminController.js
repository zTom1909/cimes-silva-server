const editAdminHandler = require("../../handlers/admin/editAdminHandler");
const editAdminController = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password, type, isDisabled } = req.body;

    const admin = await editAdminHandler(id, {
      username,
      password,
      type,
      isDisabled,
    });
    res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = editAdminController;
