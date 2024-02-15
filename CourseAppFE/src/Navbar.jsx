import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {userState} from './store/atoms/user.js';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { userSelector } from './store/selectors/userSL.js';

function Navbar(){
  let user= useRecoilValue(userSelector);
  const [userr,setUser]= useRecoilState(userState);


if(user){
  return (
  <>
    <div style={{display:'flex', justifyContent:'space-between', backgroundColor:'black'}}>
      <div>
        <Link to='/'>
        <Typography variant='h5' style={{fontWeight:700, padding:15, fontFamily:"helvetica", color:'white'}}>LEARNERA</Typography>
        </Link>
      </div>
      <div style={{padding:15, color:'white'}}>
        <Link to="/about">
            <Button style={{marginLeft:15, color:'white'}}>Courses</Button>
        </Link>
        <Button style={{marginLeft:15, backgroundColor:'white'}} onClick={()=>{
           localStorage.removeItem('token');
              setUser(null);
              window.location="/"}}>Logout</Button>
        
      </div>
    </div>
  </>
  )
}

return <>
<div style={{display:'flex', justifyContent:'space-between', backgroundColor:'black'}}>
          <div>
             <Link to='/'>
             <Typography variant='h5' style={{fontWeight:700, padding:15, fontFamily:"helvetica", color:'white'}}>LEARNERA</Typography>
             </Link>
          </div>
          <div style={{padding:15}}>
             <Link to="/login">
             <Button style={{color:'white'}}>Login</Button>
             </Link>
             <Link to="/register">
             <Button style={{color:'white'}}>Register</Button>
             </Link>
          </div>
        </div>
        </>
}


export default Navbar