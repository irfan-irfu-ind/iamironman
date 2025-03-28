import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import LoginPage from './pages/LoginPage';
import LoyaltyPointsPage from './pages/LoyaltyPointsPage';
import  AboutUsSection from './pages/About'
import ProfilePage from './pages/ProfilePage'
import Chatbot from './components/Chatbot';
// Simple theme with juice-related colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50', // Green - represents freshness
    },
    secondary: {
      main: '#ff9800', // Orange - represents fruit/juice
    },
  },
});

function App() {
  const [cart, setCart] = useState([]);
  
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar cartItemCount={cart.length} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
          <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
          <Route path="/track" element={<OrderTrackingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/loyalty" element={<LoyaltyPointsPage />} />
          <Route path="/about" element={<AboutUsSection />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat" element={<Chatbot/>} />



        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
