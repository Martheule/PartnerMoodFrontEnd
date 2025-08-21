// App constants (API URLs, etc.)

// src/utils/constants.js
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5173/api';

export const API_ENDPOINTS = {
  // Auth endpoints (matching your backend routes)
  LOGIN: '/auth/login',
  REGISTER: '/auth/register', 
  LOGOUT: '/auth/logout',
  // User endpoints
  PROFILE: '/users/profile',
  // Score endpoints 
  DAILY_SCORE: '/scores/daily',
  SCORE_HISTORY: '/scores/history'
};

export const DISC_TYPES = {
  D: {
    name: "Dominant",
    emoji: "",
    description: "Want to take charge, be decisive, achieve goals",
    color: "text-red-500",
    bg: "bg-red-100"
  },
  i: {
    name: "Influential", 
    emoji: "",
    description: "Feeling social, outgoing, want to connect",
    color: "text-yellow-500",
    bg: "bg-yellow-100"
  },
  S: {
    name: "Steady",
    emoji: "", 
    description: "Want stability, comfort, peaceful activities",
    color: "text-green-500",
    bg: "bg-green-100"
  },
  C: {
    name: "Conscientious",
    emoji: "",
    description: "Being careful, analytical, quality-focused", 
    color: "text-blue-500",
    bg: "bg-blue-100"
  }
};