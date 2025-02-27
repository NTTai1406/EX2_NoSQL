const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

router.get('/students', studentController.getAllStudents);
router.post('/createStudents', studentController.createStudent);
router.get('/searchStudents', studentController.searchStudent);
router.put('/updateStudents/:id', studentController.updateStudent);
router.delete('/deleteStudents/:id', studentController.deleteStudent);

router.get('/students/:id', studentController.getStudentById);
router.get('/students/major/:major', studentController.getStudentsByMajor);
router.get('/students/grade/:grade', studentController.getStudentsByGrade);
router.put('/students/updateAge/:id', studentController.updateStudentAge);
router.put('/students/addField', studentController.addFieldToAllStudents);
router.delete('/students/studentId/:id', studentController.deleteStudentByStudentId);
router.delete('/students/grade/:grade', studentController.deleteStudentsByGrade);
router.delete('/students', studentController.deleteAllStudents);

module.exports = router;