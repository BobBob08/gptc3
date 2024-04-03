import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h5'>My App</Typography><br/><br/>
                <Button variant='contained' color='success'>
                    <Link to={'login'}>LOGIN</Link>
                    </Button>
          <Button variant='contained' color='error'>
            <Link to={'signup'}>SIGNUP</Link>
            </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar