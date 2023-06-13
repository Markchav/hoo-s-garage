import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Hoo's Garage",
  description: 'Generated by create next app',
}

{/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="icon" href="/favicon/favicon.ico" />
    <meta content='width=device-width, initial-scale=1' name='viewport' />
    </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
