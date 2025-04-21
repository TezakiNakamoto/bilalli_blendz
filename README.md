# Bilalli Blendz

A modern booking website for Bilalli Blendz hair salon.

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Supabase (PostgreSQL, Authentication, Storage)
- **Deployment**: Vercel (Frontend), Supabase (Backend)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase CLI (optional, for local development)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TezakiNakamoto/bilalli_blendz.git
   cd bilalli_blendz
   ```

2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Create a `.env.local` file in the frontend directory with the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://lwwjovwktovzisfijkzw.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3d2pvdndrdG92emlzZmlqa3p3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxOTIxNDgsImV4cCI6MjA2MDc2ODE0OH0.TTzFIROR7JFPSEDzt_LWlr_mHvWSu4ICmYBB2lIML9c
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Deploying to Vercel

1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com) and sign in with your GitHub account.
3. Click "Add New Project" and import your repository.
4. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: `frontend`
   - Build Command: `next build`
   - Output Directory: `.next`
5. Add the following environment variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://lwwjovwktovzisfijkzw.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3d2pvdndrdG92emlzZmlqa3p3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxOTIxNDgsImV4cCI6MjA2MDc2ODE0OH0.TTzFIROR7JFPSEDzt_LWlr_mHvWSu4ICmYBB2lIML9c
   NEXT_PUBLIC_SITE_URL=https://bilalli-blendz.vercel.app
   ```
6. Click "Deploy".

### Setting Up Supabase

1. Go to [Supabase](https://supabase.com) and sign in with your GitHub account.
2. Create a new project or use an existing one.
3. Go to Project Settings > API and copy your project URL and anon key.
4. Update your `.env.local` file with these values.
5. Go to Authentication > URL Configuration and add your Vercel deployment URL.
6. Go to Storage and create a new bucket named `bilalli-images`.
7. Set the bucket to public access.

### Uploading Images to Supabase

1. Place your images in the appropriate folders in `frontend/public/images/`.
2. Run the upload script:
   ```bash
   node scripts/upload-images.js
   ```

## Database Schema

The project uses the following tables:

- **appointments**: Stores appointment bookings
- **reviews**: Stores customer reviews
- **services**: Stores available services

## Features

- Modern, responsive design
- Online booking system
- Customer reviews
- Service catalog
- Contact form
- Social media integration

## License

This project is licensed under the MIT License - see the LICENSE file for details. 