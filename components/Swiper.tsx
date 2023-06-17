'use client'
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide} from "swiper/react";
import {Spinner } from 'flowbite-react'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import "./styles.css";

// import required modules
import { Pagination,Navigation,Keyboard,Autoplay} from "swiper";
import Image from "next/image";
import { getClothes,products } from "@/services/api";


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

const url:string = 'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F3246da70-d287-11ea-8f7a-2750741cc65b.jpg?crop=5157%2C2901%2C0%2C269&resize=1500';

export default function SwiperComponent() {
  const [links,setLinks] = useState<string[]>([])
  const handler =async () => {
    const photos:any  = await getClothes();
    
    var data:string[] = [];
    photos.forEach((photo:any) => {
      data.push(photo.links.download);
    });
    setLinks(data);
  }

 (async ()=>{
  await handler();
  //await products(5);
 })();
  return (
    <>
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
       {links.map((src:string,index:number)=>(
        <SwiperSlide key={index} style={{height:400}} >
               <Image
                src={src}
                alt="cover"
                loading="lazy"
                //loader={Spinner }
                width={1000}
                height={500}
                quality={100}

             />
        </SwiperSlide>
       ))}
        
        
       
      </Swiper>
    </>
  );
}