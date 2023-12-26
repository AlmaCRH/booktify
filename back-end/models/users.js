const mongoose = require("mongoose");

const pronounsOptions = [
  "She/Her",
  "She/They",
  "They/Them",
  "He/Him",
  "He/They",
  "prefer not to say",
];

const statusTags = ["Favorites", "Reading", "Completed", "Paused", "Dropped"];

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  profile_pic: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  pronouns: [
    {
      type: String,
      enum: pronounsOptions,
    },
  ],
  log: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
      status: { type: String, enum: statusTags },
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
