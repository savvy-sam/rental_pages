import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react'

const PasswordField = ({passwordRef, id="password", label='Password',}) => {
    const [showPassword, setShowPassword]= useState(false);

    const handdleClick =()=>{
        setShowPassword(!showPassword)
    }

    const handleMouseDown=(e)=>{
        e.preventDefault()
    }
  return (
    <TextField
    margin='normal'
    variant='standard'
    id={id}
    label={label}
    type={showPassword? 'text': 'password'}
    fullWidth
    inputRef={passwordRef}
    inputProps={{minLength: 6}}
    InputProps={{
        endAdornment: (
        <InputAdornment position="end">
            <IconButton onClick={handdleClick} onMouseDown={handleMouseDown}>
            {showPassword? <VisibilityOff />: < Visibility />}
            </IconButton>
        </InputAdornment>
        ),
    }}
    />
  );
};

export default PasswordField