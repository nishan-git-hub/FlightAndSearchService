const express = require("express");
const { PORT } = require("./config/server.config.js");

const setupAndStartServer = async () => {
  const app = express();
  app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
  });
};

setupAndStartServer();
