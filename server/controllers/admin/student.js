const User = require('../../models/User');
const BscSc = require('../../models/BscCs');

module.exports.unassignSubject = (req, res) => {
  const student = req.body.student;
  const sub = req.body.subject;

  User.updateOne({
    _id: student.index
  }, {
    $pullAll: {
      subjects: [sub]
    }
  }, (err, done) => {
    res.json(done);
  })
}
module.exports.assignSubject = (req, res) => {
  const student = req.body.student;
  const sub = req.body.subject;

  User.updateOne({
    _id: student.index
  }, {
    $push: {
      subjects: sub
    }
  }, (err, done) => {
    res.json(done);
  })
}
module.exports.getElegibleSubjects = (req, res) => {
  const course = req.params.course;
  if (course === 'bsc-cs') {
    BscSc.find({
      availability: 'optional'
    }, (err, subs) => {
      if (err) res.sendStatus(500);
      else res.json(subs);
    })
  }
};

module.exports.removeStudent = (req, res) => {
  User.findOneAndRemove({
    _id: req.params.id
  }, (err, student) => {
    res.json(student);
    console.log(student);
  });
};

module.exports.updateStudent = (req, res) => {
  const student = new User();

  student._id = req.body.index;
  student.name = req.body.name;
  student.email = req.body.email;
  student.index = req.body.index;
  student.regNo = req.body.regNo;
  User.findOneAndUpdate({
    _id: req.params.id
  }, student, (err, st) => {
    if (err) res.json(err);
    else res.json(student);
  })
};

module.exports.addStudent = (req, res) => {
  const student = new User();

  student._id = req.body.index;
  student.name = req.body.name;
  student.email = req.body.email;
  student.index = req.body.index;
  student.regNo = req.body.regNo;
  student.role = 'student';
  student.setPassword(req.body.password);

  student.save((err) => {
    if (err) {
      console.log('student new', err);
      res.send(500);
    } else res.json(student);
  })
};

module.exports.getStudents = (req, res) => {
  User.find({}, (err, users) => {
    let students = [];
    users.forEach(user => {
      if (user.role === 'student') {
        const st = {
          name: user.name,
          email: user.email,
          index: user.index,
          regNo: user.regNo,
          subjects: user.subjects,
          course: user.course
        }
        students.push(st);
      }
    });
    res.json(students);
  })
};
