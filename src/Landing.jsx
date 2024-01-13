import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';


function Landing(){

    return (
        <>
        
      <Navbar></Navbar>
        <div style={{height:'100vh', backgroundColor:'#f0f2f5'}}>
    <div style={{display:"flex",alignItems: 'center', flexDirection:'column', paddingTop:100}}>
      <div>
      <Typography variant='h2' style={{fontWeight:700, paddingTop:50, fontFamily:"helvetica"}}>LEARNERA</Typography>

      <Typography color="text.secondary" > <h2 style={{fontWeight:500, maxWidth:600}}>Unlock Your Potential: Empowering Learning, Anytime, Anywhere with LEARNERA</h2></Typography>
      </div>
   
      </div>

    </div>
        </>
    )
}




export default Landing