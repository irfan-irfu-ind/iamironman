import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Box, 
  Paper,
  Divider,
  Stack,
  Avatar,
  useTheme
} from '@mui/material';
// import EcoOutlinedIcon from '@mui/icons-material/EcoOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

function AboutUsSection() {
  const theme = useTheme();

  // Team member data
  const teamMembers = [
    {
      name: "Emma Roberts",
      role: "Founder & Head Juicer",
      image: "/api/placeholder/100/100",
      bio: "Former nutritionist with a passion for creating delicious, nutrient-dense juices that support wellness."
    },
    {
      name: "Michael Chen",
      role: "Organic Produce Manager",
      image: "/api/placeholder/100/100",
      bio: "Works directly with local farmers to source the freshest organic ingredients for our juices."
    },
    {
      name: "Sophia Williams",
      role: "Nutrition Specialist",
      image: "/api/placeholder/100/100",
      bio: "Certified nutritionist who develops our innovative juice recipes with optimal health benefits."
    }
  ];

  // Company values
  const companyValues = [
    {
      title: "Organic Integrity",
      description: "We use only certified organic produce, sourced locally when possible, ensuring maximum nutrition and minimal environmental impact.",
    //   icon: <EcoOutlinedIcon sx={{ fontSize: 36, color: '#2e7d32' }} />
    },
    {
      title: "Cold-Pressed Quality",
      description: "Our cold-press method preserves enzymes and nutrients, creating juices with superior flavor and maximum nutritional benefit.",
      icon: <VerifiedOutlinedIcon sx={{ fontSize: 36, color: '#2e7d32' }} />
    },
    {
      title: "Sustainable Practices",
      description: "From compostable packaging to solar-powered production, we're committed to reducing our environmental footprint.",
      icon: <LocalShippingOutlinedIcon sx={{ fontSize: 36, color: '#2e7d32' }} />
    }
  ];

  return (
    <Box sx={{ 
      py: 8, 
      background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)', 
      minHeight: '100vh' 
    }}>
      <Container>
        {/* Hero Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 700, 
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
            Our Story
          </Typography>
          
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ 
              maxWidth: '700px', 
              mx: 'auto', 
              mb: 2,
              fontWeight: 400
            }}
          >
            Bringing nature's goodness to your glass since 2018
          </Typography>
        </Box>

        {/* Story Section */}
        <Grid container spacing={8} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <Box 
              component="img"
              src="/api/placeholder/600/400"
              alt="Our juice bar"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 4,
                boxShadow: '0 16px 32px rgba(0,0,0,0.1)',
                objectFit: 'cover'
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography 
                variant="h4" 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontWeight: 600, 
                  color: '#1b5e20',
                  mb: 3
                }}
              >
                From Farm to Bottle
              </Typography>
              
              <Typography paragraph sx={{ mb: 3 }}>
                Our journey began with a simple idea: create delicious, nutrient-rich juices using only the finest organic ingredients. What started as a small juice stand at the local farmers' market has grown into a beloved community destination for health-conscious individuals.
              </Typography>
              
              <Typography paragraph sx={{ mb: 3 }}>
                We believe that what you put into your body matters. That's why we handcraft each juice with care, using a slow cold-press method that preserves vital enzymes and nutrients. Our dedication to quality means we never add preservatives, sugars, or artificial ingredients to our products.
              </Typography>
              
              <Typography paragraph>
                Today, we're proud to offer a diverse menu of cold-pressed juices, superfood smoothies, and wellness shots that nourish the body and delight the senses. As we grow, we remain committed to our founding principles: exceptional quality, environmental sustainability, and community connection.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Values Section */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 600, 
              color: '#1b5e20',
              textAlign: 'center',
              mb: 5
            }}
          >
            Our Core Values
          </Typography>
          
          <Grid container spacing={4}>
            {companyValues.map((value, index) => (
              <Grid item key={index} xs={12} md={4}>
                <Paper
                  elevation={2}
                  sx={{
                    height: '100%',
                    p: 4,
                    borderRadius: 3,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.12)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <Box sx={{ mb: 2 }}>
                      {value.icon}
                    </Box>
                    
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      gutterBottom
                      sx={{ 
                        fontWeight: 600,
                        mb: 2
                      }}
                    >
                      {value.title}
                    </Typography>
                    
                    <Typography variant="body1" color="text.secondary">
                      {value.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Meet The Team Section */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 600, 
              color: '#1b5e20',
              textAlign: 'center',
              mb: 5
            }}
          >
            Meet Our Team
          </Typography>
          
          <Grid container spacing={4}>
            {teamMembers.map((member, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    textAlign: 'center',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.12)'
                    }
                  }}
                >
                  <Avatar
                    src={member.image}
                    alt={member.name}
                    sx={{ 
                      width: 120, 
                      height: 120, 
                      mx: 'auto',
                      mb: 3,
                      border: '4px solid #e8f5e9'
                    }}
                  />
                  
                  <Typography 
                    variant="h5" 
                    component="h3" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 600,
                    }}
                  >
                    {member.name}
                  </Typography>
                  
                  <Typography 
                    variant="subtitle1" 
                    color="primary"
                    sx={{ 
                      fontWeight: 500,
                      color: '#2e7d32',
                      mb: 2
                    }}
                  >
                    {member.role}
                  </Typography>
                  
                  <Divider sx={{ mb: 2 }} />
                  
                  <Typography variant="body2" color="text.secondary">
                    {member.bio}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Community Impact */}
        <Paper
          elevation={3}
          sx={{
            p: 5,
            borderRadius: 4,
            background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography 
                variant="h4" 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontWeight: 600, 
                  color: '#1b5e20',
                  mb: 3
                }}
              >
                Our Community Impact
              </Typography>
              
              <Typography paragraph sx={{ mb: 3 }}>
                We believe in giving back to the community that has supported us from day one. Through our "Juice for Good" program, we donate 5% of our monthly profits to local food security initiatives and urban gardening projects.
              </Typography>
              
              <Typography paragraph>
                Our commitment to sustainability extends beyond our store walls. We've partnered with local schools to create educational programs about nutrition and ecological responsibility, reaching over 1,000 students annually.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box 
                component="img"
                src="/api/placeholder/400/300"
                alt="Community garden project"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 3,
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
                }}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default AboutUsSection;