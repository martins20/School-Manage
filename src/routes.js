import { Router } from "express";

import HomeController from "./app/controllers/HomeController";
import UserController from "./app/controllers/UserController";

const routes = new Router();

routes.post("/", HomeController.store);

routes.post("/users", UserController.store);

export default routes;
