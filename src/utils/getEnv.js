const poolData = require("./../env.json");

const getEnv = () => {
  return poolData.variables;
};

module.exports = getEnv;
