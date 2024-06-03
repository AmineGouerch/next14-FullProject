import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FULL APP',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className='container'>

      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer />

      </body>
      </div>

    </html>
  )
}