'use client';
import { NextPage } from "next";
import { Alert,Navbar,Button,Dropdown} from 'flowbite-react'
import {getProducts } from '../services/api';
import {CiMenuBurger} from 'react-icons/ci';
import {BsBag,BsHeart,BsBell} from 'react-icons/bs';
import {GrHomeRounded} from 'react-icons/gr';
const BottomNavBar: NextPage = () => {
     
    const handler = async () => {
        const products = await getProducts();
        console.log(products);
    }
    
    return (
        <div className="w-full z-[20]">
            
            <Button className="rounded-none hidden " onClick={handler}><CiMenuBurger className="text-white "/></Button>
            <Navbar
            fluid
            aria-roledescription="It is for faster navigation."
            about="Navigation"
            
            className="border-t fixed bottom-[0] ">
                
                
                <div className="w-[100vw] md:hidden lg:hidden">
                    <ul className="flex justify-around  lg:w-[500px] ">
                        <li><Button  color={'gray'}  className="rounded-none border-none" onClick={handler}><GrHomeRounded className="text-[15pt] font-medium"/></Button></li>
                        <li><Button  color={'gray'}  className="rounded-none border-none" onClick={handler}><BsBag className="text-[15pt]"/></Button></li>
                        <li><Button  color={'gray'}  className="rounded-none border-none" onClick={handler}><BsHeart className="text-[15pt]"/></Button></li>
                        <li><Button  color={'gray'}  className="rounded-none border-none" onClick={handler}><BsBell className="text-[15pt]"/></Button></li>
                        
                    </ul>
                    
                </div>
            </Navbar>
        </div>
    );


}


export default BottomNavBar;