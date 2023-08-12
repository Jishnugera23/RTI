const express = require("express");
require("dotenv").config();
const db_connect = require("./database");
const router = require("./Routes/index");
db_connect();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 5001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  router(app);
});
