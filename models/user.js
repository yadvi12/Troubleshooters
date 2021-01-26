const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const UserSchema = new mongoose.Schema({
    username: Number,
    password: String,
    age: Number,
    name: String
});
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);


