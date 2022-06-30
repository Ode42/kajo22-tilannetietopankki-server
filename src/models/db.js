const getEnv = require("../config/getEnv");
const Pool = require("pg").Pool;

const pool = new Pool({
  user: getEnv().database.user,
  password: getEnv().database.password,
  database: getEnv().database.database,
  host: getEnv().database.host,
  port: getEnv().database.port,
});

module.exports = pool;
