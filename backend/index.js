const express = require('express');
const cors = require('cors');
const admin = require('./firebase');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health-check route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Test route to verify Firebase Admin SDK
app.get('/test-firebase', async (req, res) => {
  // Debugging log to check if the route is hit
  console.log('Test Firebase route hit');

  // Debugging log before listing users
  console.log('Attempting to list users from Firebase Admin SDK');

  try {
    const users = await admin.auth().listUsers();

    // Debugging log after successfully listing users
    console.log('Successfully retrieved users from Firebase Admin SDK');

    res.status(200).json({
      message: 'Firebase Admin SDK is working!',
      users: users.users.map(user => user.email),
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error testing Firebase Admin SDK',
      error: error.message,
    });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Debugging log to check Firebase Admin SDK initialization
console.log('Firebase Admin SDK initialized successfully');
