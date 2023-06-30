'use client';
import { NextPage } from "next";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Banner from "./Banner";

import cover1 from '../public/adria-garcia-sarceda.jpg';
import cover2 from '../public/amanda-canas.jpg';
import cover3 from '../public/amanda-canas.jpg'


const sample_description = `It is not so much for its beauty that the forest makes a claim
upon men&apos;s hearts, as for that subtle something, that
quality of air that emanation from old trees, that so
wonderfully changes and renews a weary spirit.`;

const categories:any = [
    {
      title:'Virtue Reality Available',
      img:cover1.src,
      description:sample_description
    },
    {
      title:'Clothing Store',
      img:cover2.src,
      description: sample_description,
    },
    {
      title:'Accessories & Technology',
      img:cover1.src,
      description: sample_description,
    }
  ]
  

const Slider: NextPage = () => {
    
    return (
        <Carousel
          transition={{duration:1}}
          lang="english"
          title="Carousel of the available shop products"
          autoplay={true}
          className="rounded-none"
        >
            {categories.map((category:any,index:number)=>(
                <Banner description={category.description} key={index} title={category.title} img={category.img}/>
            ))}
        </Carousel>
    )
}


export default Slider;