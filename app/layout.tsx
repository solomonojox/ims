import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'IMS — International Miracle Service',
  description: 'A prayer and deliverance ministry committed to salvation, holiness, healing, and total deliverance. Based in Lagos, Nigeria.',
  keywords: ['IMS', 'prayer ministry', 'deliverance', 'healing', 'Lagos', 'Nigeria', 'miracle service'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}