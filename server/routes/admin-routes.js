const express = require('express');
const router = express.Router();
const studentController = require('../controllers/admin/student');
const bsccsController = require('../controllers/admin/bsccs');
const bscisController = require('../controllers/admin/bscis');

router.delete('/subject/bscis/:id', bscisController.removeSubject);
router.put('/subject/bscis/:id', bscisController.updateSubject);
router.post('/subject/bscis', bscisController.addSubject);
router.get('/subject/bscis', bscisController.getSubjects);

router.delete('/subject/bsccs/:id', bsccsController.removeSubject);
router.put('/subject/bsccs/:id', bsccsController.updateSubject);
router.post('/subject/bsccs', bsccsController.addSubject);
router.get('/subject/bsccs', bsccsController.getSubjects);

router.put('/student/subject', studentController.unassignSubject);
router.post('/student/subject', studentController.assignSubject);
router.get('/student/subject/:course', studentController.getElegibleSubjects);
router.delete('/student/:id', studentController.removeStudent)
router.put('/student/:id', studentController.updateStudent);
router.post('/student', studentController.addStudent)
router.get('/student/:id', studentController.getStudent);
router.get('/student', studentController.getStudents);

module.exports = router;
