const express = require("express");

const app = express();
const PORT = 3001;

const tilanneRouter = require("./routes/tilanneRouter");

app.use("/api/v1", tilanneRouter);

app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});

app.get("/", (request, response) => {
  response.send("Hello World");
});
