# One Piece 🌱

A mindful task management and calendar application designed with mental health in mind. Built with Next.js, TypeScript, and PostgreSQL.

## Features

- **🔐 User Authentication**: Secure sign up and login with NextAuth.js
- **📝 Task Management**: Create, edit, and organize your todos with priority levels
- **📅 Calendar Integration**: Visual calendar with event management
- **📖 Mindful Notes**: Reflective writing space with guided prompts
- **🌿 Mental Health Focus**: Calming design with pistachio and hunter green theme
- **📱 Responsive Design**: Works beautifully on desktop and mobile

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS with custom mental health-focused theme
- **Authentication**: NextAuth.js with credentials provider
- **Database**: PostgreSQL with Prisma ORM
- **Calendar**: React Big Calendar with custom styling
- **Date Handling**: Moment.js and date-fns
- **Deployment**: Vercel-ready configuration

## Getting Started

### Prerequisites

- Node.js 18+ (or 19.8.0+)
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd OnePiece
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Copy `.env.example` to `.env` and fill in your values:
   ```bash
   cp .env.example .env
   ```
   
   Required environment variables:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/onepiece"
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run database migrations
   npx prisma migrate dev
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Deployment to Vercel

### One-Click Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Manual Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Set up your database**
   - Create a PostgreSQL database (recommend [Neon](https://neon.tech/) or [Supabase](https://supabase.com/))
   - Note your database URL

4. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

5. **Configure environment variables in Vercel**
   - Go to your project settings in Vercel dashboard
   - Add the following environment variables:
     - `DATABASE_URL`: Your PostgreSQL connection string
     - `NEXTAUTH_SECRET`: A secure random string (generate with `openssl rand -base64 32`)
     - `NEXTAUTH_URL`: Your deployed URL (e.g., `https://your-app.vercel.app`)

6. **Run database migrations on production**
   ```bash
   npx prisma migrate deploy
   ```

## Database Schema

The app uses the following main models:

- **User**: User accounts with authentication
- **Todo**: Task management with priorities and due dates
- **Event**: Calendar events with date ranges and colors
- **Session/Account**: NextAuth.js authentication tables

## Mental Health Focus

This application is designed with mental wellness in mind:

- **Calming Colors**: Soft pistachio and hunter green palette
- **Gentle Animations**: Subtle, peaceful transitions
- **Mindful Language**: Encouraging and supportive messaging
- **Reflection Tools**: Guided prompts for journaling
- **Stress-Free Design**: Clean, uncluttered interface
- **Positive Reinforcement**: Celebrating progress over perfection

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the package.json file for details.

## Support

If you find this app helpful for your mental wellness journey, please consider:
- ⭐ Starring the repository
- 🐛 Reporting issues
- 💡 Suggesting new features
- 🤝 Contributing to the codebase

Remember: Progress, not perfection. Every small step forward is a victory worth celebrating. 🌱