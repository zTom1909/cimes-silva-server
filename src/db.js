const { Sequelize } = require("sequelize");
const config = require("./utils/config");
const UserModel = require("./models/User");
const AdminModel = require("./models/Admin");
const ProductModel = require("./models/Product");

const { database, type } = config;
const { host, name, password, user, url } = database;
const URL = url || `postgres://${user}:${password}@${host}/${name}`;
const sqlConfig =
  type === "production" || type === "reset"
    ? {
        logging: false,
        native: false,
        dialect: "postgres",
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : { logging: false, native: false };

const sequelize = new Sequelize(URL, sqlConfig);
UserModel(sequelize);
AdminModel(sequelize);
ProductModel(sequelize);

module.exports = {
  sequelize,
  ...sequelize.models,
};
