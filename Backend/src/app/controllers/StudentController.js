import Student from "../models/Student";

import Photo from "../models/Photo";

class StudentController {
  async index(req, res) {
    const students = await Student.findAll({
      attributes: [
        "id",
        "name",
        "lastname",
        "email",
        "age",
        "weight",
        "height",
      ],
      order: [
        ["id", "DESC"],
        [Photo, "id", "DESC"],
      ],
      include: {
        model: Photo,
        attributes: ["url", "filename"],
      },
    });
    return res.json(students);
  }

  async show(req, res) {
    try {
      const student = await Student.findByPk(req.params.id, {
        attributes: [
          "id",
          "name",
          "lastname",
          "email",
          "age",
          "weight",
          "height",
        ],
        order: [
          ["id", "DESC"],
          [Photo, "id", "DESC"],
        ],
        include: {
          model: Photo,
          attributes: ["url", "filename"],
        },
      });

      if (!student)
        return res.status(400).json({ errors: ["Student not exists"] });

      return res.json(student);
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async store(req, res) {
    try {
      const student = await Student.create(req.body);

      return res.json(student);
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json({ errors: ["Id not exists"] });

      const student = await Student.findByPk(id);

      if (!student)
        return res.status(400).json({ errors: ["Student not exists"] });

      const updatedStudent = await student.update(req.body);

      return res.json(updatedStudent);
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const student = await Student.findByPk(req.params.id);

      if (!student)
        return res.status(400).json({ errors: ["Student not exists"] });

      await student.destroy();

      return res.json({ message: "Student removed with success." });
    } catch (error) {
      return res
        .status(400)
        .json({ errors: error.errors.map((err) => err.message) });
    }
  }
}

export default new StudentController();
