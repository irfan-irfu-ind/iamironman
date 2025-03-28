// src/services/auth.js
import axios from 'axios';
import { API_BASE_URL } from '../../src/config'; // Create this config

export const registerCompany = async (registrationData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, registrationData);
    if (response.data.access_token) {
      localStorage.setItem('affordmed_token', response.data.access_token);
    }
    return response.data;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};