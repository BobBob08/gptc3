import { Button, TextField, Typography } from '@mui/material'
import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

const Login = () => {
  return (
    <div style={{marginTop:"80px"}}>
         <h1>Welcome</h1> 
    {/* <input type="text"placeholder="Enter your name:"/><br /><br /> */}
    {/* <input type="password"placeholder="Enter Password:"/><br /><br /> */}
    <br></br>
 <Typography variant='h4'>Login Page</Typography> 
   <TextField label="Enter your name:" variant='filled'/><br></br>
   <TextField type="password"label="Enter your password:"variant='filled'/><br /><br />
   <Button variant="contained" color="success">SUBMIT</Button>
    </div>
  )
}

export default Login