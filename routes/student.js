const express = require('express');
const router = express.Router();
const studentcontroller = require('../controllers/studentcontrollers')
router.use(express.urlencoded({extended:false}));
router.get('/',(req,res)=>{
    res.render('home');
})
router.post('/add/student',(req,res)=>{
    studentcontroller.addStudent(req,res)
})
router.get('/students',(req,res)=>{
    studentcontroller.getStudents(req,res)
})
router.get('/edit/student/page/:id',(req,res)=>{
    studentcontroller.getStudentForEdit(req,res)
})
module.exports = router 