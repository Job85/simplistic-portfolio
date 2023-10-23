import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/Nav/NavBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Julian's Portfolio",
  description: 'Synthwave art enthusiast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
