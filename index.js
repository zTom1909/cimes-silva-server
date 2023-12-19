const { sequelize } = require("./src/db");
const server = require("./src/server");

const { type, server } = require("./src/utils/config");
const isProduction = type === "production";
const { port: PORT } = server

sequelize
  .sync({ force: !isProduction })
  .then(() => {
    console.log("Database synced correctly");
    server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  })
  .catch((error) => console.error(error));
