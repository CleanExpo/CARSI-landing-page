import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { organizationSchema } from '@/lib/schema'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CARSI Training - Professional Restoration Certification Courses',
  description: 'Comprehensive restoration training courses including water damage restoration, mould remediation, structural drying, and carpet cleaning certification.',
  keywords: 'CARSI, restoration training, water damage, mould remediation, structural drying, carpet cleaning, certification courses',
  openGraph: {
    title: 'CARSI Training - Professional Restoration Certification Courses',
    description: 'Comprehensive restoration training courses for professionals',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
