const express = require('express');
const router = express.Router();
const studentController = require('../controllers/admin/student');
const subjectContoller = require('../controllers/admin/subject');

router.delete('/subject/bsccs/:id', subjectContoller.removeSubject);
router.put('/subject/bsccs/:id', subjectContoller.updateSubject);
router.post('/subject/bsccs', subjectContoller.addSubject);
router.get('/subject/bsccs', subjectContoller.getSubjects);

router.delete('/student/:id', studentController.removeStudent)
router.put('/student/:id', studentController.updateStudent);
router.post('/student', studentController.addStudent)
router.get('/student', studentController.getStudents);

module.exports = router;
