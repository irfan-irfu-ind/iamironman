import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Toolbar,
  useTheme,
  useMediaQuery,
  Typography,
  Avatar
} from '@mui/material';
import {
  People as PeopleIcon,
  TrendingUp as TrendingUpIcon,
  DynamicFeed as FeedIcon,
  Home as HomeIcon,
  Bookmark as BookmarkIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';

const drawerWidth = 240;

function Sidebar({ mobileOpen, handleDrawerToggle }) {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Feed', icon: <FeedIcon />, path: '/feed' },
    { text: 'Trending Posts', icon: <TrendingUpIcon />, path: '/trending-posts' },
    { text: 'Top Users', icon: <PeopleIcon />, path: '/top-users' },
    { text: 'Saved', icon: <BookmarkIcon />, path: '/saved' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' }
  ];

  const drawer = (
    <>
      <Toolbar />
      <Box sx={{ overflow: 'auto', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar 
            alt="User Profile" 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            sx={{ width: 40, height: 40 }}
          />
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>John Doe</Typography>
            <Typography variant="body2" color="text.secondary">@johndoe</Typography>
          </Box>
        </Box>
        <Divider />
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <Link 
                to={item.path} 
                style={{ 
                  textDecoration: 'none', 
                  width: '100%', 
                  color: 'inherit' 
                }}
              >
                <ListItemButton 
                  selected={location.pathname === item.path}
                  sx={{
                    borderRadius: '0 20px 20px 0',
                    mr: 1,
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(63, 81, 181, 0.08)',
                      '&:hover': {
                        backgroundColor: 'rgba(63, 81, 181, 0.12)',
                      },
                    },
                  }}
                >
                  <ListItemIcon 
                    sx={{ 
                      color: location.pathname === item.path ? 'primary.main' : 'inherit'
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text} 
                    primaryTypographyProps={{
                      fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                      color: location.pathname === item.path ? 'primary.main' : 'inherit'
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary" align="center">
            © 2023 SocialFeed
          </Typography>
        </Box>
      </Box>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth,
            backgroundColor: 'background.paper',
            borderRight: '1px solid rgba(0, 0, 0, 0.08)'
          },
        }}
      >
        {drawer}
      </Drawer>
      
      {/* Desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: drawerWidth,
            backgroundColor: 'background.paper',
            borderRight: '1px solid rgba(0, 0, 0, 0.08)'
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Sidebar;
