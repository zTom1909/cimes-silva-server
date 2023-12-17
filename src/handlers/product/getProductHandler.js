const { Op } = require("sequelize");
const { Product } = require("../../db");
const getProductHandler = async (amount, order, filters) => {
  const { _start, _end } = amount;
  const { _sort, _order } = order;
  const { name, isDisabled = false } = filters;

  let searchFilters = {};
  if (name)
    searchFilters.name = {
      [Op.iLike]: `%${name}%`,
    };
  searchFilters.isDisabled = isDisabled;

  const products = await Product.findAll({
    where: searchFilters,
  });

  const sortingFunction = (a, b) => {
    const sortOrder = _order === "ASC" ? 1 : -1;
    const aData = a.dataValues;
    const bData = b.dataValues;

    switch (_sort) {
      case "name":
        return sortOrder * aData.name.localeCompare(bData.name);
      case "image":
        return sortOrder * aData.image.localeCompare(bData.image);
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

  const orderedProducts = products.sort(sortingFunction);
  const totalCount = orderedProducts.length;
  if (_start) return { data: orderedProducts.slice(_start, _end), totalCount };
  return { data: orderedProducts, totalCount };
};

module.exports = getProductHandler;
