const express = require("express");
const router = express.Router();
const pool = require("../models/db");
const labels = require("../config/labels");
const getTilannetiedot = require("./../services/getTilannetiedot");

router.get("/", (request, response) => {
  response.send("Hello from tilannetiedot");
});

router.get("/tilannetiedot", async (request, response) => {
  try {
    const tilannetiedot = await getTilannetiedot();
    response.json(tilannetiedot);
  } catch (error) {
    console.error(error);
  }
});

router.get("/labels", async (request, response) => {
  try {
    response.send(labels);
  } catch (error) {
    console.error(error);
  }
});
router.post("/tilannetiedot", async (request, response) => {
  try {
    const { tietoKuvaus } = request.body;
    const { tieto_time } = request.body;
    const { tietoLahettaja } = request.body;
    const { tietoLabel } = request.body;

    const uusiTieto = await pool.query(
      "INSERT INTO tilannetiedot (kuvaus, tieto_time, lahettaja, label) VALUES ($1, $2, $3, $4) RETURNING *",
      [tietoKuvaus, tieto_time, tietoLahettaja, tietoLabel]
    );

    response.json(uusiTieto.rows);
  } catch (error) {
    console.error(error);
  }
});

router.delete("/tilannetiedot/:id", (request, response) => {
  const tietoId = request.params.id;
  const deleteTieto = pool.query(
    `DELETE FROM tilannetiedot WHERE tieto_id = ${tietoId}`
  );
  response.send(204);
});
module.exports = router;
