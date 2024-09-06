const multer = require("multer");
const dotenv = require("dotenv");
dotenv.config();
const { GridFsStorage } = require("multer-gridfs-storage");
const storage = new GridFsStorage({
  url: process.env.DB_URL,
  options: { useUnifiedTopology: true, useNewUrlParser: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpg"];
    if (match.indexOf(file.mimeType) === -1) {
      return `${Date.now()}-file-${file.originalname}`;
    }
    return {
      bucketName: "photos",
      filename: `${Date.now()}-file-${file.originalname}`,
    };
  },
});
module.exports = multer({ storage });
