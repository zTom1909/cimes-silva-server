const getAdminByIdHandler = require("../../handlers/admin/getAdminByIdHandler");
const getAdminByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await getAdminByIdHandler(id);
    res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAdminByIdController;
