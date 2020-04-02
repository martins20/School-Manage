import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Aluno from "../app/models/Aluno";
import User from "../app/models/User";

const models = [Aluno, User];

const connection = new Sequelize(databaseConfig);

models.map(model => model.init(connection));
