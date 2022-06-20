const express = require("express");
const bp = require("body-parser");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded());

const router = require("./routes/router");

app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});

app.get("/", (request, response) => {
  response.send("Hello World");
});
