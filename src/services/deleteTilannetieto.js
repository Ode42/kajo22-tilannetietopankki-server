const pool = require("./../models/db");

async function deleteTilannetieto(tieto_id) {
  const deleteTieto = pool.query(
    `DELETE FROM tilannetiedot WHERE tieto_id = ${tieto_id}`
  );
  return 204;
}

module.exports = deleteTilannetieto;
