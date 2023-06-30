'use client';
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { NextPage, } from "next";
import Image from "next/image";
import {FcPhoneAndroid as BsFillLaptopFill,FcCloth } from 'react-icons/fc'
import ct1 from '@/public/samsungdex_kv_mo.webp';
import ct2 from '@/public/clothing-header-2000.jpg';
import ct3 from '@/public/makeup-kit.webp';
import ct4 from '@/public/sports.jpg'

interface CategoryItem {
    title: string;
    icon: string;
    pageURL: string;
}

const categories: CategoryItem[] = [
    {
        title:'Digital Products',
        icon:ct1.src,
        pageURL:'/category',
    },
    {
        title:'Fashion and Clothes',
        icon:ct2.src,
        pageURL:'/category',
    },
    {
        title:'Cosmetic Products',
        icon:ct3.src,
        pageURL:'/category',
    },
    {
        title:'Sport and Trip',
        icon:ct4.src,
        pageURL:'/category',
    }

]
const Category: NextPage = ()=> {
   

    return (
        <div data-aos='slide-up'>
            <h1 className="text-3xl text-center my-3 ">Category of Goods</h1>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:justify-around my-10  items-center">
            {categories.map((category:CategoryItem,index:number)=>(
                <div key={index} className=" mx-2 h-[200px] rounded-xl border-2">
                    <Typography className='absolute my-5 lg:text-2xl font-bold mx-5 hover:scale-5 bg-blue-300'>{category.title}</Typography>
                        
                        <Image 
                            src={category.icon}
                            width={100}
                            height={100}
                            alt="Category Item"
                            className="w-full"
                            quality={100}
                        />
                    
                </div>
            ))}
        </div>
        </div>
    )
}

export default Category;

