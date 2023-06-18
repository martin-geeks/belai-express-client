import Image from 'next/image';
import Header from '../components/Header';
import SwiperComponent from '@/components/Swiper';
import ProductContainer from '@/components/Products';
import FooterSitemapLinks from '@/components/Footer';

export default function Home() {
  return (
    <main  className="bg-white min-screen h-screen md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
      <div className='bg-blue-300 lg:row-span- lg:col-span-1 border rounded-box'>
        
      </div>
      <div className='rounded-box shadow-sm lg:col-span-3 lg:row-span-2 lg:order-first lg:h-[500px] '>
        <SwiperComponent />
      </div>
      <div className=' py-3 lg:row-span-4 lg:col-start-1 lg:col-end-7'>
        <ProductContainer />
      </div>
      <div className=' py-3 lg:row-span-4 lg:col-start-1 lg:col-end-7'>
      <FooterSitemapLinks/>
      </div>
      
    </main>
  )
}
