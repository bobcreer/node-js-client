import React from 'react';
import { Box, Button, Typography, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person'; // Importing MUI Icon
import LogoutIcon from '@mui/icons-material/Logout'; // Importing MUI Icon
import { useUser } from '../../contexts/UserContext';


const UserList = ({ users, setSelectedUser, onSelectUser }) => {
    const { logout } = useUser()
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Contacts
      </Typography>
      <Divider sx={{ marginBottom: '16px' }} />

      {/* User Buttons */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {users.map(user => (
          <Button
            onClick={() => setSelectedUser(user)}
            key={user._id}
            //variant={selectedUser === user ? 'contained' : 'outlined'} // Highlight selected user
            color="primary"
            fullWidth
            startIcon={<PersonIcon />} // Adding the Person icon
          >
            {user.username}
          </Button>
          
        ))}
      </Box>

      {/* Logout Button */}
      <Button
        variant="contained"
        color="secondary"
        onClick={logout}
        
        sx={{ marginTop: '16px', alignSelf: 'center' }}
        endIcon={<LogoutIcon />}
        fullWidth
      >
        Log Out
      </Button>
    </Box>
  );
};

export default UserList;
