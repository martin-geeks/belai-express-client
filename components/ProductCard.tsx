import { NextPage } from "next";
import {Card,Rating,Button } from "flowbite-react";
import { Product } from "@/utils/types";
import iphone from '../public/apple-iphone-14-pro-max.jpg';
import Image from "next/image";

 const ProductCard: NextPage<Product> = (product:Product) => {
    const handleRating = ()  =>  {
        let rating:number = Math.fround((product.rating/5) * 100);
        return rating;
    };
    return (
        <Card 
        className='bg-yellow-399  border mx-4 my-5 lg:mx-0 lg:my-0 '
        
        
        
        >
            <Image
                src={product.img}
                width={200}
                height={300}
                alt={product.name}
               
                className=" mx-auto h-[200px] md:h-[300px] lg:w-[300px] lg:h-[300px]"
            />
            <p className=' text-sm font-medium text-gray-500'>{product.category}</p>
        <h1 className='text-sm md:text-xl lg:text-2xl font-bold'>
          {product.name}
        </h1>
        <Rating.Advanced percentFilled={handleRating()} ><p>Rating</p></Rating.Advanced>
        <div className='flex items-center justify-between'>
          <h1 className='text-xl lg:text-3xl font-bold text-gray-800'>K{product.amount}</h1>
          <Button
            color={'failure'}
            processingLabel='Loading'
            
          >
            Add to Cart
          </Button>
        </div>
      </Card>
    )
}

export default ProductCard;