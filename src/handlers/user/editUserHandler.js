const { User } = require("../../db");
const getUserByIdHandler = async (id, properties) => {
  const validValues = Object.values(properties).filter((value) => !!value);
  if (!validValues.length) throw new Error("Properties to edit are empty.");
  await User.update(properties, { where: { id } })
  return await User.findByPk(id);
};

module.exports = getUserByIdHandler;
