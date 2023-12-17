const { Admin } = require("../../db");
const getAdminByIdHandler = async (id) => {
  return await Admin.findByPk(id);
};

module.exports = getAdminByIdHandler;
