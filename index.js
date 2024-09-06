const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const Connection = require("./database/db.js");
const Route = require("./routes/route.js");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const corsOrigin = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOrigin));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Route);
const PORT = process.env.PORT_SERVER || 8090;
const DBURL = process.env.DB_URL;

Connection(DBURL);

app.listen(PORT, () => {
  console.log(`Server is running successfully on ${PORT}`);
});
