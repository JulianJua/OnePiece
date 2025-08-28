import './globals.css'
import { Inter } from 'next/font/google'
import Providers from '@/components/providers/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'One Piece - Your Personal Task & Calendar Manager',
  description: 'A mental health-focused task management and calendar app to help you organize your life with peace of mind.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen mental-health-gradient">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}