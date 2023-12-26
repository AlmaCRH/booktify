const mongoose = require("mongoose");

const pronounsOptions = [
  "She/Her",
  "She/They",
  "They/Them",
  "He/Him",
  "He/They",
  "prefer not to say",
];

const logSchema = new mongoose.Schema({
  favorites: {
    type: Array,
  },
  reading: {
    type: Array,
  },
  completed: {
    type: Array,
  },
  paused: {
    type: Array,
  },
  dropped: {
    type: Array,
  },
});

const Log = mongoose.model("Log", logSchema);

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
  log: {
    type: mongoose.ObjectId,
    ref: "Log",
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };
