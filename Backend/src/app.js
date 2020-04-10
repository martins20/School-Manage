import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config();

import "./database/connection";

import express from "express";
import cors from "cors";
import helmet from "helmet";

import routes from "./routes";

const whiteList = ["http://localhost:3333"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("not allowed by CORS"));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, "..", "temp", "uploads")));
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
