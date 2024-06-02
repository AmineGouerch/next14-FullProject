import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FULL APP',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <h1>THIS IS MY LAYOUT</h1>
      
      </body>
      
    </html>
  )
}