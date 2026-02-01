import './globals.css'
import { Sora, Plus_Jakarta_Sans } from 'next/font/google'

/* -------------------------------
   Fonts
-------------------------------- */

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

/* -------------------------------
   Metadata
-------------------------------- */

export const metadata = {
  title: 'VibeScript – Digital Solutions Studio',
  description:
    'VibeScript builds modern, scalable digital solutions for startups and businesses.',
  keywords:
    'web development, next.js, react, full stack, devops, saas, website agency',
  authors: [{ name: 'VibeScript Team' }],
  openGraph: {
    title: 'VibeScript – Digital Solutions Studio',
    description:
      'Modern web platforms, scalable systems, and premium digital experiences.',
    url: 'https://vibescript.cloud',
    siteName: 'VibeScript',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------
   Root Layout
-------------------------------- */

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body>
        {/* Global fixed background */}
        <div id="global-bg" />

        {/* App content */}
        <div id="app-content">
          {children}
        </div>
      </body>
    </html>
  )
}
