import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Xplendev',
  description: '© 2023 XplenDev | Code By Luis Rivera Araya',
}

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" />
      <title>Xplendev</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        
      </meta>
      </head>
      <body className={inter.className}>
        <main className="mx-w-4xl mx-auto">
        {children}
        </main>
      </body>
    </html>
  )
}
