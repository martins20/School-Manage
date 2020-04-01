import { Router } from "express";

import HomeController from "./controllers/HomeController";
import UserController from "./controllers/UserController";

const routes = new Router();

routes.post("/", HomeController.store);

routes.post("/users", UserController.store);

export default routes;
