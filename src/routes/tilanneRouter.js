const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
  response.send("Hello from API");
});

module.exports = router;
