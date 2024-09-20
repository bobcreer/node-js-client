import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import UserList from '../components/chat/UserList';
import ChatArea from '../components/chat/ChatArea';
import WelcomePage from '../components/chat/WelcomePage';
import { useUser } from '../contexts/UserContext'
import api from '../configs/api'
import getEnv from '../utility/getEnv';

const Chats = () => {
  const { user } = useUser()
  const [selectedUser, setSelectedUser] = useState(null)
  const [users, setUsers] = useState([])
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    api.get('/getAllUsers')
        .then(res => setUsers(res.data.users))
}, [])

  // Function to handle selecting a user
  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  // Function to handle sending a message to the selected user
  const handleSendMessage = (messageText) => {
    if (selectedUser) {
      setMessages({
        ...messages,
        [selectedUser]: [
          ...messages[selectedUser],
          { text: messageText, timestamp: new Date().toLocaleTimeString() },
        ],
      });
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    console.log('User logged out');
    // Example: Redirect to a login page
    // window.location.href = "/login";
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '80%',
          maxWidth: '1200px',
          height: '80vh',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: 3,
          overflow: 'hidden',
        }}
      >
        {/* Right side - User List Section */}
        <Box sx={{ width: '25%' }}>
          <UserList
            users={users} setSelectedUser={setSelectedUser}
          />
        </Box>

        {/* Left side - Chat Section or Welcome Page */}
        <Box sx={{ flexGrow: 1, padding: '16px' }}>
          {selectedUser ? (
            <ChatArea
              selectedUser={selectedUser}
            />
          ) : (
            <WelcomePage user={user}/>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Chats;
