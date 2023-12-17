const { Product } = require("../../db");
const editProductHandler = async (id, properties) => {
  const validValues = Object.values(properties).filter(
    (value) => value !== undefined
  );
  if (!validValues.length) throw new Error("Properties to edit are empty.");
  await Product.update(properties, { where: { id } });
  return await Product.findByPk(id);
};

module.exports = editProductHandler;
