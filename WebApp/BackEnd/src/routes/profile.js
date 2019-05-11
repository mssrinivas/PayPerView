var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var urlencodedParser = bodyparser.urlencoded({extended: false});
var Users = require('../models/users');
var Payments = require('../models/payments')

router.get('/user/getProfile/:email', urlencodedParser, function(req, res){
    
    console.log("Get Profile API")
    console.log(req.params.email);
    var email = req.params.email;
    Users.findOne({email: email}, function(err,user){
        if (err) {
            res.code = "400";
            res.status(400); 
        } else if(user){
            console.log(user);
            res.status(200).json(user);
        }
        
    })
})

router.post('/user/setProfile', urlencodedParser, function(req, res){
    
    //console.log("Set Profile API" + req.body.user_id +  req.body.email + req.body.phone_number + req.body.about_me +  req.body.city +  req.body.company +  req.body.school+  req.body.country+  req.body.hometown+  req.body.languages+  req.body.gender)
    console.log("In set profile")
    console.log(req.body)
    var email = req.body.email;

    if(req.body.phone_number==null) {
        req.body.phone_number=0;
    }
    Users.update(
        {
            email: email
        },
        { $set: 
            {
                phone_number: req.body.phone_number,
                about_me: req.body.about_me,
                city: req.body.city,
                company: req.body.company,
                school: req.body.school,
                country: req.body.country,
                hometown: req.body.hometown,
                languages: req.body.languages,
                gender: req.body.gender
            }
        }, function(err, user){
            if (err) {
                res.code = "400";
                res.status(400); 
            } else {
                res.status(200).json({});
            }
    })
})

router.post('/user/addCard', urlencodedParser, function(req, res){
    console.log("In add card");
    console.log(req.body);
    var email = req.body.email;
    var cardId = parseInt(req.body.cardId, 10);
    var code = parseInt(req.body.cardCode, 10);
    var expDate = req.body.expirationDate;
    Users.updateOne({
        email: email
    }, {$set: {
        "cards.card_id": cardId,
        "cards.card_code": code,
        "cards.expiration_date": expDate
    }})
    .then((result) => {
        var payment = new Payments({
            email: email,
            card_nbr: cardId,
            card_bal: 100
        })
        payment.save()
        .then((result) => 
        {console.log(result)}
        )
        .catch((error) => {
            console.log(error)
        })
    })
    .catch((error) => {
        console.log(error)
    })
})

module.exports = router;