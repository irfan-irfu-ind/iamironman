import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Grid, 
  Avatar, 
  Box, 
  IconButton, 
  Divider,
  TextField,
  Button,
  CircularProgress,
  Paper
} from '@mui/material';
import { 
  Favorite, 
  FavoriteBorder, 
  ChatBubbleOutline, 
  Share, 
  Bookmark, 
  BookmarkBorder,
  Send
} from '@mui/icons-material';
import { posts, users, comments, getTimeAgo } from '../mockData';

function Feed() {
  const [feedPosts, setFeedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedComments, setExpandedComments] = useState({});
  const [likedPosts, setLikedPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState({});
  const [commentInputs, setCommentInputs] = useState({});

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      // Sort posts by timestamp (newest first)
      const sortedPosts = [...posts].sort((a, b) => 
        new Date(b.timestamp) - new Date(a.timestamp)
      );
      setFeedPosts(sortedPosts);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLike = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleSave = (postId) => {
    setSavedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const toggleComments = (postId) => {
    setExpandedComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const handleCommentChange = (postId, value) => {
    setCommentInputs(prev => ({
      ...prev,
      [postId]: value
    }));
  };

  const submitComment = (postId) => {
    if (commentInputs[postId]?.trim()) {
      // In a real app, you would send this to an API
      console.log(`New comment on post ${postId}: ${commentInputs[postId]}`);
      // Clear the input
      setCommentInputs(prev => ({
        ...prev,
        [postId]: ''
      }));
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
          Your Feed
        </Typography>
      </Grid>
      
      <Grid item xs={12} md={8}>
        {feedPosts.map(post => (
          <Card key={post.id} sx={{ mb: 3, overflow: 'visible' }}>
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
              <Avatar 
                src={users[post.userid].avatar} 
                alt={users[post.userid].name}
                sx={{ width: 48, height: 48, mr: 2 }}
              />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {users[post.userid].name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {getTimeAgo(post.timestamp)}
                </Typography>
              </Box>
            </Box>
            
            <CardContent sx={{ py: 1 }}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {post.content}
              </Typography>
            </CardContent>
            
            {post.image && (
              <CardMedia
                component="img"
                image={post.image}
                alt="Post image"
                sx={{ 
                  width: '100%',
                  maxHeight: 500,
                  objectFit: 'cover'
                }}
              />
            )}
            
            <Box sx={{ px: 2, py: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
                  {post.likes + (likedPosts[post.id] ? 1 : 0)} likes
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {post.commentCount} comments
                </Typography>
              </Box>
            </Box>
            
            <Divider />
            
            <Box sx={{ display: 'flex', px: 1 }}>
              <IconButton 
                onClick={() => handleLike(post.id)}
                color={likedPosts[post.id] ? "primary" : "default"}
              >
                {likedPosts[post.id] ? <Favorite /> : <FavoriteBorder />}
              </IconButton>
              
              <IconButton onClick={() => toggleComments(post.id)}>
                <ChatBubbleOutline />
              </IconButton>
              
              <IconButton>
                <Share />
              </IconButton>
              
              <Box sx={{ flexGrow: 1 }} />
              
              <IconButton 
                onClick={() => handleSave(post.id)}
                color={savedPosts[post.id] ? "primary" : "default"}
              >
                {savedPosts[post.id] ? <Bookmark /> : <BookmarkBorder />}
              </IconButton>
            </Box>
            
            {expandedComments[post.id] && (
              <Box sx={{ p: 2 }}>
                <Divider sx={{ mb: 2 }} />
                
                {/* Comments section */}
                {comments[post.id] ? (
                  comments[post.id].map(comment => (
                    <Box key={comment.id} sx={{ display: 'flex', mb: 2 }}>
                      <Avatar 
                        src={users[comment.userid].avatar} 
                        alt={users[comment.userid].name}
                        sx={{ width: 32, height: 32, mr: 1.5 }}
                      />
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ backgroundColor: 'rgba(0,0,0,0.04)', p: 1.5, borderRadius: 2 }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                            {users[comment.userid].name}
                          </Typography>
                          <Typography variant="body2">
                            {comment.content}
                          </Typography>
                        </Box>
                        <Typography variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                          {getTimeAgo(comment.timestamp)}
                        </Typography>
                      </Box>
                    </Box>
                  ))
                ) : (
                  <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', my: 2 }}>
                    No comments yet. Be the first to comment!
                  </Typography>
                )}
                
                {/* Comment input */}
                <Box sx={{ display: 'flex', mt: 2 }}>
                  <Avatar 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Your avatar"
                    sx={{ width: 32, height: 32, mr: 1.5 }}
                  />
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Write a comment..."
                    variant="outlined"
                    value={commentInputs[post.id] || ''}
                    onChange={(e) => handleCommentChange(post.id, e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <IconButton 
                          size="small" 
                          onClick={() => submitComment(post.id)}
                          disabled={!commentInputs[post.id]?.trim()}
                        >
                          <Send fontSize="small" />
                        </IconButton>
                      ),
                    }}
                  />
                </Box>
              </Box>
            )}
          </Card>
        ))}
      </Grid>
      
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2, mb: 3, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Suggested for You
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {Object.values(users).slice(0, 3).map(user => (
              <Box key={user.id} sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar 
                  src={user.avatar} 
                  alt={user.name}
                  sx={{ width: 40, height: 40, mr: 2 }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.bio}
                  </Typography>
                </Box>
                <Button variant="outlined" size="small">
                  Follow
                </Button>
              </Box>
            ))}
          </Box>
        </Paper>
        
        <Paper sx={{ p: 2, borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            Trending Topics
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {['#Photography', '#TravelDiaries', '#FoodLovers', '#TechTalk', '#FitnessGoals'].map(topic => (
              <Box key={topic} sx={{ py: 1 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                  {topic}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {Math.floor(Math.random() * 1000) + 100} posts
                </Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Feed;
