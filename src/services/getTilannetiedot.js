const pool = require("./../models/db");

async function getTilannetiedot() {
  const tilannetiedot = await pool.query("SELECT * FROM tilannetiedot");
  return tilannetiedot.rows;
}

module.exports = getTilannetiedot;
