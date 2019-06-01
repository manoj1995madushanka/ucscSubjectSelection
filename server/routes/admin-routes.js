const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.delete('/student/:id', (req, res) => {
  User.findOneAndRemove({
    _id: req.params.id
  }, (err, student) => {
    res.json(student);
    console.log(student);
  })

})

router.put('/student/:id', (req, res) => {
  const student = new User();

  student._id = req.body.index;
  student.name = req.body.name;
  student.email = req.body.email;
  student.index = req.body.index;
  student.regNo = req.body.regNo;
  User.findOneAndUpdate({
    _id: req.params.id
  }, student, (err, st) => {
    if (!err) res.json(student);
    else res.json(student);
  })
});

router.post('/student', (req, res) => {
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
})

router.get('/student', (req, res) => {
  User.find({}, (err, users) => {
    let students = [];
    users.forEach(user => {
      if (user.role === 'student') {
        const st = {
          name: user.name,
          email: user.email,
          index: user.index,
          regNo: user.regNo
        }
        students.push(st);
      }
    });
    res.json(students);
  })
})

module.exports = router;
