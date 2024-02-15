const mongoose= require('mongoose');

const adminS= new mongoose.Schema({
    username: {type:String}, // {type:String} or String both fine
    password: String
    });
    const userS= new mongoose.Schema({
      username: String,             
      password: String,
      purchasedCourses: {type: mongoose.Schema.Types.ObjectId, ref: 'Course'}
      });
    const courseS= new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imgageLink: String,
    published: Boolean
    });  
    
    const Admin= mongoose.model('Admin', adminS);
    const User= mongoose.model('User', userS);
    const Course= mongoose.model('Course', courseS);
    // Admin, User, Course here are constructor functions. They posses the ability to create, read, update, delete data in the mongodb collection. 
    //Mongodb Database --> Collections --> Documents(each document is an object. Each object with unique id given by mdb itself)
module.exports ={ User, Admin, Course}    