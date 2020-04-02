import { Router } from "express";

import HomeController from "./app/controllers/HomeController";
import UserController from "./app/controllers/UserController";

const routes = new Router();

routes.post("/", HomeController.store);

// Rotas de usuarios
routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.post("/users", UserController.store);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

export default routes;
