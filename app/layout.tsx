import dynamic from 'next/dynamic';
import Header from '@/components/Header';
//import BottomNavBar from '@/components/BottomNavBar';
import { Providers } from '@/redux/provider';
const BottomNavBar = dynamic( ()=> import('@/components/BottomNavBar'),{ssr:false})
import './globals.css';

export const metadata = {
  title: 'Belai Express',
  description: 'An e-commerce web application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div>
        <Header />
        {children}
        <BottomNavBar/>
        </div>
        </Providers>
      
      </body>
    </html>
  )
}
