import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-resume.pdf");
  },
});

const upload = multer({ storage });

export default upload;
