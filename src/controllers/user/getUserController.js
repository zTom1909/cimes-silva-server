const getUserHandler = require("../../handlers/user/getUserHandler");
const getUserController = async (req, res) => {
  try {
    const { _start, _end, _sort, _order, name, location, phone, message } =
      req.query;
    const users = await getUserHandler(
      { _start, _end },
      { _sort, _order },
      { name, location, phone, message }
    );
    const totalCount = users ? users.length : 0;
    res.setHeader("X-Total-Count", totalCount);
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = getUserController;
