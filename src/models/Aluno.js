import Sequelize, { Model } from "sequelize";

export default class Alunos extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        lastname: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.INTEGER,
        weight: Sequelize.FLOAT,
        height: Sequelize.FLOAT
      },
      {
        sequelize
      }
    );
    return this;
  }
}
