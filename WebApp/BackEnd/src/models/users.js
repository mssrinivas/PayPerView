var mongoose =require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
    name : String,
    email : String,
    password : String,
    phone_number : Number,
    about_me : String,
    city : String,
    country : String,
    company : String,
    school : String,
    hometown : String,
    languages : String,
    gender : String,
    cards: {
        card_id: Number,
        card_code: Number,
        expiration_date: Date
    }
})

var Users = mongoose.model("users", UsersSchema, "users")
module.exports = Users;