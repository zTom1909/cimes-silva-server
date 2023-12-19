const { sequelize } = require("./src/db");
const app = require("./src/server");

const { type, server } = require("./src/utils/config");
const isProduction = type === "production";
const { port: PORT } = server

sequelize
  .sync({ force: !isProduction })
  .then(() => {
    console.log("Database synced correctly");
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  })
  .catch((error) => console.error(error));
