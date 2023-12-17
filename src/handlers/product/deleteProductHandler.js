const { Admin } = require("../../db");
const deleteAdminHandler = async (id) => {
  await Admin.update({ isDisabled: true }, { where: { id } });
  return await Admin.findByPk(id);
};

module.exports = deleteAdminHandler;
