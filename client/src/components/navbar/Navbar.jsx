import { Lock, Menu as MenuIcon } from '@mui/icons-material'
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useValue } from '../../context/ContextProvider'
import photoURL from '../../static/images/passport_photo.jpg'
import UserIcons from '../user/UserIcons'

const user={name: 'test', photoURL}

const Navbar = () => {

    const {
        state: {currentUser}, dispatch,}= useValue();

  return (
    <AppBar>
        <Container maxWidth='lg'>
            <Toolbar disableGutters>
                <Box sx={{mr: 1}}>
                    <IconButton size='lg' color='inherit'>
                        <MenuIcon />
                    </IconButton>
                </Box>
                <Typography 
                variant='h6'
                component='h1'
                noWrap
                sx={{flexGrow: 1, display:{xs:'none', md:'flex'}}}
                >
                    WELCOME TO RENTAL PAGES
                </Typography>
                <Typography 
                variant='h6'
                component='h1'
                noWrap
                sx={{flexGrow: 1, display:{xs:'flex', md:'none'}}}
                >
                    RPG
                </Typography>
                {!currentUser? (<Button
                color='inherit'
                startIcon={< Lock />}
                onClick ={()=> dispatch({type: 'UPDATE_USER', payload: user})}
                >
                    LOG IN 
                </Button>):(
                    < UserIcons/>
                )}
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar