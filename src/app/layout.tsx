import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { organizationSchema } from '@/lib/schema'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CARSI Training - Professional Restoration Certification Courses | Water Damage & Mould Remediation',
  description: 'Industry-leading restoration certification courses: IICRC-aligned training in water damage restoration, mould remediation, structural drying, asbestos safety. 24/7 online access, expert instructors, 98% pass rate. Start your certification today!',
  keywords: 'CARSI training, restoration certification, IICRC courses, water damage restoration, mould remediation, structural drying, carpet cleaning certification, disaster restoration, asbestos training, insurance adjuster training, contractor certification, online restoration courses, professional restoration training',
  authors: [{ name: 'CARSI Training' }],
  creator: 'CARSI Training',
  publisher: 'CARSI Training',
  metadataBase: new URL('https://carsi-training.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CARSI Training - Professional Restoration Certification Courses',
    description: 'Industry-leading restoration certification: water damage, mould remediation, structural drying. 23+ courses, 10,000+ trained professionals, 98% pass rate.',
    type: 'website',
    locale: 'en_CA',
    url: 'https://carsi-training.com',
    siteName: 'CARSI Training',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CARSI Training - Professional Restoration Certification',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CARSI Training - Professional Restoration Certification',
    description: 'Industry-leading restoration training: 23+ courses, IICRC-aligned, 24/7 access',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
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
