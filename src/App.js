import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'
import TopUsers from './pages/Topusers';
import Feed from './pages/Feedpage';
import TrendingPosts from './pages/Trendingposts';

const theme = createTheme();

function App() {
  React.useEffect(() => {
    // Initialize auth if needed
    const token = localStorage.getItem('affordmed_token');
    if (!token) {
      console.log('No auth token - need to register');
      // You can add registration flow here
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/top-users" element={<TopUsers />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/trending-posts" element={<TrendingPosts />} />
          <Route path="/" element={<Feed />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;