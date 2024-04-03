import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'

const UseE = () => {
    var [home,setName]=useState()
    const changeName=()=>
                setName("  to home!")

        const changeName1=()=>
            
            setName(" to contact!")

            const changeName2=()=>{
                setName("  to gallery!")
            }
            useEffect ( ()=>{
                changeName2()
            },[])
  return (
    <div>
        <Typography variant='h5'>Hey Welcome{home}</Typography><br/><br/>
        <Button variant='contained' color='warning' onClick={changeName}> Home</Button>&nbsp;
        <Button variant='contained' color='success' onClick={changeName1}> Contact</Button>&nbsp;
        <Button variant='contained' color='error' onClick={changeName2}> Gallery</Button>
    </div>
  )
}

export default UseE