const express = require("express");
const tilanneRouter = require("./tilanneRouter");
const labelsRouter = require("./labelsRouter");

const router = express.Router();

router.use("/tilanne", tilanneRouter);
router.use("/labels", labelsRouter);

router.get("/", async (request, response) => {
  response.send("Hello from API");
});

module.exports = router;
