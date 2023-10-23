const conversation = require("../model/Conversation.js");

const newConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;
    const exist = await conversation.findOne({
      members: { $all: [receiverId, senderId] },
    });
    if (exist) {
      return res.status(200).json("Conversation already exist");
    }
    const new_Conversation = new conversation({
      members: [senderId, receiverId],
    });
    await new_Conversation.save();
    return res.status(200).json("convesation saves successfully");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const getConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;
    let Conversation = await conversation.findOne({
      members: { $all: [receiverId, senderId] },
    });

    return res.status(200).json(Conversation);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
module.exports = { newConversation, getConversation };
