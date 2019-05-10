var mongoose =require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    user_id : Number,
    name : String,
    email : String,
    password : String,
    profile_img : String,
    phone_number : Number,
    about_me : String,
    city : String,
    country : String,
    company : String,
    school : String,
    hometown : String,
    languages : String,
    gender : String,
})

var Users = mongoose.model("users", UsersSchema, "users")
module.exports = Users;