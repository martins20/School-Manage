import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Student from "../app/models/Student";
import User from "../app/models/User";
import Photo from "../app/models/Photo";

const models = [Student, User, Photo];

const connection = new Sequelize(databaseConfig);

models.map(model => model.init(connection));

models.map(model => model.associate && model.associate(connection.models));
