const { Admin } = require("../../db");
const editAdminHandler = async (id, properties) => {
  const validValues = Object.values(properties).filter((value) => value !== undefined);
  if (!validValues.length) throw new Error("Properties to edit are empty.");
  await Admin.update(properties, { where: { id } })
  return await Admin.findOne({
    where: { id },
    attributes: { exclude: ["password"] },
  });
};

module.exports = editAdminHandler;
