const mongoose = require("mongoose")

const UsersSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    age:{
        type: Number,
    },
    email:{
        type: String,
    },
})

const UserModel = mongoose.model("users", UsersSchema )
module.exports = UserModel