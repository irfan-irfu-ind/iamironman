import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Box, 
  Avatar, 
  Card, 
  CardContent, 
  Grid, 
  Button, 
  Chip,
  CircularProgress,
  Divider
} from '@mui/material';
import { users } from '../mockData';

function TopUsers() {
  const [topUsers, setTopUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      // Sort users by post count
      const sortedUsers = Object.values(users)
        .sort((a, b) => b.postCount - a.postCount)
        .slice(0, 5); // Get top 5
      
      setTopUsers(sortedUsers);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Top Content Creators
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        Meet our most active community members
      </Typography>

      <Grid container spacing={3}>
        {topUsers.map((user, index) => (
          <Grid item xs={12} md={6} lg={4} key={user.id}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                position: 'relative',
                overflow: 'visible'
              }}
            >
              {index < 3 && (
                <Chip
                  label={`#${index + 1}`}
                  color={index === 0 ? "primary" : index === 1 ? "secondary" : "default"}
                  sx={{ 
                    position: 'absolute', 
                    top: -12, 
                    right: 16,
                    fontWeight: 'bold',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                />
              )}
              
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3 }}>
                <Avatar
                  src={user.avatar}
                  alt={user.name}
                  sx={{ 
                    width: 100, 
                    height: 100, 
                    mb: 2,
                    border: '4px solid',
                    borderColor: index === 0 ? 'primary.main' : index === 1 ? 'secondary.main' : 'background.paper'
                  }}
                />
                
                <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                  {user.name}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, textAlign: 'center' }}>
                  @{user.username}
                </Typography>
                
                <Typography variant="body2" sx={{ mb: 3, textAlign: 'center' }}>
                  {user.bio}
                </Typography>
                
                <Divider sx={{ width: '100%', mb: 2 }} />
                
                <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%', mb: 2 }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {user.postCount}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Posts
                    </Typography>
                  </Box>
                  
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {Math.floor(Math.random() * 1000) + 500}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Followers
                    </Typography>
                  </Box>
                  
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {Math.floor(Math.random() * 500) + 100}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Following
                    </Typography>
                  </Box>
                </Box>
                
                <Button 
                  variant="contained" 
                  fullWidth
                  sx={{ 
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 'bold'
                  }}
                >
                  Follow
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default TopUsers;
