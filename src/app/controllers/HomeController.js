import Aluno from "../models/Aluno";

class HomeController {
  async store(req, res) {
    const { name, lastname, email, age, weight, height } = req.body;
    const novoAluno = await Aluno.create({
      name,
      lastname,
      email,
      age,
      weight,
      height
    });
    res.json({
      message: novoAluno
    });
  }
}

export default new HomeController();
