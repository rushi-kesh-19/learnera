import Typography from '@mui/material/Typography';

function Landing(){

    return (
     <>
      <div style={{height:'100vh'}}>
        <div style={{display:"flex",alignItems: 'center', flexDirection:'column', paddingTop:100}}>
          <Lander/>
         </div>
      </div>
    </>
    )
}


export function Lander(){
  return (<>
  <div>
    <Typography variant='h2' style={{fontWeight:700, paddingTop:50, fontFamily:"helvetica"}}>LEARNERA</Typography>
    <Typography color="text.secondary" variant='h5' style={{fontWeight:500, maxWidth:600}}> Unlock Your Potential: Empowering Learning, Anytime, Anywhere with LEARNERA</Typography>
  </div>
  </>)
}


export default Landing








