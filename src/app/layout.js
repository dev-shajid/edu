import Nav from '@/components/Nav'
import './globals.css'
import { Inter } from 'next/font/google'
import NProgress from '@/components/NProgress'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Easy Education',
  description: 'Every content for your education is organized here, just get it.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NProgress />
        <main className='min-h-screen'>
          <div className='container sm:px-2 px-3 h-full mx-auto sm:mb-0 mb-[100px]'>
            <Nav />
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
