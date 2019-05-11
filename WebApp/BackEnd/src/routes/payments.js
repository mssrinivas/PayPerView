var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var urlencodedParser = bodyparser.urlencoded({extended: false});
var Payments = require('../models/payments');

router.post('/user/Payments/', urlencodedParser,async function(req, res){
    console.log("Came here")
    var user_id = req.body.email;
    console.log(user_id)
    console.log('in paymnets')
    var card_bal1 = await Payments.findOne({email: req.body.email}, {_id: 0, card_bal: 1});
    console.log("card bal ",card_bal1)
    var cardbalance=card_bal1.card_bal

    try{
    let {paymentResponse}= await Payments.update(
        {
            email: req.body.email
        },
        {
            $set:
            {
                card_bal : cardbalance - req.body.amt_to_be_deducted
            }
        },
        
        function(err, user){
            if (err) {
                res.code = "400";
                res.status(400); 
            } else {
                res.status(200).json({result : 'Payment success'});
            }
        }
    )
    }
    catch(error) {
        res.send({err:"Payment failed"})

    }

    
})

module.exports = router;