import { Close, Send } from '@mui/icons-material';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useValue } from '../../context/ContextProvider'
import GoogleOneTapLogin from './GoogleOneTapLogin';
import PasswordField from './PasswordField';

const Login = () => {

    const [title, setTitle]=useState('Login');
    const [isRegister, setIsRegister]=useState(false);
    const nameRef =useRef();
    const emailRef = useRef();
    const passwordRef =useRef();
    const confirmPasswordRef=useRef();

    const {state: {openLogin}, dispatch}= useValue();

    const handleClose =()=>{
        dispatch({ type: 'CLOSE_LOGIN'});
    }

    useEffect(()=> {
        isRegister ? setTitle('Register'): setTitle('Login'); 
    },[isRegister])

    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch({type: 'START_LOADING'});

        setTimeout(()=>{
            dispatch({type: 'STOP_LOADING'});
        }, 6000);

        dispatch({type:'UPDATE_ALERT', payload: {open: true, severity: 'error', message: 'grow up',}})
    };

  return (
    <Dialog open={openLogin} onClose={handleClose}>
        <DialogTitle>
                {title}
            <IconButton
            sx={{
                position: 'absolute',
                top: 8,
                right:8,
                color: (theme) =>theme.palette.grey[500],
            }}
            onClick = {handleClose}
            >
                < Close />
            </IconButton>
        </DialogTitle>
        <form onSubmit = {handleSubmit}>
        <DialogContent dividers >
            <DialogContentText>
                Fill Your Information Below:
            </DialogContentText>
            {isRegister && (
                <TextField
                autoFocus
                margin='normal'
                variant='standard'
                id='name'
                label='name'
                type='text'
                fullWidth
                inputRef={nameRef}
                required
                inputProps={{minLength: 2}}/>
            )} 
            
            <TextField
            autoFocus={!isRegister}
            margin='normal'
            variant='standard'
            id='email'
            label='Email'
            type='email'
            fullWidth
            inputRef={emailRef}
            required
            />

            <PasswordField{...{passwordRef}} />
            {isRegister && (
                    < PasswordField 
                    passwordRef={confirmPasswordRef}
                    id="confirmPassword"
                    label="Confirm Password"/>
                )
            }
        </DialogContent>
        <DialogActions sx={{px: '19px'}}>
            <Button type='submit' variant='contained' endIcon={< Send/>}>
                Submit
            </Button>
        </DialogActions>
        </form>
        <DialogActions sx={{justifyContent: 'left', p: '5px 24px'}}>
            {
                isRegister? "Do You Have an Account? SignIn Now": "Dont Have an Account? Sign Up Now"
            }
            <Button onClick={()=> setIsRegister(!isRegister)}>
                {isRegister? 'Login' : 'Register'}
            </Button>
        </DialogActions>
        <DialogActions sx={{justifyContent: 'center', py: '24px'}}>
            < GoogleOneTapLogin/>
        </DialogActions>


    </Dialog>
  )
}

export default Login