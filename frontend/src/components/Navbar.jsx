import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Badge, 
  IconButton, 
  Box, 
  Container,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  Divider,
  Avatar
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Navbar({ cartItemCount = 0 }) {
  const [accountMenuAnchor, setAccountMenuAnchor] = useState(null);
  
  const handleAccountMenuOpen = (event) => {
    setAccountMenuAnchor(event.currentTarget);
  };
  
  const handleAccountMenuClose = () => {
    setAccountMenuAnchor(null);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Our Menu', path: '/menu' },
    { label: 'Loyalty Program', path: '/loyalty' },
    { label: 'About Us', path: '/about' },
  ];

  return (
    <HideOnScroll>
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
          color: '#1b5e20',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ py: 1 }}>
            {/* Logo & Brand */}
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                flexGrow: 1, 
                gap: 1 
              }}
            >
              <LocalBarIcon 
                sx={{ 
                  fontSize: 32, 
                  color: '#2e7d32',
                  filter: 'drop-shadow(0px 1px 1px rgba(0,0,0,0.2))'
                }}
              />
              <Typography 
                variant="h5" 
                component={RouterLink} 
                to="/"
                sx={{ 
                  fontWeight: 700, 
                  letterSpacing: 0.5,
                  textDecoration: 'none',
                  color: 'inherit',
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                PURE
                <Box 
                  component="span" 
                  sx={{ 
                    color: '#66bb6a', 
                    fontWeight: 400, 
                    ml: 0.5 
                  }}
                >
                  JUICE
                </Box>
              </Typography>
            </Box>
            
            {/* Navigation Links */}
            <Box 
              sx={{ 
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 0.5
              }}
            >
              {navItems.map((item) => (
                <Button 
                  key={item.path}
                  color="inherit" 
                  component={RouterLink} 
                  to={item.path}
                  sx={{ 
                    mx: 1, 
                    py: 1,
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    letterSpacing: 0.5,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 8,
                      left: '50%',
                      width: 0,
                      height: 2,
                      backgroundColor: '#2e7d32',
                      transition: 'all 0.3s ease',
                      transform: 'translateX(-50%)',
                      opacity: 0,
                      borderRadius: 1
                    },
                    '&:hover::after': {
                      width: '50%',
                      opacity: 1
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
            
            {/* Action Buttons */}
            <Box 
              sx={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: { xs: 0.5, sm: 1 }
              }}
            >
              <IconButton 
                color="inherit" 
                component={RouterLink} 
                to="/cart"
                sx={{ 
                  backgroundColor: 'rgba(46, 125, 50, 0.08)',
                  '&:hover': {
                    backgroundColor: 'rgba(46, 125, 50, 0.15)'
                  },
                  transition: 'all 0.2s'
                }}
              >
                <Badge 
                  badgeContent={cartItemCount} 
                  color="error"
                  sx={{
                    '& .MuiBadge-badge': {
                      fontWeight: 'bold',
                      fontSize: '0.7rem'
                    }
                  }}
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              
              <IconButton 
                color="inherit"
                onClick={handleAccountMenuOpen}
                aria-controls="account-menu"
                aria-haspopup="true"
                sx={{ 
                  backgroundColor: 'rgba(46, 125, 50, 0.08)',
                  '&:hover': {
                    backgroundColor: 'rgba(46, 125, 50, 0.15)'
                  },
                  transition: 'all 0.2s',
                  ml: 1
                }}
              >
                <AccountCircleIcon />
                <KeyboardArrowDownIcon fontSize="small" sx={{ ml: -0.5 }} />
              </IconButton>
              
              <Menu
                id="account-menu"
                anchorEl={accountMenuAnchor}
                open={Boolean(accountMenuAnchor)}
                onClose={handleAccountMenuClose}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                PaperProps={{
                  elevation: 2,
                  sx: {
                    mt: 1.5,
                    borderRadius: 2,
                    minWidth: 180,
                    overflow: 'visible',
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
              >
                <Box sx={{ px: 2, py: 1.5, display: 'flex', alignItems: 'center' }}>
                  <Avatar 
                    sx={{ 
                      width: 32, 
                      height: 32, 
                      bgcolor: '#2e7d32',
                      mr: 1.5,
                      fontSize: '0.9rem'
                    }}
                  >
                    G
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2">Guest User</Typography>
                    <Typography variant="caption" color="text.secondary">guest@example.com</Typography>
                  </Box>
                </Box>
                <Divider />
                <MenuItem 
                  component={RouterLink} 
                  to="/profile"
                  onClick={handleAccountMenuClose}
                  sx={{ py: 1.5 }}
                >
                  My Profile
                </MenuItem>
                <MenuItem 
                  component={RouterLink} 
                  to="/orders"
                  onClick={handleAccountMenuClose}
                  sx={{ py: 1.5 }}
                >
                  Order History
                </MenuItem>
                <Divider />
                <MenuItem 
                  component={RouterLink} 
                  to="/logout"
                  onClick={handleAccountMenuClose}
                  sx={{ py: 1.5, color: '#d32f2f' }}
                >
                  Sign Out
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}

export default Navbar;