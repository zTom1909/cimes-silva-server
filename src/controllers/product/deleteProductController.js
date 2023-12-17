const deleteProductHandler = require("../../handlers/product/deleteProductHandler");
const deleteProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await deleteProductHandler(id);
    res.status(200).json(deletedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteProductController;
