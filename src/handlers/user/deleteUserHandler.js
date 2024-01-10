const { User } = require("../../db");
const deleteUserHandler = async (id) => {
  await User.update({ isDisabled: true }, { where: { id } });
  return await User.findByPk(id);
};

module.exports = deleteUserHandler;
