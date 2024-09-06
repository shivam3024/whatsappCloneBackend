const express = require("express");

const { addUser, getUsers } = require("../controller/userController.js");
const {
  newConversation,
  getConversation,
} = require("../controller/ConversationController.js");
const {
  newMessage,
  getMessages,
} = require("../controller/messageController.js");
const { uploadFile, getImage } = require("../controller/imageController.js");

const upload = require("../utils/upload.js");
const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUsers);
route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);
route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessages);
route.post("/file/upload", upload.single("file"), uploadFile);
route.get("/file/:filename", getImage);

module.exports = route;
