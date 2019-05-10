var mongoose =require('mongoose');
var Schema = mongoose.Schema;

var SessionsSchema = new Schema({
	session_id: Number,
	expires: Number,
	data: String
})

var C_Sessions = mongoose.model("c_sessions", SessionsSchema, "c_sessions")
module.exports = C_Sessions;