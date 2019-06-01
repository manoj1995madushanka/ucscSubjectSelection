const express = require('express');
const router = express.Router();
var Admin = require('../models/admin');

// router.post('/register', (req, res, next) => {
//   // console.log(req.body.email);
//   var email = req.body.email;
//   var name = req.body.name;
//   var password = req.body.password;

//   if (req.body.email && req.body.name && req.body.password) {
//     var userData = {
//       email,
//       name,
//       password
//     };

//     User.create(userData, function (error, user) {
//       if (error) {
//         return next(error)
//       } else {
//         // req.session.userId = user._id
//         return res.redirect('/chat')
//       }
//     })
//   } else {
//     var err = new Error("All fields required")
//     err.status = 400
//     return next(err)
//   }
// });

module.exports = router;
