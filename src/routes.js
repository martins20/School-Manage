import { Router } from "express";

import HomeController from "./controllers/HomeController";

const routes = new Router();

routes.post("/", HomeController.store);

export default routes;
