import express from "express";
import bootstrap from "./src/app.controller.js";
const app = express();
bootstrap(app,express);
const port = 3000;
app.listen(port, ()=>{
    console.log("server is running in port",port);
});