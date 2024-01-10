const { sequelize } = require("./src/db");
const app = require("./src/server");

const { type, server } = require("./src/utils/config");
const defaultAdmin = require("./src/utils/defaultAdmin");
const isProduction = type === "production";
const { port: PORT } = server;

sequelize
  .sync({ force: !isProduction })
  .then(async () => {
    console.log("Database synced correctly");
    await defaultAdmin();
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  })
  .catch((error) => console.error(error));
