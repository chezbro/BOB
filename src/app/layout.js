import './globals.css'
import { Inter, Pacifico } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const pacifico = Pacifico({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://www.buildorbury.com'),
  title: 'BUILD OR BURY',
  description: 'Vote on innovative project ideas and help shape the future of technology.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${pacifico.variable}`}>{children}</body>
    </html>
  )
}
