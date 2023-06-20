import Header from '@/components/Header';
import BottomNavBar from '@/components/BottomNavBar';
import FooterSitemapLinks from '@/components/Footer';
import './globals.css'



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
        <Header />
        {children}
        <BottomNavBar/>
      
      </body>
    </html>
  )
}
