const mongoose = require("mongoose");

const pronounsOptions = [
  "She/Her",
  "She/They",
  "They/Them",
  "He/Him",
  "He/They",
  "prefer not to say",
];

const statusTags = ["Reading", "Completed", "Paused", "Dropped, Pending"];

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  profile_pic: {
    type: String,
    default: "uwu"
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["member", "admin"],
    default: "member"
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
