import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CourseList from "./CourseList";





function CourseCreate(){
    const [title, setTitle]= useState("");
    const [des, setDes]= useState("");
    const [price, setPrice]= useState("");
    const [img, setImg]= useState("");
    const [pub, setpub]= useState(false);


    
    function check(){

    fetch('http://localhost:3000/admin/courses', {
        method:"POST",
        body: JSON.stringify({title,
          description: des,
          price,
          imgageLink:img,
          published: pub}),
        headers: { "Content-Type":"application/json" ,"Authorization":`Bearer ${localStorage.getItem('token')}`}
        })
  }

return(<>
<div style={{display:'flex', justifyContent:'space-between'}}>
            <div>
                <Link to='/'>
          <Typography variant='h5' style={{fontWeight:700, padding:15, fontFamily:"helvetica"}}>LEARNERA</Typography>
          </Link>
          </div>
          <div style={{padding:15}}>
          <Link to="/">
            <Button onClick={localStorage.removeItem("token")}>Logout</Button>
          </Link>
          </div>
          </div>
    <Typography variant='h3' style={{fontWeight:700, paddingTop:50, fontFamily:"helvetica", textAlign:'center'}}>Create Course</Typography>


<div style={{display:"flex", justifyContent:'center'}}>
 <Card  sx={{ maxWidth: 600 , padding:2}}>
      <CardContent>
<TextField id="outlined-basic" label="title" variant="outlined" style={{width:'100%', marginBottom: '20px'}}  onChange={(e)=>{setTitle(e.target.value)}}/>
<TextField id="outlined-basic" label="description" variant="outlined" style={{width:'100%', marginBottom: '20px'}}  onChange={(e)=>{setDes(e.target.value)}}/>
<TextField id="outlined-basic" label="price" variant="outlined" style={{width:'100%', marginBottom: '20px'}}  onChange={(e)=>{setPrice(e.target.value)}}/>
<TextField id="outlined-basic" label="imglink" variant="outlined" style={{width:'100%', marginBottom: '20px'}}  onChange={(e)=>{setImg(e.target.value)}}/>
<FormControlLabel control={<Checkbox onChange={(e)=>{setpub(!pub)}} />} label='publish'/>

  <Button style={{width:'96%', margin:10}} variant="contained" size="small" onClick= {check}>Save</Button>
  </CardContent>
  </Card>
  </div>
  <CourseList></CourseList>
  </>
)
}

export default CourseCreate;