const express = require("express");
const tilanneRouter = require("./tilanneRouter");

const router = express.Router();

router.use("/tilanne", tilanneRouter);

router.get("/", async (request, response) => {
  response.send("Hello from API");
});

module.exports = router;
