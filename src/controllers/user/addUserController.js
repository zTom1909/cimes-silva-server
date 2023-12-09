const addUserHandler = require("../../handlers/user/addUserHandler");
const addUserController = async (req, res) => {
  try {
    const { name, location, phone, message } = req.body;
    const newUser = await addUserHandler(name, location, phone, message);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = addUserController;
