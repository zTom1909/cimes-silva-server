const { sequelize } = require("./src/db");
const server = require("./src/server");
const PORT = 3001;

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database synced correctly");
    server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  })
  .catch((error) => console.error(error));
