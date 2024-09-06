const grid = require("gridfs-stream");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const url = process.env.BASE_URL;
let gfs, gridFSBucket;

const conn = mongoose.connection;
conn.once("open", async () => {
  gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "fs",
  });
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("fs");
});
const uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(404).json("file not found");
  }
  const imageUrl = `${url}/file/${req.file.filename}`;
  return res.status(200).json(imageUrl);
};
const getImage = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gridFSBucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
module.exports = { uploadFile, getImage };
