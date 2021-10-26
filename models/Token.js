//Require mongoose package
var mongoose = require("mongoose");

//Define schema of chats
var tokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600, // this is the expiry time in seconds
  },
  lastUpdate: Date,
  //Automatically gets the date of creation of the user
  created: {
    type: Date,
    default: Date.now(),
  },
});

//Export our schema, this reference will be used in other models
module.exports = mongoose.model("Token", tokenSchema);
