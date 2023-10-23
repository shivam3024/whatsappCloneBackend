import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import Route from "./routes/route.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Route);
const PORT = process.env.PORT_SERVER || 8090;
const DBURL = process.env.DB_URL;

Connection(DBURL);

app.listen(PORT, () => {
  console.log(`Server is running successfully on ${PORT}`);
});
