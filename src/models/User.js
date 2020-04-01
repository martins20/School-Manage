import Sequelize, { Model } from "sequelize";
import bcrypt from "bcryptjs";

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [4, 255],
              error: "field name should be 3 and 255 characters."
            }
          }
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            error: "E-mail already exists."
          },
          validate: {
            isEmail: {
              error: "E-mail invalid."
            }
          }
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: ""
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: "",
          validate: {
            len: {
              args: [6, 50],
              error: "field password should be 6 and 50 characters."
            }
          }
        }
      },
      {
        sequelize
      }
    );

    this.addHook("beforeSave", async user => {
      user.password_hash = await bcrypt.hash(user.password, 8);
    });
    return this;
  }

  passwordIsValid(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}
