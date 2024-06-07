import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./router";
import { dbConnect } from "./config/mongo";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
// app.use(cors({ origin: "http://localhost:8001" }));
app.use(express.json());
app.use(router);

dbConnect().then().catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
