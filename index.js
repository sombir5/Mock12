const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const addItems = require("./routes/routes");
const connect = require("./config/db");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());

app.use("/", addItems);

app.listen(PORT, async () => {
  await connect();
  console.log(`Listening at http://localhost:${PORT}`);
});
