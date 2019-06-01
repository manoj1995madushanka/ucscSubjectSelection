const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');

router.post('/register', (req, res, next) => {
  var user = new User();

  user.name = req.body.name;
  user.email = req.body.email;
  user.role = 'student';

  user.setPassword(req.body.password);

  user.save(function (err) {

    var token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token": token
    });
  });

});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', function (err, user, info) {
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if (user) {
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token": token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);
})

module.exports = router;
