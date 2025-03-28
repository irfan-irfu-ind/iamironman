import React from 'react';
import { Container, Typography, Button, Box, Grid, Card, CardMedia, CardContent, Paper, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { LocalDrink, Blender, Speed } from '@mui/icons-material';

function HomePage() {
  const features = [
    { 
      title: 'Fresh Juices', 
      description: 'Made with organic fruits and vegetables harvested at peak ripeness for maximum nutrition and flavor.',
      icon: <LocalDrink fontSize="large" color="primary" />
    },
    { 
      title: 'Custom Blends', 
      description: 'Create your own juice combinations with over 20 fruits and superfoods to boost your wellness journey.',
      icon: <Blender fontSize="large" color="primary" />
    },
    { 
      title: 'Quick Order', 
      description: 'Skip the wait with our mobile ordering. Ready for pickup in just 10 minutes or delivered to your door.',
      icon: <Speed fontSize="large" color="primary" />
    },
  ];
  
  return (
    <Box sx={{ 
      background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)',
      minHeight: '100vh',
      py: 4
    }}>
      <Container>
        {/* Hero Section */}
        <Paper 
          elevation={0}
          sx={{ 
            p: 6, 
            textAlign: 'center',
            borderRadius: 4,
            mb: 6,
            backgroundImage: 'url(https://source.unsplash.com/random/1200x600/?fruit,juice)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              borderRadius: 4,
            }
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                color: '#2e7d32',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
              }}
            >
              Revitalize Your Day
            </Typography>
            <Typography 
              variant="h5" 
              color="text.secondary" 
              paragraph
              sx={{ mb: 4, maxWidth: '700px', mx: 'auto' }}
            >
              Handcrafted juices and smoothies made with organic ingredients for a healthier, more energetic you.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={RouterLink}
              to="/menu"
              sx={{ 
                mt: 2, 
                py: 1.5, 
                px: 4, 
                borderRadius: 2,
                fontSize: '1.1rem',
                boxShadow: '0 4px 10px rgba(46, 125, 50, 0.3)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 12px rgba(46, 125, 50, 0.4)',
                },
                transition: 'all 0.3s'
              }}
            >
              Order Now
            </Button>
          </Box>
        </Paper>
        
        <Box sx={{ my: 6, textAlign: 'center' }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 600,
              color: '#1b5e20',
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                backgroundColor: '#2e7d32',
                borderRadius: '2px'
              }
            }}
          >
            Why Choose Our Juices
          </Typography>
        </Box>
        
        {/* Features Section */}
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  borderRadius: 3,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.1)'
                  }
                }}
                elevation={2}
              >
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    {feature.icon}
                  </Box>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="div"
                    sx={{ fontWeight: 600, color: '#2e7d32' }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Testimonial Section */}
        <Paper 
          elevation={2}
          sx={{ 
            p: 5, 
            mt: 8, 
            borderRadius: 3,
            backgroundColor: '#f1f8e9',
            textAlign: 'center'
          }}
        >
          <Typography variant="h6" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>
            "The best fresh juice I've ever had! Their custom blends are amazing and the service is lightning fast."
          </Typography>
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600 }}>
            — Sarah J., Happy Customer
          </Typography>
        </Paper>

        {/* Call to Action */}
        <Box sx={{ my: 8, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" sx={{ mb: 3, color: '#1b5e20', fontWeight: 600 }}>
            Ready for a healthy boost?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={RouterLink}
            to="/menu"
            sx={{ 
              py: 1.5, 
              px: 4, 
              borderRadius: 2,
              fontSize: '1.1rem',
              boxShadow: '0 4px 10px rgba(46, 125, 50, 0.3)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 12px rgba(46, 125, 50, 0.4)',
              },
              transition: 'all 0.3s'
            }}
          >
            Explore Our Menu
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;