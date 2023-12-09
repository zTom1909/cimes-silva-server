const { User } = require("../../db");
const addUserHandler = async (name, location, phone, message) => {
  const newUser = await User.create({ name, location, phone, message });

  return newUser;
};

module.exports = addUserHandler;
