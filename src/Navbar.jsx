import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Navbar(){

if(localStorage.getItem('token')){
  return <>
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
          </>
}
else{
return <>
<div style={{display:'flex', justifyContent:'space-between'}}>
          <div>
              <Link to='/'>
        <Typography variant='h5' style={{fontWeight:700, padding:15, fontFamily:"helvetica"}}>LEARNERA</Typography>
        </Link>
        </div>
        <div style={{padding:15}}>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <Link to="/register">
          <Button>Register</Button>
        </Link>
        </div>
        </div>
        </>
}
}

export default Navbar