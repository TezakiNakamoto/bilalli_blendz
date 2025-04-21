# Modern Booking System

A modern booking system built with Next.js, featuring Google Calendar integration and a beautiful UI.

## Features

- 📅 Date and time slot selection
- 📧 Email notifications
- 🔄 Google Calendar integration
- 👤 Admin dashboard
- 🎨 Modern UI with animations
- 📱 Responsive design

## Tech Stack

### Frontend
- Next.js (React framework)
- Tailwind CSS (styling)
- React Date Picker
- Framer Motion (animations)

### Backend
- Next.js API Routes
- Google Calendar API
- Supabase (database)

## Prerequisites

- Node.js 18+ installed
- Google Cloud Project with Calendar API enabled
- Supabase account

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

3. Set up environment variables:

Create `.env` files in both frontend and backend directories:

Frontend (.env):
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_API_URL=http://localhost:3001
```

Backend (.env):
```
PORT=3001
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
GOOGLE_REDIRECT_URI=http://localhost:3001/auth/google/callback
```

4. Set up Google Calendar API:
- Create a project in Google Cloud Console
- Enable the Google Calendar API
- Create OAuth 2.0 credentials
- Download the credentials and save as `credentials.json` in the backend directory

5. Start the development servers:

```bash
# Start backend server
cd backend
npm run dev

# Start frontend server (in a new terminal)
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## Project Structure

```
.
├── frontend/                 # Next.js frontend application
│   ├── src/
│   │   ├── app/             # Next.js app directory
│   │   ├── components/      # React components
│   │   └── styles/          # CSS styles
│   └── public/              # Static files
│
└── backend/                 # Express backend application
    ├── src/
    │   ├── routes/          # API routes
    │   ├── controllers/     # Route controllers
    │   └── services/        # Business logic
    └── credentials.json     # Google Calendar credentials
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 