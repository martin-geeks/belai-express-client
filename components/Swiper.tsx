'use client'
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide} from "swiper/react";
import {Button, Spinner } from 'flowbite-react'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import cover1 from '../public/adria-garcia-sarceda.jpg';
import cover2 from '../public/amanda-canas.jpg';
import cover3 from '../public/amanda-canas.jpg'
//import "./styles.css";

// import required modules
import { Pagination,Navigation,Keyboard,Autoplay} from "swiper";
import Image from "next/image";
import { getClothes,products } from "@/services/api";
import { BsCartPlus, BsGenderFemale, BsLaptop, BsMegaphone } from "react-icons/bs";


/*
 <SwiperSlide className="">
            <Image
                src={url}
                alt="cover"
                loading="lazy"
                //loader={Spinner }
                width={600}
                height={500}

             />
        </SwiperSlide>
*/
const categories:any = [
  {
    title:'Virtue Reality Available',
    img:cover1.src
  },
  {
    title:'Clothing Store',
    img:cover2.src
  },
  {
    title:'Virtue Reality Availale',
    img:cover1.src
  }
]

const url:string = 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F3246da70-d287-11ea-8f7a-2750741cc65b.jpg?crop=5157%2C2901%2C0%2C269&resize=1500';

export default function SwiperComponent() {
  const [links,setLinks] = useState<string[]>([])
  const handler =async () => {
    const photos:any  = await getClothes();
    if(photos.status === true) {
      var data:string[] = [];
      photos.forEach((photo:any) => {
        data.push(photo.links.download);
      });
      setLinks(data);
    }
  
  }

 (async ()=>{
  await handler();
  //await products(5);
 })();
  return (
    <div>
      <div className="flex">
        <h1 className="text-3xl font-bold my-3 mx-5 bg-gray-200 rounded p-2">Trending</h1>
        <Button 
          className="my-3 "
          size={'lg'}
        >
          <BsMegaphone  className="text-xl mr-3"/>
          Promotions
        </Button>
        <Button 
          className="my-3 mx-4"
          size={'lg'}
        >
          <BsLaptop  className="text-xl mr-3"/>
          Technology
        </Button>
        <Button 
          className="my-3 bg-pink-600 hover:bg-pink-800 "
          size={'lg'}
        >
          <BsGenderFemale  className="text-xl mr-3"/>
          Beauty
        </Button>

      </div>
      <Swiper
        
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        keyboard={{
            enabled:true,
        }}
        modules={[Pagination,Navigation,Keyboard,Autoplay]}
        className="mySwiper"
      >
       {categories.map((category:any,index:number)=>(
        <SwiperSlide key={index}  >
          <div className="absolute w-[100%]   ">
            <h1 className="my-20 ml-5 border-b text-white bg-transparent p-5 font-bold text-4xl   ">{category.title}</h1>
            <div className="flex my-5 items-center justify-center mx-auto">
            <Button
            color={'failure'}
            className="float-right rounded-none mx-2"
            size={'lg'}
            >
              Visit Store
            </Button>
            <Button
            color={'failure'}
            className="float-right rounded-none mx-1"
            size={'lg'}
            
            >
              Pre-Order
            </Button>
            <Button
            color={'failure'}
            className="float-right rounded-none mx-1"
            size={'lg'}
            
            >
              <BsCartPlus  className="text-2xl mx-1"/> Instant Purchase
            </Button>
            <Button
            color={'failure'}
            className="float-right rounded-none mx-1"
            size={'lg'}
            
            >
              <BsCartPlus  className="text-2xl mx-1"/> Sign Up
            </Button>
            </div>
          </div>
               <Image
                src={category.img}
                alt="cover"
                loading="lazy"
                //loader={Spinner }
                width={1000}
                height={500}
                quality={100}
                className="w-[100%] h-[500px]"

             />
        </SwiperSlide>
       ))}
        
        
       
      </Swiper>
    </div>
  );
}