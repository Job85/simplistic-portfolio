import { Roboto } from 'next/font/google';
import './globals.css';
import NavBar from './components/Nav/NavBar';

const roboto = Roboto({
  weight: ['100', '400', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: "Julian's Portfolio",
  description: 'Synthwave art enthusiast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
