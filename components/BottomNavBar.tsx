'use client';
import { NextPage } from "next";
import { Alert,Navbar,Button,Dropdown} from 'flowbite-react'
import {getProducts } from '../services/api';
import {RiHomeLine} from 'react-icons/ri';
import {CiMenuBurger} from 'react-icons/ci';
import {AiOutlineUser,AiOutlineLogin,AiOutlineUserAdd,AiOutlineHeart} from 'react-icons/ai';
import {HiOutlineHome} from 'react-icons/hi';
import {BsBag,BsHeart,BsBell} from 'react-icons/bs';
const BottomNavBar: NextPage = () => {
     
    const handler = async () => {
        const products = await getProducts();
        console.log(products);
    }
    
    return (
        <div className="w-full">
            
            <Button className="rounded-none hidden " onClick={handler}><CiMenuBurger className="text-white "/></Button>
            <Navbar
            fluid
            aria-roledescription="It is for faster navigation."
            about="Navigation"
            
            className="border-t fixed bottom-[0] ">
                
                
                <div className="w-[100vw] md:hidden lg:hidden">
                    <ul className="flex justify-between  lg:w-[500px] ">
                        <li><Button  color={'gray'}  className="rounded-none border-none" onClick={handler}><HiOutlineHome className="text-[20pt]"/></Button></li>
                        <li><Button  color={'gray'}  className="rounded-none border-none" onClick={handler}><BsBag className="text-[20pt]"/></Button></li>
                        <li><Button  color={'gray'}  className="rounded-none border-none" onClick={handler}><BsHeart className="text-[20pt]"/></Button></li>
                        <li><Button  color={'gray'}  className="rounded-none border-none" onClick={handler}><BsBell className="text-[20pt]"/></Button></li>
                        <Dropdown
                            label={<AiOutlineUser className="text-xl"/>}
                            color={'gray'}
                            className="rounded-none border-none"
                            
                        >
                            <Dropdown.Header>
                                <h1 className="text-sm">Join or Sign In</h1>
                            </Dropdown.Header>
                            <Dropdown.Item >
                                   <AiOutlineLogin className=" mr-3 text-xl"/><span>Sign In</span>
                                
                            </Dropdown.Item>
                            <Dropdown.Item>
                                 
                                <AiOutlineUserAdd className=" mr-3 text-xl "/>
                                 <span>Join Us</span>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                Help
                            </Dropdown.Item>
                        </Dropdown>
                    </ul>
                    
                </div>
            </Navbar>
        </div>
    );


}


export default BottomNavBar;