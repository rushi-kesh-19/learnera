import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function CourseList(){
    const [courses, setCourses]= useState([]);

   useEffect(()=>{ 
       fetch('http://localhost:3000/admin/courses', {
    method:"GET",
    headers: { "Content-Type":"application/json" ,"Authorization":`Bearer ${localStorage.getItem('token')}`}
}).then(resp=>resp.json()).then(data=> setCourses(data))}, []);

    return<>
    <div style={{display:"flex", justifyContent:"center"}}>
    <h2>Courses</h2>

    </div>
    <div style={{display:"flex",padding:50,  justifyContent:"left"} }>
{courses.map((course)=>{ 
  return <>
  <Card sx={{minWidth:200}}>
<CardContent>
  <Todos title= {course.title} description={course.description} price={course.price} />
  </CardContent>
  </Card>
  </>

  
})}
</div> 
    </>

}


function Todos(props){
    return <>
    <div>
   <Typography variant='h5' style={{fontWeight:500, fontFamily:"helvetica"}}>{props.title+ " "}</Typography> <br />
   <Typography variant='h7' >{props.description}</Typography> <br /> <br />
   <Typography variant='h7' >Price: Rs {props.price}/-</Typography> 



    </div>
    </>
  }


  export default CourseList