const { Sequelize } = require("sequelize");
const config = require("./utils/config");
const UserModel = require("./models/User");
const AdminModel = require("./models/Admin")
const ProductModel = require("./models/Product")

const { database } = config;
const { host, name, password, user } = database;
const URL = `postgres://${user}:${password}@${host}/${name}`;

const sequelize = new Sequelize(URL, { logging: false, native: false });
UserModel(sequelize);
AdminModel(sequelize)
ProductModel(sequelize)

module.exports = {
  sequelize,
  ...sequelize.models,
};
