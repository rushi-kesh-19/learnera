import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import * as React from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function CourseList(){
    const [courses, setCourses]= useState([]);

    useEffect(() => { 
      const fetchData = async () => {
        const res = await axios.get('http://localhost:3000/admin/courses', {
          headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` }
        });
        setCourses(res.data);
      };
      fetchData();
    }, []);
    


    return<>
    <TodosDiv courses={courses} />
    </>

}


export function Todos(props) {
  return (
    <div style={{ marginBottom: 20, padding: 20, borderRadius: 8}}>
      <Typography variant='h5' style={{ fontWeight: 700, fontFamily: 'helvetica', margin: 10 }}>{props.title}</Typography>
      <Typography variant='body1' style={{ marginBottom: 10 }}>{props.description}</Typography>
      <Typography variant='body2'>Price: Rs {props.price}/-</Typography>
      <br />
      <img src={props.link} alt={props.title} style={{marginTop: 10, borderRadius: 8,width: '100%', height: '210px', objectFit: 'cover' }} />
    </div>
  );
}

function TodosDiv({courses}){
  return <div style={{display:"flex",padding:50,  justifyContent:"space-around", flexWrap:"wrap"} }>
          <Grid container spacing={2}>
          {courses.map((course)=>{ 
          return <>
                  <Grid item xs={12} md={4}>
                    <Item>
                  <Link to={`/${course._id}`}>
                    <Card>
                      <CardContent>
                        <Todos title= {course.title} description={course.description} price={course.price} link={course.imgageLink} id={course._id}/> 
                        {/* you can pass anything (like state variable/function) as "props" to the Todos function to create an element that is connected to that state variable, state function, etc */}
                      </CardContent>
                    </Card>
                  </Link>
                  </Item>
                  </Grid>
                  </>
          })}
          </Grid>
      </div> 
}


  export default CourseList