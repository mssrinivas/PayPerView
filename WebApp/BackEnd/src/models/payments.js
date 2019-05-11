var mongoose =require('mongoose');
var Schema = mongoose.Schema;

var PaymentsSchema = new Schema({
    email : String,
    card_nbr : String,
    card_bal : Number
})

var Payments = mongoose.model("paymeNumbernts", PaymentsSchema, "payments")
module.exports = Payments;