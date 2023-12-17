const { Product } = require("../../db");
const addProductHandler = async (name, image) => {
  return await Product.create({ name, image });
};

module.exports = addProductHandler;
