import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'

const font = Poppins({
  subsets: ['latin'],
  weight: '500'
})

export const metadata: Metadata = {
  title: 'Homestead Horizon',
  description: 'Vacation Rental Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}</body>
    </html>
  )
}
