const express = require('express');
const app = express();
const {User, Admin, Course}= require('../db');
const jwt = require('jsonwebtoken');
const {secretKey}= require('../middleware/auth');
const cors = require('cors');
app.use(cors());
const {authenticateJwt}= require('../middleware/auth');

const router= express.Router();

//Admin routes
router.post('/signup', async (req, res) => {
  const admin = req.body;
  const adminExists = await Admin.findOne({username:admin.username});
  if (adminExists) {
    res.status(403).json({ message: 'Admin already exists' });
  } else {
    const newAdmin= new Admin(admin);
    await newAdmin.save();
    const token = jwt.sign(admin, secretKey, { expiresIn: '1h' });
    res.json({ message: 'Admin created successfully', token });
  }
});

router.get('/me', authenticateJwt, (req, res)=>{
res.json(req.user);
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({username, password});

  if (admin) {
    const token = jwt.sign(admin, secretKey, { expiresIn: '1h' });
    res.json({ message: 'Logged in successfully', token });
  } else {
    res.status(403).json({ message: 'Admin authentication failed' });
  }
});

router.post('/courses', authenticateJwt, async (req, res) => {
  const newCourse= new Course(req.body);
  await newCourse.save();
  res.json({ message: 'Course created successfully', courseId: newCourse._id });
});

router.put('/courses/:courseId', authenticateJwt, async (req, res) => {
  const course= await Course.findByIdAndUpdate(req.params.courseId, req.body, {new:true});
  if (course) {
    res.json({ message: 'Course updated successfully' });
  } else {
    res.status(404).json({ message: 'Course not found' });
  }
});

router.get('/courses', async (req, res) => {
  const courses= await Course.find({});
  res.json(courses);
});

module.exports= router