import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';



function Login(){
  const [username, setTitle] = useState("");
    const [password, setDes] = useState("");

  function log(){
    fetch('http://localhost:3000/admin/login', {
        method:"POST",
        body: JSON.stringify({username:username, password:password}),
        headers: { "Content-Type":"application/json"}
        }).then(resp=>resp.json()).then(data=>localStorage.setItem('token', data.token))
}





    return (
        <>
              <Navbar></Navbar>
        <div style={{height:'100vh', backgroundColor:'#f0f2f5'}}>
    <div style={{display:"flex", justifyContent:"space-around", paddingTop:100}}>
      <div>
      <Typography variant='h2' style={{fontWeight:700, paddingTop:50, fontFamily:"helvetica"}}>LEARNERA</Typography>

      <Typography color="text.secondary" > <h2 style={{fontWeight:500, maxWidth:600}}>Unlock Your Potential: Empowering Learning, Anytime, Anywhere with LEARNERA</h2></Typography>
      </div>
      <div> 
      <Card sx={{ minWidth: 600 , padding:2}}>
      <CardContent>
        <TextField id="outlined-basic" label="username" variant="outlined" style={{width:'100%', marginBottom: '20px'}}  onChange={(e)=>{setTitle(e.target.value)}}/>
        <br/>
        <TextField id="outlined-basic" label="password" variant="outlined" style={{width:'100%'}} onChange={(e)=>{setDes(e.target.value)}}/>


      </CardContent>
      <CardActions style={{ flexDirection: 'column' }}>
        <Link to="/about">
      <Button style={{width:'96%', margin:10}} variant="contained" size="small" onClick= {log}>Log in</Button>
      </Link>
      </CardActions>
    </Card>
      </div>
    </div>
    </div>
        </>
    )
}




export default Login