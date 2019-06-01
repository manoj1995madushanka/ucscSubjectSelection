const BscSc = require('../../models/BscCs');

module.exports.removeSubject = (req, res) => {
  BscSc.findOneAndRemove({
    _id: req.params.id
  }, (err, student) => {
    res.json(student);
  })
};

module.exports.updateSubject = (req, res) => {
  const subject = new BscSc();
  subject.name = req.body.name;
  subject.code = req.body.code;
  subject.credits = req.body.credits;
  subject.availability = req.body.availability;
  subject._id = req.body.code;

  BscSc.findOneAndUpdate({
    _id: req.params.id
  }, subject, (err, st) => {
    if (err) res.json(err);
    else res.json(subject);
  })
};

module.exports.addSubject = (req, res) => {
  const subject = new BscSc();
  subject.name = req.body.name;
  subject.code = req.body.code;
  subject.credits = req.body.credits;
  subject.availability = req.body.availability;
  subject._id = req.body.code;

  subject.save(err => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else res.json(req.body);
  })
};

module.exports.getSubjects = (req, res) => {
  BscSc.find({}, (err, subs) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else res.json(subs);
  })
};
