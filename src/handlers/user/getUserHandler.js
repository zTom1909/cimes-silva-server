const { Op } = require("sequelize");
const { User } = require("../../db");
const getUserHandler = async (amount, order, filters) => {
  const { _start, _end } = amount;
  const { _sort, _order } = order;
  const { name, location, phone, customer } = filters;

  let searchFilters = {};
  if (name)
    searchFilters.name = {
      [Op.iLike]: `%${name}%`,
    };
  if (location)
    searchFilters.location = {
      [Op.iLike]: `%${location}%`,
    };
  if (phone)
    searchFilters.phone = {
      [Op.iLike]: `%${phone}%`,
    };
  if (customer) searchFilters.customer = customer;

  const users = await User.findAll({
    where: searchFilters,
  });

  const sortingFunction = (a, b) => {
    const sortOrder = _order === "ASC" ? 1 : -1;
    const aData = a.dataValues;
    const bData = b.dataValues;

    switch (_sort) {
      case "name":
        return sortOrder * aData.name.localeCompare(bData.name);
      case "location":
        return sortOrder * aData.location.localeCompare(bData.location);
      case "phone":
        return sortOrder * (aData.phone - bData.phone);
      case "message":
        return sortOrder * aData.message.localeCompare(bData.message);
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

  const orderedUsers = users.sort(sortingFunction);

  if (_start) return orderedUsers.slice(_start, _end);
  return orderedUsers;
};

module.exports = getUserHandler;
