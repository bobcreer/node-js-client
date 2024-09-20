import React from 'react';
import { Box, Typography } from '@mui/material';

const WelcomePage = ({ user }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <Typography variant="h4">Welcome, {user?.username}</Typography>
    </Box>
  );
};

export default WelcomePage;
