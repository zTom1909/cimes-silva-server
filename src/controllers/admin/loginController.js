const ErrorHandler = require("../../utils/errorHandler");
const loginHandler = require("../../handlers/admin/loginHandler");
const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await loginHandler(username, password);
    res.status(200).json(admin);
  } catch (error) {
    console.error(error);
    if (error instanceof ErrorHandler) {
      res
        .status(error.statusCode)
        .json({ success: false, message: error.message });
    } else {
      res.status(500).json({ success: false, error: error.message });
    }
  }
};

module.exports = loginController;
