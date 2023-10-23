const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  iss: {
    type: String,
  },
  nbf: {
    type: Number,
  },
  aud: {
    type: String,
  },
  sub: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  email_verified: {
    type: Boolean,
  },
  azp: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  given_name: {
    type: String,
  },
  locale: {
    type: String,
  },
  exp: {
    type: Number,
  },
  iat: {
    type: Number,
  },
  jti: {
    type: String,
  },
});
const User = mongoose.model("whatsApp", userSchema);

module.exports = User;
