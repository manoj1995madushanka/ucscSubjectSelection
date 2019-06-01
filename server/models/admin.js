var mongoose = require('mongoose')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

var AdminSchema = new mongoose.Schema({
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
  password: {
    type: String,
    required: true,
  },

})

AdminSchema.statics.authenticate = function (email, password, callback) {
  User.findOne({
      email: email
    })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not Found')
        err.status = 401
        return callback(err)
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          // change online status
          User.login(user._id, function (err, result) {
            console.log('authenticate login')
          })
          return callback(null, user)
        } else {
          return callback()
        }
      })
    })
}

AdminSchema.statics.login = function (userId, callback) {
  User.findOneAndUpdate({
    _id: userId
  }, function (err, result) {
    return callback(err, result)
  })
}
AdminSchema.statics.logout = function (userId, callback) {
  User.findOneAndUpdate({
    _id: userId
  }, {
    online: false
  }, function (err, result) {
    return callback(err, result)
  })
}

AdminSchema.statics.getUser = function (userId, callback) {
  User.findOne({
    _id: userId
  }, function (err, result) {
    return callback(err, result)
  })
}

AdminSchema.methods.generateJwt = function () {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    // _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

AdminSchema.pre('save', function (next) {
  var user = this
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err)
    }
    user.password = hash
    next()
  })
})

var Admin = mongoose.model('admin', AdminSchema)
module.exports = Admin
