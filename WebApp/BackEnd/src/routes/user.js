var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');
var urlencodedParser = bodyparser.urlencoded({extended: false});
var bcrypt = require('bcryptjs');
var Users = require('../models/users');
const jwt = require('jsonwebtoken');
const jwtkey = require('../../config/keys');

router.post('/user/signup/', urlencodedParser, function(req, res){
    console.log("Inside sign up" + req.body.name)
    var salt = bcrypt.genSaltSync(10);
    var encryptedpassword = bcrypt.hashSync(req.body.password, salt);
    var user = new Users({
        email : req.body.email,
        password : encryptedpassword,
        name : req.body.name,
    })

    user.save().then((user) => {
        console.log("User : " + user);
        res.code = "200";
        res.sendStatus(200).end();
    },(err) =>{
        res.sendStatus(400).end();
    })
})

router.post('/user/login/', urlencodedParser, function(req, res){
    var email = req.body.email;
    var password = req.body.password;
    console.log("Email ID:",email + " password:",password);
    emailstring = email.replace("%40", "@")
    console.log("Setting up login for :", emailstring);
    
    Users.findOne({
        email: req.body.email
    }, function(err,user){
        if (err) {
            console.log("err");
            res.code = "201";
            res.value = "Incorrect emailid and password";
            console.log(res.value);
            res.sendStatus(201).end(); 
        }
        else if(user==null){
            res.code = "201";
            res.value = "User does not exist in the database";
            console.log(res.value);
            res.sendStatus(201).end(); 
        }
        else if(user.password){
            bcrypt.compare(req.body.password, user.password, function(err, results) {
                console.log('User pwd ', req.body.password)
                console.log('Pwd in Database ', user.password)
                console.log("results" + results);
         if(results){
    /*         res.writeHead(200,{
                'Content-Type' : 'application-json'
            }) */
            jwt.sign({ user: user }, jwtkey.secret, { expiresIn: '10080s' }, (err, token) => {
                console.log("token : " + token)
                var values = {
                    token: 'JWT ' + token
                }
                /* res.cookie('cookie',emailstring,{maxAge: 900000, httpOnly: false, path : '/'});  */
                req.session.user = user;
                console.log(req.session.user);
                res.status(200).json(values);
            });         
         }
            });
         }
    })
})

router.get('/user/ping', urlencodedParser, function(req, res){
    console.log("Inside ping");
    // var salt = bcrypt.genSaltSync(10);
    // var encryptedpassword = bcrypt.hashSync(req.body.password, salt);
    // var user = new Users({
    //     email : req.body.email,
    //     password : encryptedpassword,
    //     name : req.body.name,
    // })

    // user.save().then((user) => {
    //     console.log("User : " + user);
    //     res.code = "200";
    //     res.sendStatus(200).end();
    // },(err) =>{
        res.sendStatus(200).end();
    // })
})

module.exports = router;