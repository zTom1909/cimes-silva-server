require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ErrorHandler = require("../../utils/errorHandler");
const { Admin } = require("../../db");

const loginHandler = async (username, password) => {
  if (!username || !password)
    throw new ErrorHandler(
      "Missing data. You must provide a username and password.",
      400
    );

  const admin = await Admin.findOne({
    where: { username },
  });
  if (!admin) throw new ErrorHandler("That admin account doesn't exist.", 404);

  const adminData = admin.dataValues;
  if (adminData.isDisabled)
    throw new ErrorHandler("This account has been disabled.", 403);

  const successfulLogin = await bcrypt.compare(password, adminData.password);
  if (!successfulLogin) throw new ErrorHandler("Invalid credentials.", 401);

  const token = jwt.sign({ username }, process.env.JWT_SECRET_KEY, {
    expiresIn: "24h",
  });

  delete adminData.password;

  return {
    success: true,
    message: "Login successful",
    admin: adminData,
    token,
  };
};

module.exports = loginHandler;
