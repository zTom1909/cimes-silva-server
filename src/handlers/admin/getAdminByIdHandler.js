const { Admin } = require("../../db");
const getAdminByIdHandler = async (id) => {
  return await Admin.findOne({
    where: { id },
    attributes: { exclude: ["password"] },
  });
};

module.exports = getAdminByIdHandler;
