const { User } = require("../../db");
const addUserHandler = async (name, location, phone) => {
  const newUser = await User.create({ name, location, phone });

  return newUser;
};

module.exports = addUserHandler;
