const mongoose = require("mongoose");

mongoose.connect("mongoDB link");

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const user = new User({ name: "Sahil", email: "s@s.c", password: "s@123" });
user.save();