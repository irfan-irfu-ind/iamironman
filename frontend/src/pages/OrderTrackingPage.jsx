import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Paper, Stepper, Step, StepLabel, CircularProgress } from '@mui/material';

function OrderTrackingPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState(15);
  
  const steps = [
    'Order Placed',
    'Order Confirmed',
    'Preparation',
    'Ready for Pickup'
  ];
  
  // Simulate order progress
  useEffect(() => {
    const timer = setInterval(() => {
      if (activeStep < steps.length - 1) {
        setActiveStep((prevStep) => prevStep + 1);
        setEstimatedTime((prevTime) => Math.max(0, prevTime - 5));
      } else {
        clearInterval(timer);
      }
    }, 5000);
    
    return () => clearInterval(timer);
  }, [activeStep, steps.length]);
  
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Track Your Order
      </Typography>
      
      <Paper sx={{ p: 3 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Order #1234
          </Typography>
          <Typography color="text.secondary">
            Estimated time: {estimatedTime} minutes
          </Typography>
        </Box>
        
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          {activeStep < steps.length - 1 ? (
            <>
              <CircularProgress color="primary" sx={{ mb: 2 }} />
              <Typography>
                {steps[activeStep]} in progress...
              </Typography>
            </>
          ) : (
            <Typography variant="h6" color="primary">
              Your order is ready for pickup!
            </Typography>
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default OrderTrackingPage;