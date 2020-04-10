import multer from "multer";
import MulterConfig from "../../config/multer";

import Photo from "../models/Photo";

const upload = multer(MulterConfig).single("file");

class PhotoController {
  async index(req, res) {}

  async show(req, res) {}

  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error],
        });
      }
      try {
        const { originalname, filename } = req.file;
        const { student_id } = req.body;

        const photo = await Photo.create({
          originalname,
          filename,
          student_id,
        });

        return res.json(photo);
      } catch (err) {
        return res.status(400).json({ errors: ["Student not exists."] });
      }
    });
  }

  async update(req, res) {}

  async delete(req, res) {}
}
export default new PhotoController();
