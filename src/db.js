const { Sequelize } = require("sequelize");
const config = require("./utils/config");
const UserModel = require("./models/User");

const { database } = config;
const { host, name, password, user } = database;
const URL = `postgres://${user}:${password}@${host}/${name}`;

const sequelize = new Sequelize(URL, { logging: false, native: false });
UserModel(sequelize);

module.exports = {
  sequelize,
  ...sequelize.models,
};
