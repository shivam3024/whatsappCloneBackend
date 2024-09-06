const message = require("../model/Message.js");
const conversation = require("../model/Conversation.js");
const newMessage = async (req, res) => {
  try {
    const newMessage = new message(req.body);
    await newMessage.save();
    await conversation.findByIdAndUpdate(req.body.conversationId, {
      message: req.body.text,
    });
    return res.status(200).json("message has been sent successfully");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const getMessages = async (req, res) => {
  try {
    const msg = await message.find({ conversationId: req.params.id });

    return res.status(200).json(msg);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
module.exports = { newMessage, getMessages };
