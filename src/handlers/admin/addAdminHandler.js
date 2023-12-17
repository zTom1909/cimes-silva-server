const bcrypt = require("bcrypt");
const { Admin } = require("../../db");
const addAdminHandler = async (username, password, type) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newAdmin = await Admin.create({
    username,
    password: hashedPassword,
    type,
  });
  delete newAdmin.dataValues.password;
  return newAdmin.dataValues;
};

module.exports = addAdminHandler;
