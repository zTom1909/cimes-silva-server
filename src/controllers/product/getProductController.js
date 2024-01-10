const getProductHandler = require("../../handlers/product/getProductHandler");
const getProductController = async (req, res) => {
  try {
    const { _start, _end, _sort, _order, name, isDisabled = false } = req.query;
    const products = await getProductHandler(
      { _start, _end },
      { _sort, _order },
      { name, isDisabled }
    );
    const totalCount = products.totalCount;
    res.setHeader("X-Total-Count", totalCount);
    res.status(200).json(products.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = getProductController;
