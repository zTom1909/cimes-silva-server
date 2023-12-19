const { Admin } = require("../../db");
const deleteAdminHandler = async (id) => {
  await Admin.update({ isDisabled: true }, { where: { id } });
  return await Admin.findOne({
    where: { id },
    attributes: { exclude: ["password"] },
  });
};

module.exports = deleteAdminHandler;
