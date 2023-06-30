'use client'
import React, { useRef, useState ,useEffect,useLayoutEffect} from 'react';
import SwiperCore, { Virtual, Navigation, Pagination,Autoplay,Keyboard,EffectFade} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import img from '../public/canvas.jpg';
import iphone from '../public/apple-iphone-14-pro-max.jpg';
import dress from '../public/karen-willis-holmes.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ProductCard from './ProductCard';
import { Product } from '@/utils/types';
import { useSelectedLayoutSegment } from 'next/navigation';


const products: Product[] = [
  {name:'Canvas',amount:300,category:'Clothing,Magazine,Shopping',id:'2',rating:4,img:img.src},
  {name:'Apple iPhone 14 Pro Max',amount:2500,category:'Technology',id:'3',rating:5,img:iphone.src},
  {name:'Karen Williams Holmes',amount:390,category:'Foods,Canes',id:'4',rating:1.9,img:dress.src},
  {name:'Karen Williams Holmes',amount:390,category:'Foods,Canes',id:'5',rating:1.9,img:dress.src},
  {name:'Karen Williams Holmes',amount:390,category:'Foods,Canes',id:'6',rating:1.9,img:dress.src},
  {name:'Karen Williams Holmes',amount:390,category:'Foods,Canes',id:'7',rating:1.9,img:dress.src}
]
// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination,Keyboard]);

export default function ProductContainer() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [numberSlides,setNumberSlides] = useState<number>(1);
  
  

  return (
    <div className='lg:my-[5%] lg:border lg:py-5'>
      <h1 className='text-2xl font-bold my-5 mx-2'>
        Boutique
      </h1>
      <Swiper
      //@ts-ignore
        onSwiper={setSwiperRef}
        slidesPerView={2}
        spaceBetween={100}
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween:30
          },

        }}
        centeredSlides={false}
        pagination={{
          type: 'progressbar',
        }}
        keyboard
        navigation={false}
       
        autoplay
        style={{zIndex:'0'}}

        modules={[EffectFade]}
      >
        {products.map((product:Product, index) => (
          <SwiperSlide style={{}}  key={index} >
            
            <ProductCard name={product.name} rating={product.rating} amount={product.amount} category={product.category} id={product.id} img={product.img} />
          </SwiperSlide>
        ))}
      </Swiper>

     
    </div>
  );
}
