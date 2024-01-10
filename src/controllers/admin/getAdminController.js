const getAdminHandler = require("../../handlers/admin/getAdminHandler");
const getAdminController = async (req, res) => {
  try {
    const {
      _start,
      _end,
      _sort,
      _order,
      username,
      type,
      isDisabled = false,
    } = req.query;
    const admins = await getAdminHandler(
      { _start, _end },
      { _sort, _order },
      { username, type, isDisabled }
    );
    const totalCount = admins.totalCount;
    res.setHeader("X-Total-Count", totalCount);
    res.status(200).json(admins.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAdminController;
