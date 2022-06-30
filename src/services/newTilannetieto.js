const pool = require("./../models/db");

async function newTilannetieto(kuvaus, tieto_time, lahettaja, label) {
  try {
    const uusiTieto = await pool.query(
      "INSERT INTO tilannetiedot (kuvaus, tieto_time, lahettaja, label) VALUES ($1, $2, $3, $4) RETURNING *",
      [kuvaus, tieto_time, lahettaja, label]
    );
    return uusiTieto.rows;
  } catch (error) {
    console.error(error);
  }
}

module.exports = newTilannetieto;
