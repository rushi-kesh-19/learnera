import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import axios from "axios";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { courseDetails, courseImage, courseLoading, coursePrice, coursePub, courseTitle } from "./store/selectors/courseSL";
import { courseState } from "./store/atoms/course";


function Course() {
  const { courseId } = useParams();
  const [isLoading, setLoad]= useRecoilState(courseLoading);
  const setCourse = useSetRecoilState(courseState);

  useEffect(() => {
    const func= ()=>{
       axios.get(`http://localhost:3000/admin/courses`,{
        headers: {"Authorization": `Bearer ${localStorage.getItem('token')}` }
      } ).then((res)=>{
      const foundCourse = res.data.find(course => course._id === courseId);
      if (foundCourse) {
        setCourse(foundCourse);
        setLoad(false);
      }});
    }
    func();
  }, [courseId]);
  

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>

      <div style={{ display: "flex", justifyContent: 'space-around', marginTop:100 }}>
        <div>
          <Typography variant='h5' style={{fontWeight:500, fontFamily:"helvetica"}}>{course.title+ " "}</Typography> <br />
          <Typography variant='h7' >{course.description}</Typography> <br /> <br />
          <Typography variant='h7' >Price: Rs {course.price}/-</Typography> 
          <br /> <br />
          <img style={{maxWidth:600}} src={course.imgageLink} alt="img not found" />
        </div>
        <div>
          <EditBox course={course} setCourse={setCourse}/>
        </div>
      </div>     
    </div>
  );
}

function EditBox({course, setCourse}){
  const [title, setTitle] = useRecoilState(courseTitle);
  const [des, setDes] = useRecoilState(courseDetails);
  const [price, setPrice] = useRecoilState(coursePrice);
  const [img, setImg] = useRecoilState(courseImage);
  const [pub, setpub] = useRecoilState(coursePub);


const updateCourse = () => {
  fetch(`http://localhost:3000/admin/courses/${course._id}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      description: des,
      price,
      imgageLink: img,
      published: pub
    }),
    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${localStorage.getItem('token')}` }
  })
    .then(resp => {
      if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`);
      }
      return resp.json();
    })
    .then(data => {console.log('Course updated successfully:', data);
  setCourse({
    title,
    description: des,
    price,
    imgageLink: img,
    published: pub
  });
    
})
    .catch(error => console.error('Error updating course:', error));
};


  return <>
  <div>
  <Card sx={{ maxWidth: 600, padding: 2 }}>
                <CardContent>
                  <TextField id="outlined-basic" variant="outlined" value={title} style={{ width: '100%', marginBottom: '20px' }} onChange={(e) => { setTitle(e.target.value) }} />
                  <TextField id="outlined-basic"  variant="outlined" value={des} style={{ width: '100%', marginBottom: '20px' }} onChange={(e) => { setDes(e.target.value) }} />
                  <TextField id="outlined-basic" variant="outlined" value={price} style={{ width: '100%', marginBottom: '20px' }} onChange={(e) => { setPrice(e.target.value) }} />
                  <TextField id="outlined-basic" variant="outlined" value={img} style={{ width: '100%', marginBottom: '20px' }} onChange={(e) => { setImg(e.target.value) }} />
                  <FormControlLabel control={<Checkbox onChange={(e) => { setpub(!pub) }} />} label='publish' />
                  
                  <Button style={{ width: '96%', margin: 10 }} variant="contained" size="small" onClick={updateCourse}>Update</Button>
                </CardContent>
              </Card>
  </div>  
  </>
}




export default Course;
