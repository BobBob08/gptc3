import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    // var name ="Bob"
    var [name,setName]=useState("Bob")
    var [value,setValue]=useState()
    const changeName = ()=>{
        console.log("Click here")
        setName(value)  
    }
    const inputHandler =(e)=>{
        console.log(e.target.value)
        setValue(e.target.value)
    }
    return (
    <div>
        <Typography variant='h5'>Hey Welcome {name}</Typography>
        {/* <Button variant='contained' color='error' onClick={changeName}> Click here</Button> */}
        <TextField label="Enter name" variant='outlined' onChange={inputHandler}/><br></br>
        <Button variant='contained' color='error' onClick={changeName}>Change</Button>

</div>
  )
}

export default Statebasics