import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Paper, Divider, Grid, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login/register
    console.log('Form submitted:', formData);
  };
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          {isLogin ? 'Login' : 'Register'}
        </Typography>
        
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 3 }}>
            {!isLogin && (
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                margin="normal"
                required
                value={formData.name}
                onChange={handleChange}
              />
            )}
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              margin="normal"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              margin="normal"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </Box>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            sx={{ mb: 2 }}
          >
            {isLogin ? 'Login' : 'Register'}
          </Button>
        </form>
        
        <Divider sx={{ my: 2 }}>
          <Typography color="text.secondary" variant="body2">
            OR
          </Typography>
        </Divider>
        
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Typography variant="body2">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <Link component="button" variant="body2" onClick={toggleForm}>
              {isLogin ? 'Register' : 'Login'}
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default LoginPage;