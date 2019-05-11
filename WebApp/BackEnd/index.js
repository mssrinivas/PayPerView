var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var mongoose = require('./src/resources/mongoose');
var profile = require('./src/routes/profile')

app.use(cors({ origin: 'http://localhost:3500', credentials: true }));
app.use('/static',express.static(__dirname + 'public'));
//app.use(passport.initialize());

// var sessionStore = new MySQLStore(config);
//'var sessionStore = new MongoDBStore({
 // uri: 'mongodb://cmpe202:cmpe202@ds155086.mlab.com:55086/payperview',
//  collection: 'p_sessions'
//});

app.use(session({
  secret: "Iamsupersecretsecret",
  resave: false,
  saveUninitialized: false,
  duration: 600000000000 * 60 * 1000,
  activeDuration: 6 * 60 * 60 * 1000,
   cookie : {
        maxAge: 1000* 60 * 60 *24 * 365,
        expires : 3600000 * 24 * 60
},
//store: sessionStore
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/static',express.static('public'));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3500');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });


app.use('/', profile);

app.listen(4004);
console.log("Server listening on port 8000");
