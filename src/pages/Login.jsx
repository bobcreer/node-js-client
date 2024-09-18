import { Box, Typography, Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Box sx={{ width: 300, m: 'auto', mt: 10 }}>
            <Typography variant='h4' mb={2}>
                Sign In
            </Typography>

            <TextField
                id="outlined-text"
                label="Username"
                placeholder='Enter Username'
                fullWidth
            />
            <TextField
                id="outlined-text"
                label="Password"
                placeholder='**********'
                fullWidth
            />
            <Button sx={{ mt: 5 }} variant='contained' fullWidth>Submit</Button>
            <Link to='/register'>Don't have an account?</Link>
        </Box>
    )
}

export default Login