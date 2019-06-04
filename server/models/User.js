var mongoose = require('mongoose')
var jwt = require('jsonwebtoken')
var crypto = require('crypto');

var userSchema = new mongoose.Schema({
  _id: String,
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  index: {
    type: String,
    required: false,
  },
  regNo: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: true,
  },
  subjects: {
    type: Array,
    required: false,
  },
  course: String,
  hash: String,
  salt: String
})

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
