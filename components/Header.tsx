'use client';
import {useRef} from 'react';
import { NextPage } from "next";
import { Alert,Navbar,Button,Dropdown,TextInput,Label,} from 'flowbite-react'
import {getProducts } from '../services/api';
import {RiHomeLine} from 'react-icons/ri';
import {CiMenuBurger} from 'react-icons/ci';
import {AiOutlineLogin,AiOutlineUserAdd,AiOutlineSearch,AiOutlineArrowDown, AiOutlineArrowLeft} from 'react-icons/ai';
import {GrHomeRounded} from 'react-icons/gr';
import {BsBag,BsHeart,BsBell,BsArrowRight} from 'react-icons/bs';
import Link from "next/link";
import Aos from "aos";
import 'aos/dist/aos.css';



const SearchForm:NextPage = () => {
    
    return (
        <form className="flex-col">   
                <label  className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" className="bg-gray-50  border-b-2 border-gray-300 outline-none text-gray-900 text-sm hover:border-sky-blue-700 block w-full pl-10 p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
                    </div>
                    <Button
                        className="w-full rounded-none bg-sky-700 hover:bg-sky-800 focus:ring-0"
                    >
                        Search
                    </Button>
                </form>
    )
}

const Drawer:NextPage = () => {
    return (
    <div>
        App Drawer
    </div>
    )
}
const Header: NextPage = () => {
     const bottomMenu:any = useRef();
     const appDrawer:any = useRef();

     Aos.init({
        duration:5000,
    })
    const handler = async () => {
        const products = await getProducts();
        console.log(products);
    }
    const toggleSearch = async () => {
        if(bottomMenu.current?.classList.contains('mb-[-150%]')){
            bottomMenu.current?.classList.remove('mb-[-150%]');
            
        } else {
            bottomMenu.current?.classList.add('mb-[-150%]')
        }
    }
    const toggleAppDrawer = async () => {
        if(appDrawer.current?.classList.contains('ml-[-100%]')){
            appDrawer.current?.classList.remove('ml-[-100%]');
            
        } else {
            appDrawer.current?.classList.add('ml-[-100%]')
        }
    }
    
    return (
        <div  className="w-full ">
            <div ref={bottomMenu} className="fixed bottom-0 w-[100%] h-[400px] bg-white z-10 bg-gray-100 rounded-t-[30px] mb-[-150%] transition-all shadow-sm lg:hidden">
                <div className='flex justify-end'><h1 className="font-medium text-center p-3.5 text-xl">Enter product name or id</h1> <Button onClick={toggleSearch} className='bg-red-700 hover:bg-red-800 rounded-none rounded-tr-[30px]'><AiOutlineArrowDown/></Button></div>
                <SearchForm />
                <div className="text-center my-[25%]">
                   Nothing to show
                </div>
            </div>
            <div ref={appDrawer} className="fixed bottom-0  w-[80%] h-[100vh]  bg-white z-10 bg-gray-100 rounded-none ml-[-100%] transition-all shadow-lg border-r lg:hidden">
                <div className='flex justify-end'><h1 className="font-medium text-center p-3.5 text-xl">Side Bar</h1> <Button onClick={toggleAppDrawer} className='bg-red-700 hover:bg-red-800 rounded-none '><AiOutlineArrowLeft/></Button></div>
                <Drawer />
                <div className="text-center my-[25%]">
                   App Drawer content
                </div>
            </div>
            <Button className="rounded-none hidden " onClick={handler}><CiMenuBurger className="text-white "/></Button>
            <Navbar
            fluid
            aria-roledescription="It is for faster navigation."
            about="Navigation"
            
            className="border-b">
                <Navbar.Brand>
                <h1 style={{fontFamily:"'Style Script', cursive"}} className="hidden text-xl font-bold text-sky-700 lg:block">Belai Express</h1>
                <h1 className="text-sky-700 text-xl font-bold md:hidden lg:hidden">Belai Express</h1>
                </Navbar.Brand>
                <div className="flex sm:hidden lg:hidden ">
                <Button  color={'gray'}  className="rounded-none border-none" onClick={toggleSearch}><AiOutlineSearch className="text-xl"/></Button>
                <Button  color={'gray'}  className="rounded-none border-none" onClick={toggleAppDrawer}><CiMenuBurger className="text-xl"/></Button>
                </div>
                <form className="hidden items-center md:flex lg:flex">   
                <label  className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
                </div>
                <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-sky-700 rounded-lg border border-sky-700 hover:bg-sky-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span className="sr-only">Search</span>
                </button>
                </form>
                <div className="hidden md:block lg:block">
                    <ul className="flex justify-between  lg:w-[500px] ">
                        <li><Button  color={'gray'}  className="rounded-none border-none focus:ring-1" onClick={handler}><GrHomeRounded className="text-[20pt]"/></Button></li>
                        <li><Button  color={'gray'}  className="rounded-none border-none" onClick={handler}><BsBag className="text-[20pt]"/></Button></li>
                        <li><Button  color={'gray'}  className="rounded-none border-none" onClick={handler}><BsHeart className="text-[20pt]"/></Button></li>
                        <li><Button outline color={'gray'}  className="rounded-none border-none hover:border-none" onClick={handler}><BsBell className="text-[20pt]"/></Button></li>
                        <Dropdown
                            label={<div>Account</div>}
                            color={'gray'}
                            className="rounded-none"
                            
                            
                        >
                            <Dropdown.Header>
                                <h1 className="text-sm">Join or Sign In</h1>
                            </Dropdown.Header>
                            <Dropdown.Item >
                                   <Link href={{pathname:'/authentication',query:'signin=true'}} prefetch={true} className="flex"><AiOutlineLogin className=" mr-3 text-xl"/><span>Sign In</span></Link>
                                
                            </Dropdown.Item>
                            <Dropdown.Item>
                                 
                            <Link href={{pathname:'/authentication',query:'signup=true'}} prefetch={true} className="flex"><AiOutlineUserAdd className=" mr-3 text-xl "/>
                                 <span>Join Us</span>
                                 </Link>
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