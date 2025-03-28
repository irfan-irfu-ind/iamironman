import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Button, Divider, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link as RouterLink } from 'react-router-dom';

function CartPage({ cart, setCart }) {
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };
  
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };
  
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Your Cart
      </Typography>
      
      {cart.length === 0 ? (
        <Box sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Your cart is empty
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            component={RouterLink}
            to="/menu"
          >
            Browse Menu
          </Button>
        </Box>
      ) : (
        <Paper sx={{ p: 2 }}>
          <List>
            {cart.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" onClick={() => removeFromCart(index)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={item.name}
                    secondary={`$${item.price.toFixed(2)}`}
                  />
                </ListItem>
                {index < cart.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
          
          <Box sx={{ mt: 2, p: 2, bgcolor: 'background.default' }}>
            <Typography variant="h6" align="right">
              Total: ${getTotal()}
            </Typography>
          </Box>
          
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/checkout"
              disabled={cart.length === 0}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </Paper>
      )}
    </Container>
  );
}

export default CartPage;