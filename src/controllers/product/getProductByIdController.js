const getProductByIdHandler = require("../../handlers/product/getProductByIdHandler");
const getProductByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductByIdHandler(id);
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = getProductByIdController;
