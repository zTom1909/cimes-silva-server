const { sequelize } = require("./src/db");
const server = require("./src/server");
const PORT = 3001;

const { type } = require("./src/utils/config");
const isProduction = type === "production";

sequelize
  .sync({ force: !isProduction })
  .then(() => {
    console.log("Database synced correctly");
    server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  })
  .catch((error) => console.error(error));
