const addProductHandler = require("../../handlers/product/addProductHandler");
const addProductController = async (req, res) => {
  try {
    const { name, image } = req.body;
    const newProduct = await addProductHandler(name, image);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = addProductController;
