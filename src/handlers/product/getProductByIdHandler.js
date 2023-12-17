const { Product } = require("../../db");
const getProductByIdHandler = async (id) => {
  return await Product.findByPk(id);
};

module.exports = getProductByIdHandler;
