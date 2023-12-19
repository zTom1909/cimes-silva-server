require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_URL, SV_PORT, TYPE } =
  process.env;

module.exports = {
  database: {
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    name: DB_NAME,
    url: DB_URL,
  },
  server: {
    port: SV_PORT,
  },
  type: TYPE,
};
