const { User } = require("../../db");
const getUserByIdHandler = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

module.exports = getUserByIdHandler;
