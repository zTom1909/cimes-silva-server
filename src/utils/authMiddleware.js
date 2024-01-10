require("dotenv").config();
const jwt = require("jsonwebtoken");
const { Admin } = require("../db");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (
    req.path === "/api/admin/login" ||
    (req.path === "/api/product" && req.method === "GET") ||
    (req.path === "/api/user" && req.method === "POST")
  )
    return next();

  if (!token)
    return res.status(401).json({ message: "Unauthorized - Missing token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const existingAdmin = await Admin.findOne({
      where: { username: decoded.username },
    });

    if (!existingAdmin) {
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }

    req.user = decoded.username;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};

module.exports = authMiddleware;
