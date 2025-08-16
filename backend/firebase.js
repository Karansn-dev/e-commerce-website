const admin = require('firebase-admin');
const path = require('path');

// Debugging log to check service account loading
console.log('Loading Firebase service account key');

// Load the service account key JSON file securely
const serviceAccount = require(path.join(__dirname, 'signup-43d9d-firebase-adminsdk-fbsvc-abf29052ae.json'));

// Debugging log to check Firebase Admin SDK initialization
console.log('Initializing Firebase Admin SDK');

// Initialize the Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
