import { Router } from "express";

import AuthController from "./app/controllers/AuthController";
import UserController from "./app/controllers/UserController";

import Authenticated from "./app/middleware/Authenticated";

const routes = new Router();

// Rotas de usuarios
routes.post("/users", UserController.store);
// routes.get("/users", UserController.index);
// routes.get("/users/:id", UserController.show);

// Rota de Authenticação dos Usuarios
routes.get("/", AuthController.store);

// Rotas que precisam do Middleware de Authenticaçao
routes.put("/users", Authenticated, UserController.update);
routes.delete("/users", Authenticated, UserController.delete);

export default routes;
