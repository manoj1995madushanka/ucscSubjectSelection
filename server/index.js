var http = require('http');
var port = process.env.PORT || 8080;
var express = require('express');
var app = express();
const passport = require('passport');

var appRoutes = require('./routes/appRoutes');
var adminRoutes = require('./routes/admin-routes');
var authRoutes = require('./routes/auth-routes');

const passportSetup = require('./config/passport');

var bodyParser = require('body-parser');
var cors = require('cors');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ucsc', {
  useNewUrlParser: true
});
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
  // connected
  console.log('mongoDB connected!')
})

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());



//avoid CORS issues
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //res.header("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,PATCH,OPTIONS");
  next();
});
app.use(passport.initialize());

app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
app.use('/', appRoutes);


http.createServer(app).listen(port);


console.log("running on port", port);
