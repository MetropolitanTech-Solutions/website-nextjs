import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './nav/page.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nombre por ver',
  description: 'Sitio web para el futuro',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
