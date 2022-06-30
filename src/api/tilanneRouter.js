const express = require("express");
const router = express.Router();
const labels = require("../config/labels");
const getTilannetiedot = require("./../services/getTilannetiedot");
const newTilannetieto = require("./../services/newTilannetieto");
const deleteTilannetieto = require("./../services/deleteTilannetieto");

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

    const uusiTieto = await newTilannetieto(
      tietoKuvaus,
      tieto_time,
      tietoLahettaja,
      tietoLabel
    );
    response.json(uusiTieto);
  } catch (error) {
    console.error(error);
  }
});

router.delete("/tilannetiedot/:id", async (request, response) => {
  const tieto_id = request.params.id;
  const deleted = await deleteTilannetieto(tieto_id);

  return deleted;
});
module.exports = router;
