const getUserByIdHandler = require("../../handlers/user/getUserByIdHandler");
const getUserByIdController = async (req, res) => {
  try {
    const { id } =
      req.params;
    const user = await getUserByIdHandler(id);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = getUserByIdController;
