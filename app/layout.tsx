import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

export const metadata: Metadata = {
  title: 'ZiyoAI',
  description: "O'zbek tilida AI ta'lim platformasi",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="uz">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}