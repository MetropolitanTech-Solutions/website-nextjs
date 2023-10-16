import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './nav/page.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Metrotech',
  description: 'Metrotech una empresa enfocada al desarrollo de nuevas soluciones tecnologicas, mejorando la ciberseguridad y la transformacion digital',
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
