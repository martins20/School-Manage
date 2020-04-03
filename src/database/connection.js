import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Student from "../app/models/Student";
import User from "../app/models/User";

const models = [Student, User];

const connection = new Sequelize(databaseConfig);

models.map(model => model.init(connection));
