import Image from 'next/image';
import Header from '../components/Header';
import SwiperComponent from '@/components/Swiper';
import ProductContainer from '@/components/Products';

export default function Home() {
  return (
    <main  className="bg-white min-screen h-screen md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
      <div className='bg-blue-300 lg:row-span-6 lg:col-span-1 border rounded-box'>
        hi
      </div>
      <div className='border m-3 rounded-box shadow-sm lg:col-span-2 lg:row-span-2 '>
        <SwiperComponent />
      </div>
      <div className='bg-purple-400 lg:row-span-4 lg:col-span-2'>
        <ProductContainer />
      </div>
    </main>
  )
}
