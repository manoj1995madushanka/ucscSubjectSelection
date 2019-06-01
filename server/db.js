var url = "mongodb://localhost:27017/ucsc";
var MongoClient = require('mongodb').MongoClient;
var _db;

module.exports = {

  connectToServer: function (callback) {
    MongoClient.connect(url, {
      useNewUrlParser: true
    }, function (err, client) {
      _db = client.db('ucsc');
      return callback(err);
    });
  },

  getDb: function () {
    return _db;
  }
};
