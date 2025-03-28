"use client"

import { useState, useEffect } from "react"
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Avatar,
  Chip,
  IconButton,
  CircularProgress,
  Divider,
} from "@mui/material"
import { Favorite, ChatBubbleOutline, Share, TrendingUp } from "@mui/icons-material"
import { posts, users, getTimeAgo } from "../mockData"

function TrendingPosts() {
  const [trendingPosts, setTrendingPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      // Sort posts by comment count (most commented first)
      const sortedPosts = [...posts].sort((a, b) => b.commentCount - a.commentCount).slice(0, 6) // Get top 6

      setTrendingPosts(sortedPosts)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <TrendingUp sx={{ mr: 1, color: "primary.main" }} />
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Trending Now
        </Typography>
      </Box>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
        The most discussed posts in our community
      </Typography>

      <Grid container spacing={3}>
        {trendingPosts.map((post, index) => (
          <Grid item xs={12} md={6} lg={4} key={post.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                },
              }}
            >
              {index === 0 && (
                <Chip
                  label="HOT 🔥"
                  color="error"
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    zIndex: 1,
                    fontWeight: "bold",
                  }}
                />
              )}

              <CardMedia component="img" height="200" image={post.image} alt="Post image" sx={{ objectFit: "cover" }} />

              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 200,
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6))",
                }}
              />

              <Box sx={{ position: "absolute", bottom: 200, left: 0, p: 2, width: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    src={users[post.userid].avatar}
                    alt={users[post.userid].name}
                    sx={{
                      width: 40,
                      height: 40,
                      mr: 1,
                      border: "2px solid white",
                    }}
                  />
                  <Box>
                    <Typography variant="subtitle1" sx={{ color: "white", fontWeight: "bold" }}>
                      {users[post.userid].name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.8)" }}>
                      {getTimeAgo(post.timestamp)}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography variant="body1" sx={{ mb: 2, fontWeight: 500 }}>
                  {post.content}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton size="small" sx={{ mr: 1 }}>
                      <Favorite fontSize="small" />
                    </IconButton>
                    <Typography variant="body2" color="text.secondary">
                      {post.likes}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton size="small" sx={{ mr: 1 }}>
                      <ChatBubbleOutline fontSize="small" />
                    </IconButton>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: "bold" }}>
                      {post.commentCount}
                    </Typography>
                  </Box>

                  <IconButton size="small">
                    <Share fontSize="small" />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default TrendingPosts

