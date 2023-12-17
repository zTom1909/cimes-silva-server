const { Admin } = require("../../db");
const addAdminHandler = async (username, password, type) => {
  return await Admin.create({ username, password, type });
};

module.exports = addAdminHandler;
