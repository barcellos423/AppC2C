import express from "express";
import path from "path";
const app = express();

app.set("view engine", "ejs");

import * as url from 'url';
import locaisController from "./controllers/locaisController.js";
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

import routes from "./routes/index.js"
routes(app);

export default app