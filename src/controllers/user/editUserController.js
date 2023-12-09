const editUserHandler = require("../../handlers/user/editUserHandler");
const editUserController = async (req, res) => {
  try {
    const { id } = req.params
    const { location, phone, message, customer } = req.body;
    const user = await editUserHandler(id, {
      location,
      phone,
      message,
      customer,
    });
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = editUserController;
