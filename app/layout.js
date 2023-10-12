import Head from 'next/head'
import './globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Digimon Mind - DM',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width" />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
