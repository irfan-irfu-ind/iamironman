import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/test';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
});

// Request interceptor for auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('affordmed_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  } else {
    console.error('No authentication token found');
    // Handle unauthorized access (redirect to login if needed)
  }
  return config;
}, (error) => Promise.reject(error));

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized access - token may be expired');
      // Implement token refresh logic here if needed
    }
    return Promise.reject(error);
  }
);

export const fetchUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data.users || {};
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw error;
  }
};

export const fetchUserPosts = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}/posts`);
    return response.data.posts || [];
  } catch (error) {
    console.error(`Failed to fetch posts for user ${userId}:`, error);
    throw error;
  }
};

export const fetchPostComments = async (postId) => {
  try {
    const response = await api.get(`/posts/${postId}/contents`);
    return response.data.comments || [];
  } catch (error) {
    console.error(`Failed to fetch comments for post ${postId}:`, error);
    throw error;
  }
};