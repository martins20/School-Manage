import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      if (User.findOne({ email: req.body.email })) return res.json("stop");

      const novoUser = await User.create(req.body);

      const { id, nome, email } = novoUser;

      return res.json({ id, nome, email });
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .json({ error: error.errors.map(err => err.message) });
    }
  }
}

export default new UserController();
