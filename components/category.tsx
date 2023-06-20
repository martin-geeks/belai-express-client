'use client';
import { Button } from "flowbite-react";
import { NextPage } from "next";



const Category: NextPage = ()=> {
   

    return (
        <div data-aos='slide-up'>
            <h1 className="text-xl text-center my-3 underline ">Trending categories</h1>
        <div className="lg:flex-row lg:justify-around my-10 flex flex-col  items-center">
            {[1,2,3].map((i:number,index:number)=>(
                <div key={index} className="">
                    <button
                        className="w-[100px] h-[100px] rounded-full bg-red-700 text-white"
                    >
                        TECH
                    </button>
                    <h1 className="my-2">Technology</h1>
                </div>
            ))}
        </div>
        </div>
    )
}

export default Category;

