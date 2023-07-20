import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
// import Modal from './components/Modals/Modal'
import RegisterModal from './components/Modals/RegisterModal'
import ToasterProvider from './provider/ToasterProvider'
import LoginModal from './components/Modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'

const font = Poppins({
  subsets: ['latin'],
  weight: '300'
})

export const metadata: Metadata = {
  title: 'Homestead Horizon',
  description: 'Vacation Rental Platform',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider/>
        <RegisterModal/>
        <LoginModal/>
        <Navbar currentUser = {currentUser} />
        {children}
      </body>
    </html>
  )
}
