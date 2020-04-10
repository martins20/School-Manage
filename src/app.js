import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config();

import "./database/connection";

import express from "express";

import routes from "./routes";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, "..", "temp", "uploads")));
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
