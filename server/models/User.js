var mongoose = require('mongoose')
var jwt = require('jsonwebtoken')
var crypto = require('crypto');

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
  },
  hash: String,
  salt: String
})

// userSchema.statics.authenticate = function (email, password, callback) {
//   User.findOne({
//       email: email
//     })
//     .exec(function (err, user) {
//       if (err) {
//         return callback(err)
//       } else if (!user) {
//         var err = new Error('User not Found')
//         err.status = 401
//         return callback(err)
//       }
//       bcrypt.compare(password, user.password, function (err, result) {
//         if (result === true) {
//           // change online status
//           User.login(user._id, function (err, result) {
//             console.log('authenticate login')
//           })
//           return callback(null, user)
//         } else {
//           return callback()
//         }
//       })
//     })
// }

// userSchema.statics.login = function (userId, callback) {
//   User.findOneAndUpdate({
//     _id: userId
//   }, {
//     online: true
//   }, function (err, result) {
//     return callback(err, result)
//   })
// }
// userSchema.statics.logout = function (userId, callback) {
//   User.findOneAndUpdate({
//     _id: userId
//   }, {
//     online: false
//   }, function (err, result) {
//     return callback(err, result)
//   })
// }

userSchema.statics.getUser = function (userId, callback) {
  User.findOne({
    _id: userId
  }, function (err, result) {
    return callback(err, result)
  })
}

userSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

userSchema.methods.validPassword = function (password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function () {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    role: this.role,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

// userSchema.pre('save', function (next) {
//   var user = this
//   bcrypt.hash(user.password, 10, function (err, hash) {
//     if (err) {
//       return next(err)
//     }
//     user.password = hash
//     next()
//   })
// })

var User = mongoose.model('User', userSchema)
module.exports = User
