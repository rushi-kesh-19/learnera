// const express = require('express');
// const jwt = require('jsonwebtoken');
// const app = express();
// const cors = require('cors');
// const mongoose= require('mongoose');
// const { type } = require('os');
// app.use(cors());


// app.use(express.json());// app.use is a middleware function whose path if not defined, gets executed on every request recieved by server.
// //express.json extracts the JSON payload from the request body and transforms it into a JavaScript object, making it accessible in the subsequent middleware or route handlers as req.body.

// const adminS= new mongoose.Schema({
// username: {type:String}, // {type:String} or String both fine
// password: String
// });
// const userS= new mongoose.Schema({
//   username: String,
//   password: String,
//   purchasedCourses: {type: mongoose.Schema.Types.ObjectId, ref: 'Course'}
//   });
// const courseS= new mongoose.Schema({
// title: String,
// description: String,
// price: Number,
// imgageLink: String,
// published: Boolean
// });  

// const Admin= mongoose.model('Admin', adminS);
// const User= mongoose.model('User', userS);
// const Course= mongoose.model('Course', courseS);
// // Admin, User, Course here are constructor functions. They posses the ability to create, read, update, delete data in the mongodb collection. 
// //Mongodb Database --> Collections --> Documents(each document is an object. Each object with unique id given by mdb itself)

// mongoose.connect('mongodb+srv://rushi_kesh219:LTKoScWlvofsGz8h@cluster0.5hvsu8b.mongodb.net/courses', { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" });
// const secretKey = "superS3cr3t1";

// const generateJwt = (user) => {
//   return jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });
// };

// const authenticateJwt = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (authHeader) {
//     const token = authHeader.split(' ')[1];
//     jwt.verify(token, secretKey, (err, user) => {
//       if (err) {
//         return res.sendStatus(403);
//       }
//       req.user = user;
//       next();
//     });
//   } else {
//     res.sendStatus(401);
//   }
// };

// //Admin routes
// app.post('/admin/signup', async (req, res) => {
//   const admin = req.body;
//   const adminExists = await Admin.findOne({username:admin.username});
//   if (adminExists) {
//     res.status(403).json({ message: 'Admin already exists' });
//   } else {
//     const newAdmin= new Admin(admin);
//     await newAdmin.save();
//     const token = generateJwt(admin);
//     res.json({ message: 'Admin created successfully', token });
//   }
// });

// app.post('/admin/login', async (req, res) => {
//   const { username, password } = req.body;
//   const admin = await Admin.findOne({username, password});

//   if (admin) {
//     const token = generateJwt(admin);
//     res.json({ message: 'Logged in successfully', token });
//   } else {
//     res.status(403).json({ message: 'Admin authentication failed' });
//   }
// });

// app.post('/admin/courses', authenticateJwt, async (req, res) => {
//   const newCourse= new Course(req.body);
//   await newCourse.save();
//   res.json({ message: 'Course created successfully', courseId: newCourse._id });
// });

// app.put('/admin/courses/:courseId', authenticateJwt, async (req, res) => {
//   const course= await Course.findByIdAndUpdate(req.params.courseId, req.body, {new:true});
//   if (course) {
//     res.json({ message: 'Course updated successfully' });
//   } else {
//     res.status(404).json({ message: 'Course not found' });
//   }
// });

// app.get('/admin/courses', async (req, res) => {
//   const courses= await Course.find({});
//   res.json(courses);
// });

// //User routes
// app.post('/users/signup', async (req, res) => {
//   const user = req.body;
//   const existingUser = await User.findOne({username:user.username});
//   if (existingUser) {
//     res.status(403).json({ message: 'User already exists' });
//   } else {
//     const newUser= new User(user);
//     await newUser.save();
//     const token = generateJwt(user);
//     res.json({ message: 'User created successfully', token });
//   }
// });

// app.post('/users/login', async (req, res) => {
//   const { username, password } = req.headers;
//   const user = await User.findOne({username, password});
//   if (user) {
//     const token = generateJwt(user);
//     res.json({ message: 'Logged in successfully', token });
//   } else {
//     res.status(403).json({ message: 'User authentication failed' });
//   }
// });

// app.get('/users/courses', authenticateJwt, async (req, res) => {
//   const courses= await Course.find({published:true});
//   res.json(courses);
// });

// app.post('/users/courses/:courseId', authenticateJwt, async (req, res) => {
//   const course = await Course.findById(req.params.courseId);
//   if (course) {
//     const user = await User.findOne({username:req.user.username});
//     if (user) {
//       user.purchasedCourses.push(course);
//       await user.save();
//       res.json({ message: 'Course purchased successfully' });
//     } else {
//       res.status(403).json({ message: 'User not found' });
//     }
//   } else {
//     res.status(404).json({ message: 'Course not found' });
//   }
// });

// app.get('/users/purchasedCourses', authenticateJwt, async (req, res) => {
//   const user = await User.findOne({username:req.user.username}).populate('purchasedCourses');
//   if (user) {
//     res.json({ purchasedCourses: user.purchasedCourses || [] });
//   } else {
//     res.status(404).json({ message: 'User not found' });
//   }
// });

// app.listen(3000, () => {
//   console.log('Server is listening on port 3000');
// });


console.log(3+(2*(3+4)/2));