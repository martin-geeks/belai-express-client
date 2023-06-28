'use client';
import { NextPage } from "next";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Button,List,ListItem,ButtonGroup,Typography} from '@material-tailwind/react';
import CartItem from "./CartItem";
import dress from '@/public/karen-willis-holmes.jpg'


const Cart:NextPage = () => {

    useEffect(()=> {
        Aos.init({
            duration:200,
        })
    });

    return (
       <div className="mt-[5%]" data-aos='slide-up'>
            <div className="border-b-2 py-3 flex justify-center lg:justify-start">
                <h1 className="mx-4">My Shopping  Cart</h1>
                
            </div>
            <div className="border-b-2 py-2 ">
               
                <div className="flex justify-around lg:justify-start">
                    <Button
                    size="sm"
                    title="hi"
                    color="red"
                    className=" normal-case rounded mx-2"
                    variant="outlined"
                    >
                        Buy All
                    </Button>
                    <Button
                    size="sm"
                    title="hi"
                    color="red"
                    className=" normal-case rounded mx-2"
                    variant="outlined"
                    >
                        Add to Wishlist
                    </Button>
                    <Button
                    size="sm"
                    title="hi"
                    color="red"
                    className=" normal-case rounded mx-2"
                    variant="outlined"
                    >
                        Remove
                    </Button>
                    <Button
                    size="sm"
                    title="hi"
                    color="red"
                    className=" normal-case rounded mx-2"
                    variant="outlined"
                    >
                        Buy All
                    </Button>
                    
                </div>
            </div>
            <div className="my-3 lg:grid lg:grid-cols-4 gap-y-2">
                {[1,3,7,8,9,4,6,7].map((index:any)=>(
                    <CartItem key={index} name="sample name" amount={300} img={dress.src} rating={3} category="" id={index} />
                ))}
                
                   
            </div>
       </div>
    )
}

export default Cart;