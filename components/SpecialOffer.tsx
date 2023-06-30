'use client';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { NextPage } from "next";
import Image from "next/image";
//import Swiper from "swiper";
import { SwiperSlide,Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';




interface SpecialOfferData {
    title: string;
    img: string;
    description: string;
}

const SpecialOffer: NextPage = () => {
    //const image = `url(${banner.img})`;

    return (
        <div className="flex justify-around w-[80%] h-[250px] rounded-br-[20px] rounded-bl-[20px] mx-auto bg-cyan-500 my-5">
            <div>
                <Typography className='text-3xl'>Special Offers</Typography>
            </div>
            <div>
                <Swiper
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        1
                    </SwiperSlide>
                    <SwiperSlide>
                        2
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        3
                    </SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    )
}
export default SpecialOffer;