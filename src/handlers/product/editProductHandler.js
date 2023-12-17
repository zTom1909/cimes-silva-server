const { Admin } = require("../../db");
const getAdminByIdHandler = async (id, properties) => {
  const validValues = Object.values(properties).filter((value) => !!value);
  if (!validValues.length) throw new Error("Properties to edit are empty.");
  await Admin.update(properties, { where: { id } })
  return await Admin.findByPk(id);
};

module.exports = getAdminByIdHandler;
