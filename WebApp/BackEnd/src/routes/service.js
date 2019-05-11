var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var urlencodedParser = bodyparser.urlencoded({extended: false});
var Users = require('../models/users');

router.get('/api/getProfile/:user_id', urlencodedParser, function(req, res){
    
    console.log("Get Profile API")
    console.log(req.params.user_id);
    var user_id = req.params.user_id;
    Users.findOne({user_id: user_id},
    {courses: 0, submissions: 0, messages: 0}, function(err,user){
        if (err) {
            res.code = "400";
            res.status(400); 
        } else if(user){
            console.log(user);
            res.status(200).json(user);
        }
        
    })
})

router.post('/api/setProfile/', urlencodedParser, function(req, res){
    
    //console.log("Set Profile API" + req.body.user_id +  req.body.email + req.body.phone_number + req.body.about_me +  req.body.city +  req.body.company +  req.body.school+  req.body.country+  req.body.hometown+  req.body.languages+  req.body.gender)
    console.log(req.body.phone_number)
    var user_id = req.body.user_id;

    if(req.body.phone_number==null) {
        req.body.phone_number=0;
    }
    Users.update(
        {
            user_id: user_id
        },
        { $set: 
            {
                email: req.body.email,
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

module.exports = router;