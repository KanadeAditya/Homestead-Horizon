import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
// import Modal from './components/Modals/Modal'
import ToasterProvider from './provider/ToasterProvider'
import LoginModal from './components/Modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RegisterModal from './components/modals/RegisterModal'
import RentModal from './components/modals/RentModal'
import SearchModal from './components/modals/SearchModal'

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
        <RentModal/>
        <SearchModal/>
        <RegisterModal/>
        <LoginModal/>
        <Navbar currentUser = {currentUser} />
        <div className='pb-20 pt-28'>
        {children}
        </div>
      </body>
    </html>
  )
}
