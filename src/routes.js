import { Router } from "express";

import AuthController from "./app/controllers/AuthController";
import UserController from "./app/controllers/UserController";
import StudentController from "./app/controllers/StudentController";

import Authenticated from "./app/middleware/Authenticated";

const routes = new Router();

// Rotas de usuarios
routes.post("/users", UserController.store);

// routes.get("/users", UserController.index);
// routes.get("/users/:id", UserController.show);

// Rota de Authenticação dos Usuarios
routes.get("/", AuthController.store);

// Rotas de Alunos
routes.get("/students", StudentController.index);
routes.get("/students/:id", StudentController.show);

// Rotas que precisam do Middleware de Authenticaçao
routes.use(Authenticated);

routes.put("/users", UserController.update);
routes.delete("/users", UserController.delete);

// Rotas de Alunos
routes.post("/students", StudentController.store);
routes.put("/students/:id", StudentController.update);
routes.delete("/students/:id", StudentController.delete);

export default routes;
