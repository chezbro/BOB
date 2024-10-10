import './globals.css'
import { Inter, Pacifico } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const pacifico = Pacifico({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'BUILD OR BURY',
  description: 'projects made w/♥',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>💻</text></svg>"
        />
      </head>
      <body className={`${inter.className} ${pacifico.variable}`}>{children}</body>
    </html>
  )
}
