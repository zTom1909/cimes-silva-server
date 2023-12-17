const { Op } = require("sequelize");
const { Admin } = require("../../db");
const getAdminHandler = async (amount, order, filters) => {
  const { _start, _end } = amount;
  const { _sort, _order } = order;
  const { username, type, isDisabled = false } = filters;

  let searchFilters = {};
  if (username)
    searchFilters.username = {
      [Op.iLike]: `%${username}%`,
    };
  if (type) searchFilters.type = type;
  searchFilters.isDisabled = isDisabled;

  const admins = await Admin.findAll({
    where: searchFilters,
    attributes: { exclude: ["password"] },
  });

  const sortingFunction = (a, b) => {
    const sortOrder = _order === "ASC" ? 1 : -1;
    const aData = a.dataValues;
    const bData = b.dataValues;

    switch (_sort) {
      case "username":
        return sortOrder * aData.username.localeCompare(bData.username);
      case "type":
        return sortOrder * aData.type.localeCompare(bData.type);
      case "createdAt":
        const createdAtA = new Date(aData.createdAt).getTime();
        const createdAtB = new Date(bData.createdAt).getTime();
        return sortOrder * (createdAtA - createdAtB);
      case "updatedAt":
        const updatedAtA = new Date(aData.updatedAt).getTime();
        const updatedAtB = new Date(bData.updatedAt).getTime();
        return sortOrder * (updatedAtA - updatedAtB);
      default:
        return 0;
    }
  };

  const orderedAdmins = admins.sort(sortingFunction);
  const totalCount = orderedAdmins.length;
  if (_start) return { data: orderedAdmins.slice(_start, _end), totalCount };
  return { data: orderedAdmins, totalCount };
};

module.exports = getAdminHandler;
