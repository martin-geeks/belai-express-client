'use client';
import { Button, IconButton, Typography } from "@material-tailwind/react";
import { NextPage, } from "next";
import Image from "next/image";
import {FcPhoneAndroid as BsFillLaptopFill,FcCloth } from 'react-icons/fc'
import ct1 from '@/public/samsungdex_kv_mo.webp';
import ct2 from '@/public/clothing-header-2000.jpg';
import ct3 from '@/public/makeup-kit.webp';
import ct4 from '@/public/sports.jpg'
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


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
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {categories.map((category, index) => (
    <Grid xs={2} sm={4} md={3} key={index}>
      <Item 
      className="h-[200px] shadow-sm border-2 m-2 bg-slate-700 "
      >
        {category.title}
        
        </Item>
    </Grid>
  ))}
</Grid>
        </div>
    )
}

export default Category;

