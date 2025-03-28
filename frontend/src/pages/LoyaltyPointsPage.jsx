import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  Button,
  Divider,
  Chip,
  CircularProgress,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import RedeemIcon from '@mui/icons-material/Redeem';
import HistoryIcon from '@mui/icons-material/History';

function LoyaltyPointsPage() {
  const [tabValue, setTabValue] = useState(0);
  const [userData, setUserData] = useState(null);
  const [rewards, setRewards] = useState([]);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Simulated userId (replace with actual user authentication logic)
  const userId = 'user123';

  useEffect(() => {
    const fetchLoyaltyData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/loyalty/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch loyalty data');
        }
        const data = await response.json();
        setUserData({
          name: data.name,
          points: data.points,
          level: data.level,
          nextLevel: data.nextLevel,
          pointsToNextLevel: data.pointsToNextLevel,
        });
        setRewards(data.rewards);
        setHistory(data.history);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLoyaltyData();
  }, [userId]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  if (loading) {
    return (
      <Container sx={{ py: 4, textAlign: 'center' }}>
        <CircularProgress />
        <Typography>Loading loyalty data...</Typography>
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
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Loyalty Program
      </Typography>

      {/* Points Summary Card */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <StarIcon sx={{ fontSize: 40, color: 'secondary.main', mr: 2 }} />
              <Box>
                <Typography variant="h3" color="primary" sx={{ fontWeight: 'bold' }}>
                  {userData.points}
                </Typography>
                <Typography variant="subtitle1">Available Points</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body1">
                  Current Level: <Chip label={userData.level} color="primary" size="small" />
                </Typography>
                <Typography variant="body1">
                  Next Level: <Chip label={userData.nextLevel} variant="outlined" size="small" />
                </Typography>
              </Box>
              <Box sx={{ position: 'relative', height: 10, bgcolor: 'grey.200', borderRadius: 5, mt: 2 }}>
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    bgcolor: 'primary.main',
                    borderRadius: 5,
                    width: `${(userData.points / (userData.points + userData.pointsToNextLevel)) * 100}%`,
                  }}
                />
              </Box>
              <Typography variant="body2" sx={{ mt: 1, textAlign: 'right' }}>
                {userData.pointsToNextLevel} more points to reach {userData.nextLevel}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Tabs for Rewards and History */}
      <Paper sx={{ mb: 4 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab icon={<RedeemIcon />} label="Rewards" />
          <Tab icon={<HistoryIcon />} label="History" />
        </Tabs>

        <Box sx={{ p: 3 }}>
          {/* Rewards Tab */}
          {tabValue === 0 && (
            <Grid container spacing={3}>
              {rewards.map((reward) => (
                <Grid item xs={12} sm={6} md={4} key={reward.id}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        bgcolor: 'primary.main',
                        color: 'white',
                        borderRadius: 10,
                        px: 1,
                        py: 0.5,
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                      }}
                    >
                      {reward.points} pts
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ mb: 3, mt: 2 }}>
                        <Typography variant="h6" gutterBottom>
                          {reward.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {reward.description}
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={userData.points < reward.points}
                      >
                        Redeem Reward
                      </Button>
                      {userData.points < reward.points && (
                        <Typography variant="caption" sx={{ display: 'block', mt: 1, textAlign: 'center' }}>
                          You need {reward.points - userData.points} more points
                        </Typography>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {/* History Tab */}
          {tabValue === 1 && (
            <List>
              {history.map((item, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText primary={item.description} secondary={item.date} />
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography
                        variant="body1"
                        color={item.type === 'earned' ? 'success.main' : 'error.main'}
                        sx={{ fontWeight: 'medium' }}
                      >
                        {item.type === 'earned' ? '+' : '-'}{item.points} pts
                      </Typography>
                    </Box>
                  </ListItem>
                  {index < history.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          )}
        </Box>
      </Paper>

      {/* How Points Work */}
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          How to Earn Points
        </Typography>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Make Purchases
              </Typography>
              <Typography variant="body2">
                Earn 1 point for every $1 spent on our juices and smoothies
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Refer Friends
              </Typography>
              <Typography variant="body2">
                Get 50 points for each friend who signs up and makes their first purchase
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Special Promotions
              </Typography>
              <Typography variant="body2">
                Earn bonus points during special promotions and seasonal offers
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default LoyaltyPointsPage;