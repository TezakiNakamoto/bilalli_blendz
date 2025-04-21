const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Google Calendar setup
const SCOPES = ['https://www.googleapis.com/auth/calendar'];
const CREDENTIALS_PATH = './credentials.json';

async function authorize() {
  let client;
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: CREDENTIALS_PATH,
      scopes: SCOPES,
    });
    client = await auth.getClient();
  } catch (err) {
    console.error('Error loading client secret file:', err);
  }
  return client;
}

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Calendar routes
app.post('/api/bookings', async (req, res) => {
  try {
    const auth = await authorize();
    const calendar = google.calendar({ version: 'v3', auth });
    
    // TODO: Implement booking logic
    res.json({ message: 'Booking endpoint' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 