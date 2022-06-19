const express = require("express");

const app = express();
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});

app.get("/", (request, response) => {
  response.send("Hello World");
});
