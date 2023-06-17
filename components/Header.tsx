'use client';
import { NextPage } from "next";
import { Alert,Navbar,Button,Dropdown,TextInput,Label,} from 'flowbite-react'
import {getProducts } from '../services/api';
import {RiHomeLine} from 'react-icons/ri';
import {CiMenuBurger} from 'react-icons/ci';
import {AiOutlineUser,AiOutlineLogin,AiOutlineUserAdd,AiOutlineSearch} from 'react-icons/ai';
import {HiOutlineHome} from 'react-icons/hi';
import {BsBag,BsHeart,BsBell,BsArrowRight} from 'react-icons/bs';
import Link from "next/link";
const Header: NextPage = () => {
     
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
            
            className="border-b">
                <Navbar.Brand>
                <h1 style={{fontFamily:"'Style Script', cursive"}} className="text-xl font-bold text-sky-700">Belai Express</h1>
                </Navbar.Brand>
                <div className="flex sm:hidden lg:hidden ">
                <Button  color={'gray'}  className="rounded-none border-none" onClick={handler}><AiOutlineSearch className="text-xl"/></Button>
                <Button  color={'gray'}  className="rounded-none border-none" onClick={handler}><CiMenuBurger className="text-xl"/></Button>
                </div>
                <form className="hidden lg:flex w-[500px]">
                    
                    <TextInput 
                    addon={<AiOutlineSearch/>} 
                    required={true} 
                    type="text" 
                    className="mx-3 outline-none w-full border-none hover:border-none" 
                    placeholder="clothes,smartphones,events & more!"
                    helperText={<></>}
                    
                    
                    />
                    <Button type='button' className="rounded-box p-[5px] border-none"><BsArrowRight className="" /></Button>
                </form>
                <div className="hidden md:block lg:block">
                    <ul className="flex justify-between  lg:w-[500px] ">
                        <li><Button  color={'gray'}  className="rounded-none border-none" onClick={handler}><RiHomeLine className="text-[20pt]"/></Button></li>
                        <li><Button  color={'gray'}  className="rounded-none border-none" onClick={handler}><BsBag className="text-[20pt]"/></Button></li>
                        <li><Button  color={'gray'}  className="rounded-none border-none" onClick={handler}><BsHeart className="text-[20pt]"/></Button></li>
                        <li><Button  color={'gray'}  className="rounded-none border-none" onClick={handler}><BsBell className="text-[20pt]"/></Button></li>
                        <Dropdown
                            label={<AiOutlineUser/>}
                            color={'gray'}
                            className="rounded-none"
                            
                        >
                            <Dropdown.Header>
                                <h1 className="text-sm">Join or Sign In</h1>
                            </Dropdown.Header>
                            <Dropdown.Item >
                                   <Link href={{pathname:'/authentication'}} prefetch={true} className="flex"><AiOutlineLogin className=" mr-3 text-xl"/><span>Sign In</span></Link>
                                
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


export default Header;