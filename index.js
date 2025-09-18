// 
import express from "express";
import dotenv from "dotenv";
import bootstrap from "./src/app.controller.js";

dotenv.config(); // عشان يقرأ DB_URL من .env

const app = express();
bootstrap(app, express);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("🚀 server is running in port", port);
});
