const express = require("express");

const router = express.Router();
const labels = require("./../utils/labels");

router.get("/", (request, response) => {
  response.send(labels);
});

module.exports = router;
