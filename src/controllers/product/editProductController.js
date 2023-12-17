const editProductHandler = require("../../handlers/product/editProductHandler");
const editProductController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image } = req.body;

    const product = await editProductHandler(id, {
      name,
      image,
    });
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = editProductController;
