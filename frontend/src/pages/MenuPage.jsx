// // src/app/menu/page.jsx


// import React, { useState } from 'react';
// // import Link from 'next/link'; // Import Link from next/link
// import { 
//   Container, 
//   Typography, 
//   Grid, 
//   Card, 
//   CardMedia, 
//   CardContent, 
//   CardActions, 
//   Button, 
//   Chip,
//   Box,
//   IconButton,
//   Divider,
//   Paper,
//   Tabs,
//   Tab,
//   Rating,
//   Stack,
//   Fade,
//   useTheme
// } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import SpaIcon from '@mui/icons-material/Spa';

// function MenuPage({ addToCart }) {
//   const theme = useTheme();
//   const [activeTab, setActiveTab] = useState(0);
//   const [hoveredCard, setHoveredCard] = useState(null);

//   // Sample juice data with real image links from Unsplash
//   const juices = [
//     {
//       id: 1,
//       name: 'Organic Orange Sunrise',
//       description: 'Freshly squeezed organic oranges with a hint of turmeric for an immunity boost',
//       price: 4.99,
//       image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240&q=80',
//       category: 'Citrus',
//       rating: 4.8,
//       reviewCount: 124,
//       benefits: ['Vitamin C', 'Immunity', 'Antioxidants'],
//       bestseller: true,
//       organic: true
//     },
//     {
//       id: 2,
//       name: 'Green Detox Elixir',
//       description: 'Cold-pressed kale, spinach, cucumber, apple, and ginger to cleanse and energize',
//       price: 5.99,
//       image: 'https://images.unsplash.com/photo-1623428187969-5ea62133b605?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240&q=80',
//       category: 'Detox',
//       rating: 4.7,
//       reviewCount: 89,
//       benefits: ['Cleansing', 'Alkalizing', 'Energizing'],
//       bestseller: false,
//       organic: true
//     },
//     {
//       id: 3,
//       name: 'Berry Antioxidant Blend',
//       description: 'Mixed berries with banana, açaí, and almond milk for a nutrient-rich smoothie',
//       price: 6.49,
//       image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240&q=80',
//       category: 'Smoothie',
//       rating: 4.9,
//       reviewCount: 156,
//       benefits: ['Antioxidants', 'Fiber', 'Omega-3'],
//       bestseller: true,
//       organic: true
//     },
//     {
//       id: 4,
//       name: 'Tropical Mango Paradise',
//       description: 'Fresh Alphonso mango with coconut water, pineapple and a hint of lime',
//       price: 5.49,
//       image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240&q=80',
//       category: 'Tropical',
//       rating: 4.6,
//       reviewCount: 78,
//       benefits: ['Hydration', 'Digestion', 'Vitamins'],
//       bestseller: false,
//       organic: true
//     },
//     {
//       id: 5,
//       name: 'Golden Carrot Glow',
//       description: 'Organic carrot, turmeric, apple, and ginger for skin health and immunity',
//       price: 4.99,
//       image: 'https://images.unsplash.com/photo-1571843439991-dd2b8e051966?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240&q=80',
//       category: 'Veggie',
//       rating: 4.5,
//       reviewCount: 63,
//       benefits: ['Skin Health', 'Vision', 'Immunity'],
//       bestseller: false,
//       organic: true
//     },
//     {
//       id: 6,
//       name: 'Watermelon Hydrator',
//       description: 'Cold-pressed watermelon with a touch of mint and lime for ultimate refreshment',
//       price: 4.49,
//       image: 'https://images.unsplash.com/photo-1629084495897-7b223ebfb480?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=240&q=80',
//       category: 'Refresher',
//       rating: 4.7,
//       reviewCount: 92,
//       benefits: ['Hydration', 'Electrolytes', 'Cooling'],
//       bestseller: false,
//       organic: true
//     },
//   ];

//   // Group juices by category
//   const categories = [...new Set(juices.map(juice => juice.category))];
//   const allCategories = ['All', ...categories];

//   const filteredJuices = activeTab === 0 
//     ? juices 
//     : juices.filter(juice => juice.category === allCategories[activeTab]);

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   return (
//     <Box sx={{ 
//       py: 6, 
//       background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)', 
//       minHeight: '100vh' 
//     }}>
//       <Container>
//         {/* Hero Section */}
//         <Box sx={{ mb: 6, textAlign: 'center' }}>
//           <Typography 
//             variant="h3" 
//             component="h1" 
//             gutterBottom
//             sx={{ 
//               fontWeight: 700, 
//               color: '#1b5e20',
//               position: 'relative',
//               display: 'inline-block',
//               '&::after': {
//                 content: '""',
//                 position: 'absolute',
//                 bottom: -10,
//                 left: '50%',
//                 transform: 'translateX(-50%)',
//                 width: '80px',
//                 height: '3px',
//                 backgroundColor: '#2e7d32',
//                 borderRadius: '2px'
//               }
//             }}
//           >
//             Our Juice Collection
//           </Typography>
          
//           <Typography 
//             variant="h6" 
//             color="text.secondary" 
//             sx={{ 
//               maxWidth: '700px', 
//               mx: 'auto', 
//               mb: 4,
//               fontWeight: 400
//             }}
//           >
//             Handcrafted with organic ingredients and cold-pressed for maximum nutritional benefit
//           </Typography>
          
//           <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <SpaIcon sx={{ color: '#2e7d32', mr: 1 }} />
//               <Typography variant="body2">100% Organic</Typography>
//             </Box>
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <LocalShippingIcon sx={{ color: '#2e7d32', mr: 1 }} />
//               <Typography variant="body2">Free Delivery on orders over $20</Typography>
//             </Box>
//           </Box>
//         </Box>

//         {/* Category Filter */}
//         <Paper 
//           elevation={0} 
//           sx={{ 
//             mb: 6, 
//             borderRadius: 3, 
//             overflow: 'hidden',
//             boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
//           }}
//         >
//           <Tabs 
//             value={activeTab} 
//             onChange={handleTabChange} 
//             variant="scrollable"
//             scrollButtons="auto"
//             allowScrollButtonsMobile
//             sx={{
//               '.MuiTabs-indicator': {
//                 backgroundColor: '#2e7d32',
//                 height: 3,
//               },
//               '.MuiTab-root': {
//                 fontWeight: 500,
//                 textTransform: 'none',
//                 px: 4,
//                 py: 2,
//                 color: 'text.secondary',
//                 fontSize: '1rem',
//                 '&.Mui-selected': {
//                   color: '#2e7d32',
//                   fontWeight: 600,
//                 }
//               }
//             }}
//           >
//             {allCategories.map((category, index) => (
//               <Tab key={index} label={category} />
//             ))}
//           </Tabs>
//         </Paper>
              
//         {/* Menu Grid */}
//         <Grid container spacing={4}>
//           {filteredJuices.map((juice) => (
//             <Grid item key={juice.id} xs={12} sm={6} md={4}>
//               <Fade in={true} style={{ transitionDelay: '100ms' }}>
//                 <Card 
//                   elevation={2}
//                   onMouseEnter={() => setHoveredCard(juice.id)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                   sx={{ 
//                     height: '100%', 
//                     display: 'flex', 
//                     flexDirection: 'column',
//                     borderRadius: 3,
//                     overflow: 'hidden',
//                     position: 'relative',
//                     transition: 'all 0.3s ease-in-out',
//                     transform: hoveredCard === juice.id ? 'translateY(-8px)' : 'none',
//                     boxShadow: hoveredCard === juice.id 
//                       ? '0 12px 24px rgba(0,0,0,0.12)'
//                       : '0 4px 12px rgba(0,0,0,0.08)',
//                   }}
//                 >
//                   {/* Bestseller Badge */}
//                   {juice.bestseller && (
//                     <Chip
//                       label="Bestseller"
//                       color="secondary"
//                       size="small"
//                       sx={{
//                         position: 'absolute',
//                         top: 12,
//                         left: 12,
//                         zIndex: 1,
//                         fontWeight: 500,
//                         fontSize: '0.7rem',
//                         backgroundColor: '#ff6d00',
//                         color: 'white',
//                       }}
//                     />
//                   )}
                  
//                   {/* Favorite Button */}
//                   <IconButton
//                     size="small"
//                     sx={{
//                       position: 'absolute',
//                       top: 8,
//                       right: 8,
//                       zIndex: 1,
//                       backgroundColor: 'rgba(255,255,255,0.9)',
//                       '&:hover': {
//                         backgroundColor: 'rgba(255,255,255,1)',
//                       }
//                     }}
//                   >
//                     <FavoriteBorderIcon fontSize="small" color="primary" />
//                   </IconButton>
                  
//                   <CardMedia
//                     component="img"
//                     height="180"
//                     image={juice.image} // Using external Unsplash links
//                     alt={juice.name}
//                     sx={{ 
//                       transition: 'all 0.5s ease',
//                       transform: hoveredCard === juice.id ? 'scale(1.05)' : 'scale(1)'
//                     }}
//                   />
                  
//                   <CardContent sx={{ flexGrow: 1, p: 3 }}>
//                     <Box sx={{ mb: 1.5 }}>
//                       <Chip
//                         label={juice.category}
//                         size="small"
//                         color="primary"
//                         sx={{ 
//                           fontWeight: 500,
//                           fontSize: '0.7rem',
//                           backgroundColor: 'rgba(46, 125, 50, 0.1)',
//                           color: '#2e7d32',
//                           border: 'none'
//                         }}
//                       />
//                       {juice.organic && (
//                         <Chip
//                           label="Organic"
//                           size="small"
//                           icon={<SpaIcon fontSize="small" />}
//                           sx={{ 
//                             ml: 1,
//                             fontWeight: 500,
//                             fontSize: '0.7rem',
//                             backgroundColor: 'rgba(76, 175, 80, 0.1)',
//                             color: '#43a047',
//                             border: 'none'
//                           }}
//                         />
//                       )}
//                     </Box>
                    
//                     <Typography 
//                       gutterBottom 
//                       variant="h5" 
//                       component="div"
//                       sx={{ 
//                         fontWeight: 600,
//                         fontSize: '1.25rem',
//                         lineHeight: 1.2,
//                         mb: 1
//                       }}
//                     >
//                       {juice.name}
//                     </Typography>
                    
//                     <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
//                       <Rating 
//                         value={juice.rating} 
//                         precision={0.1} 
//                         readOnly 
//                         size="small"
//                         sx={{ 
//                           color: '#ff9800',
//                           fontSize: '0.9rem'
//                         }}
//                       />
//                       <Typography 
//                         variant="body2" 
//                         color="text.secondary"
//                         sx={{ ml: 1, fontSize: '0.8rem' }}
//                       >
//                         ({juice.reviewCount})
//                       </Typography>
//                     </Box>
                    
//                     <Typography 
//                       variant="body2" 
//                       color="text.secondary"
//                       sx={{ mb: 2 }}
//                     >
//                       {juice.description}
//                     </Typography>
                    
//                     <Stack 
//                       direction="row" 
//                       spacing={1} 
//                       sx={{ mb: 1.5 }}
//                     >
//                       {juice.benefits.map((benefit, index) => (
//                         <Chip
//                           key={index}
//                           label={benefit}
//                           size="small"
//                           sx={{
//                             height: 24,
//                             fontSize: '0.7rem',
//                             backgroundColor: 'rgba(0,0,0,0.05)',
//                             color: 'text.secondary',
//                           }}
//                         />
//                       ))}
//                     </Stack>
//                   </CardContent>
                  
//                   <Divider />
                  
//                   <Box sx={{ 
//                     display: 'flex', 
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     px: 3,
//                     py: 2
//                   }}>
//                     <Typography 
//                       variant="h6" 
//                       sx={{ 
//                         fontWeight: 700,
//                         color: '#1b5e20' 
//                       }}
//                     >
//                       ${juice.price.toFixed(2)}
//                     </Typography>
                    
//                     <Box>
//                       <Button
//                         size="small"
//                         variant="contained"
//                         color="primary"
//                         onClick={() => addToCart(juice)}
//                         startIcon={<AddIcon />}
//                         sx={{
//                           borderRadius: 2,
//                           fontWeight: 600,
//                           textTransform: 'none',
//                           px: 2,
//                           boxShadow: '0 4px 8px rgba(46, 125, 50, 0.25)',
//                           backgroundColor: '#2e7d32',
//                           '&:hover': {
//                             backgroundColor: '#1b5e20',
//                             boxShadow: '0 6px 10px rgba(46, 125, 50, 0.35)',
//                           }
//                         }}
//                       >
//                         Add to Cart
//                       </Button>
//                     </Box>
//                   </Box>
//                 </Card>
//               </Fade>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// export default MenuPage;

import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Box,
  IconButton,
  Divider,
  Paper,
  Tabs,
  Tab,
  Rating,
  Stack,
  Fade,
  CircularProgress,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SpaIcon from '@mui/icons-material/Spa';

function MenuPage({ addToCart }) {
  const [juices, setJuices] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/menu');
        if (!response.ok) {
          throw new Error('Failed to fetch menu data');
        }
        const data = await response.json();
        setJuices(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  const categories = [...new Set(juices.map((juice) => juice.category))];
  const allCategories = ['All', ...categories];

  const filteredJuices =
    activeTab === 0 ? juices : juices.filter((juice) => juice.category === allCategories[activeTab]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  if (loading) {
    return (
      <Container sx={{ py: 4, textAlign: 'center' }}>
        <CircularProgress />
        <Typography>Loading menu...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 4, textAlign: 'center' }}>
        <Typography color="error">Error: {error}</Typography>
        <Button variant="contained" onClick={() => window.location.reload()}>
          Retry
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 6, background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)', minHeight: '100vh' }}>
      <Container>
        {/* Hero Section */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
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
                borderRadius: '2px',
              },
            }}
          >
            Our Juice Collection
          </Typography>

          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto', mb: 4, fontWeight: 400 }}>
            Handcrafted with organic ingredients and cold-pressed for maximum nutritional benefit
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <SpaIcon sx={{ color: '#2e7d32', mr: 1 }} />
              <Typography variant="body2">100% Organic</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocalShippingIcon sx={{ color: '#2e7d32', mr: 1 }} />
              <Typography variant="body2">Free Delivery on orders over $20</Typography>
            </Box>
          </Box>
        </Box>

        {/* Category Filter */}
        <Paper elevation={0} sx={{ mb: 6, borderRadius: 3, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              '.MuiTabs-indicator': { backgroundColor: '#2e7d32', height: 3 },
              '.MuiTab-root': {
                fontWeight: 500,
                textTransform: 'none',
                px: 4,
                py: 2,
                color: 'text.secondary',
                fontSize: '1rem',
                '&.Mui-selected': { color: '#2e7d32', fontWeight: 600 },
              },
            }}
          >
            {allCategories.map((category, index) => (
              <Tab key={index} label={category} />
            ))}
          </Tabs>
        </Paper>

        {/* Menu Grid */}
        <Grid container spacing={4}>
          {filteredJuices.map((juice) => (
            <Grid item key={juice.id} xs={12} sm={6} md={4}>
              <Fade in={true} style={{ transitionDelay: '100ms' }}>
                <Card
                  elevation={2}
                  onMouseEnter={() => setHoveredCard(juice.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'all 0.3s ease-in-out',
                    transform: hoveredCard === juice.id ? 'translateY(-8px)' : 'none',
                    boxShadow: hoveredCard === juice.id
                      ? '0 12px 24px rgba(0,0,0,0.12)'
                      : '0 4px 12px rgba(0,0,0,0.08)',
                  }}
                >
                  {/* Bestseller Badge */}
                  {juice.bestseller && (
                    <Chip
                      label="Bestseller"
                      color="secondary"
                      size="small"
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        zIndex: 1,
                        fontWeight: 500,
                        fontSize: '0.7rem',
                        backgroundColor: '#ff6d00',
                        color: 'white',
                      }}
                    />
                  )}

                  {/* Favorite Button */}
                  <IconButton
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      zIndex: 1,
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      '&:hover': { backgroundColor: 'rgba(255,255,255,1)' },
                    }}
                  >
                    <FavoriteBorderIcon fontSize="small" color="primary" />
                  </IconButton>

                  <CardMedia
                    component="img"
                    height="180"
                    image={juice.image}
                    alt={juice.name}
                    sx={{
                      transition: 'all 0.5s ease',
                      transform: hoveredCard === juice.id ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ mb: 1.5 }}>
                      <Chip
                        label={juice.category}
                        size="small"
                        color="primary"
                        sx={{
                          fontWeight: 500,
                          fontSize: '0.7rem',
                          backgroundColor: 'rgba(46, 125, 50, 0.1)',
                          color: '#2e7d32',
                          border: 'none',
                        }}
                      />
                      {juice.organic && (
                        <Chip
                          label="Organic"
                          size="small"
                          icon={<SpaIcon fontSize="small" />}
                          sx={{
                            ml: 1,
                            fontWeight: 500,
                            fontSize: '0.7rem',
                            backgroundColor: 'rgba(76, 175, 80, 0.1)',
                            color: '#43a047',
                            border: 'none',
                          }}
                        />
                      )}
                    </Box>

                    <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600, fontSize: '1.25rem', lineHeight: 1.2, mb: 1 }}>
                      {juice.name}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                      <Rating value={juice.rating} precision={0.1} readOnly size="small" sx={{ color: '#ff9800', fontSize: '0.9rem' }} />
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1, fontSize: '0.8rem' }}>
                        ({juice.reviewCount})
                      </Typography>
                    </Box>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {juice.description}
                    </Typography>

                    <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
                      {juice.benefits.map((benefit, index) => (
                        <Chip
                          key={index}
                          label={benefit}
                          size="small"
                          sx={{
                            height: 24,
                            fontSize: '0.7rem',
                            backgroundColor: 'rgba(0,0,0,0.05)',
                            color: 'text.secondary',
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>

                  <Divider />

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3, py: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#1b5e20' }}>
                      ${juice.price.toFixed(2)}
                    </Typography>

                    <Box>
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={() => addToCart(juice)}
                        startIcon={<AddIcon />}
                        sx={{
                          borderRadius: 2,
                          fontWeight: 600,
                          textTransform: 'none',
                          px: 2,
                          boxShadow: '0 4px 8px rgba(46, 125, 50, 0.25)',
                          backgroundColor: '#2e7d32',
                          '&:hover': {
                            backgroundColor: '#1b5e20',
                            boxShadow: '0 6px 10px rgba(46, 125, 50, 0.35)',
                          },
                        }}
                      >
                        Add to Cart
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default MenuPage;