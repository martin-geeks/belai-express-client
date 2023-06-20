'use client';
import { NextPage } from "next";
import { Carousel } from 'flowbite-react';
import Banner from "./Banner";

import cover1 from '../public/adria-garcia-sarceda.jpg';
import cover2 from '../public/amanda-canas.jpg';
import cover3 from '../public/amanda-canas.jpg'


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
      title:'Accessories & Technology',
      img:cover1.src
    }
  ]
  

const Slider: NextPage = () => {
    
    return (
        <Carousel
        className="rounded-none"
        >
            {categories.map((category:any,index:number)=>(
                <Banner key={index} title={category.title} img={category.img}/>
            ))}
        </Carousel>
    )
}


export default Slider;