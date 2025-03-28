// Mock data for the application

// User data
export const users = {
    "1": {
      id: "1",
      name: "Emma Johnson",
      username: "emmaj",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Digital artist & photographer",
      postCount: 42
    },
    "2": {
      id: "2",
      name: "Alex Chen",
      username: "alexc",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Travel enthusiast & foodie",
      postCount: 37
    },
    "3": {
      id: "3",
      name: "Sophia Martinez",
      username: "sophiam",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Tech entrepreneur & coffee lover",
      postCount: 29
    },
    "4": {
      id: "4",
      name: "Marcus Williams",
      username: "marcusw",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Software developer & gamer",
      postCount: 25
    },
    "5": {
      id: "5",
      name: "Olivia Taylor",
      username: "oliviat",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Fashion designer & art collector",
      postCount: 21
    },
    "6": {
      id: "6",
      name: "Daniel Brown",
      username: "danielb",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Fitness coach & nutrition expert",
      postCount: 18
    },
    "7": {
      id: "7",
      name: "Ava Wilson",
      username: "avaw",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Musician & songwriter",
      postCount: 15
    }
  };
  
  // Posts data
  export const posts = [
    {
      id: 1,
      userid: "1",
      content: "Just finished my latest digital art project! What do you think?",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      timestamp: "2023-10-15T14:30:00Z",
      likes: 128,
      commentCount: 24
    },
    {
      id: 2,
      userid: "3",
      content: "Exploring the beautiful streets of Barcelona this weekend. The architecture here is absolutely stunning!",
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      timestamp: "2023-10-14T10:15:00Z",
      likes: 95,
      commentCount: 18
    },
    {
      id: 3,
      userid: "2",
      content: "Just tried this amazing new restaurant downtown. The food was incredible!",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      timestamp: "2023-10-13T20:45:00Z",
      likes: 76,
      commentCount: 14
    },
    {
      id: 4,
      userid: "5",
      content: "My latest fashion collection inspired by minimalist Japanese design.",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      timestamp: "2023-10-12T15:20:00Z",
      likes: 112,
      commentCount: 21
    },
    {
      id: 5,
      userid: "4",
      content: "Just launched my new app after months of hard work! Check it out in the App Store.",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      timestamp: "2023-10-11T09:10:00Z",
      likes: 89,
      commentCount: 32
    },
    {
      id: 6,
      userid: "6",
      content: "Morning workout routine that will boost your energy levels throughout the day.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      timestamp: "2023-10-10T07:30:00Z",
      likes: 64,
      commentCount: 9
    },
    {
      id: 7,
      userid: "7",
      content: "Just released my new single! Link in bio to listen.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      timestamp: "2023-10-09T18:45:00Z",
      likes: 142,
      commentCount: 27
    },
    {
      id: 8,
      userid: "1",
      content: "Behind the scenes of my latest photoshoot in the mountains.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      timestamp: "2023-10-08T12:15:00Z",
      likes: 103,
      commentCount: 16
    }
  ];
  
  // Comments data
  export const comments = {
    1: [
      { id: 101, userid: "2", content: "This is absolutely stunning! Love the colors.", timestamp: "2023-10-15T14:45:00Z" },
      { id: 102, userid: "5", content: "You're so talented! Can't wait to see more of your work.", timestamp: "2023-10-15T15:10:00Z" },
      { id: 103, userid: "3", content: "The detail in this is incredible. How long did it take you?", timestamp: "2023-10-15T16:30:00Z" }
    ],
    2: [
      { id: 201, userid: "1", content: "Barcelona is on my bucket list! Looks amazing.", timestamp: "2023-10-14T10:30:00Z" },
      { id: 202, userid: "4", content: "Sagrada Familia is a must-visit. Have you been there yet?", timestamp: "2023-10-14T11:15:00Z" }
    ],
    3: [
      { id: 301, userid: "7", content: "What's the name of the restaurant? I need to try it!", timestamp: "2023-10-13T21:00:00Z" },
      { id: 302, userid: "3", content: "That dish looks delicious! 😋", timestamp: "2023-10-13T21:45:00Z" }
    ],
    4: [
      { id: 401, userid: "2", content: "I love the minimalist approach. Very elegant.", timestamp: "2023-10-12T16:00:00Z" },
      { id: 402, userid: "6", content: "Would love to see these pieces in person!", timestamp: "2023-10-12T17:30:00Z" },
      { id: 403, userid: "1", content: "The attention to detail is amazing. Great work!", timestamp: "2023-10-12T18:15:00Z" }
    ],
    5: [
      { id: 501, userid: "3", content: "Just downloaded it. The UI is so clean!", timestamp: "2023-10-11T09:45:00Z" },
      { id: 502, userid: "5", content: "Congratulations on the launch! 🎉", timestamp: "2023-10-11T10:30:00Z" },
      { id: 503, userid: "7", content: "This is going to be huge. Great job!", timestamp: "2023-10-11T11:15:00Z" },
      { id: 504, userid: "2", content: "The features are amazing. Well done!", timestamp: "2023-10-11T12:00:00Z" }
    ]
  };
  
  // Function to get formatted time
  export const getTimeAgo = (timestamp) => {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffInSeconds = Math.floor((now - postTime) / 1000);
    
    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    }
    
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    }
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) {
      return `${diffInHours} hours ago`;
    }
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) {
      return `${diffInDays} days ago`;
    }
    
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) {
      return `${diffInMonths} months ago`;
    }
    
    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} years ago`;
  };
  