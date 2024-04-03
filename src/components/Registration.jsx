import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div>
        <Typography variant='h3'>Registration Form</Typography><br /><br />
        <TextField type="text" label="Enter your name:" variant="outlined" /><br /><br />
        <TextField type="password" label="Enter your password:" variant="outlined" /><br/>
        <TextField type="password" label="Confirm password:" variant="outlined" /><br /><br />
        <TextField type="email" label="Enter your email id:" variant="outlined" /><br /><br />
        <TextField type="number" label="Enter your number:" variant="outlined" /><br /><br />
<Button variant="contained" color="success" >CLICK HERE TO REGISTER</Button>

    </div>
  )
}

export default Registration