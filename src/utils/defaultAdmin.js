const bcrypt = require("bcrypt");
const { Admin } = require("../db");
const defaultAdmin = async () => {
  const hasAdmin = await Admin.count();
  if (hasAdmin <= 0) {
    const hashedPassword = await bcrypt.hash("admin", 10);
    await Admin.create({
      username: "admin",
      password: hashedPassword,
      type: "superAdmin",
    });
    console.log("Default admin profile has been created");
  }
};

module.exports = defaultAdmin;
