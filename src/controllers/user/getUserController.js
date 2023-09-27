const getUserHandler = require("../../handlers/user/getUserHandler");
const getUserController = async (req, res) => {
  try {
    const { name, location, phone } = req.query;
    const users = await getUserHandler(name, location, phone);
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = getUserController;
