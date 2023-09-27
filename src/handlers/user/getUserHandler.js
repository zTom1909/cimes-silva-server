const { User } = require("../../db");
const getUserHandler = async (name, location, phone) => {
  let filters = {};

  if (name) filters.name = name;
  if (location) filters.location = location;
  if (phone) filters.phone = phone;

  const users = await User.findAll({ where: filters });

  return users;
};

module.exports = getUserHandler;
