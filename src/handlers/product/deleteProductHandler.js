const { Product } = require("../../db");
const deleteProductHandler = async (id) => {
  await Product.update({ isDisabled: true }, { where: { id } });
  return await Product.findByPk(id);
};

module.exports = deleteProductHandler;
