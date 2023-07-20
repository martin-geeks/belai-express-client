'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { List, ListItem} from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import {useRef,useState} from 'react';
import { NextPage } from "next";
import { Alert,Navbar,Dropdown,TextInput,Label} from 'flowbite-react'
import {getProducts } from '../services/api';
import {RiHomeLine} from 'react-icons/ri';
import {CiMenuBurger} from 'react-icons/ci';
import {AiOutlineLogin,AiOutlineUserAdd,AiOutlineSearch,AiOutlineArrowDown, AiOutlineArrowLeft} from 'react-icons/ai';
import {GrHomeRounded} from 'react-icons/gr';
import {BsBag,BsHeart,BsBell,BsArrowRight} from 'react-icons/bs';
import Link from "next/link";
import { Collapse } from 'flowbite';
//import { Button, List, ListItem } from '@material-tailwind/react';
import { BellAlertIcon, BellIcon, EyeIcon, HeartIcon, HomeIcon, PlusIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { Button as BTN } from '@mui/material';


const SearchForm:NextPage = () => {
    
    return (
        <form className="flex-col">   
                <label  className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input type="text" className="bg-gray-50  border-b-2 border-gray-300 outline-none text-gray-900 text-sm hover:border-sky-blue-700 block w-full pl-10 p-3.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
                    </div>
                    <Button
                    fullWidth
                    
                        className="bg-red-600 rounded-none"
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
    const [searchState,setSearchState] = useState<boolean>(false)
     
    const handler = async () => {
        const products = await getProducts();
        console.log(products);
    }
    const toggleSearch = async () => {
        if(bottomMenu.current?.classList.contains('mb-[-250%]')){
            bottomMenu.current?.classList.remove('mb-[-250%]');
            
        } else {
            bottomMenu.current?.classList.add('mb-[-250%]')
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
        <div  className="w-full lg:fixed lg:top-0 z-10" >
            <div ref={bottomMenu} className="fixed bottom-0 w-[100%] h-[100vh] bg-white z-10 bg-gray-100 rounded-t-[30px] mb-[-250%] transition-all transition-duration-[3] shadow-sm lg:hidden">

                <div className='flex justify-center flex-col' draggable={true} onDragStart={()=>{console.log('Begin dragging')}} onDrag={()=>{console.log('dragged')}}>
                    <Button onClick={toggleSearch} fullWidth={true} className=' hover:bg-red-100 rounded-none bg-white text-black'><AiOutlineArrowDown className='mx-auto text-2xl'/></Button>
                    <h1 className="font-medium text-center p-3.5 text-xl">Type what you are looking for</h1>
                </div>
                <SearchForm />
                <div className="text-center my-[25%]">
                   Nothing to show
                   <List>
                        {[1,2,3].map((index:number)=>(
                            <ListItem key={index} className='bg-gray-200 animate rounded-none h-[100px]'>
                                loader
                            </ListItem>
                        ))}
                   </List>
                </div>
            </div>
            <div ref={appDrawer} className="fixed bottom-0 bg-gray-100 w-[80%] h-[100vh]  bg-white z-10 bg-gray-100 rounded-none ml-[-100%] transition-all shadow-lg border-r lg:hidden">
                <div className='flex justify-end'><h1 className="font-medium text-center p-3.5 text-xl"></h1> <Button onClick={toggleAppDrawer} className='bg-white hover:bg-gray-200 rounded-none '><AiOutlineArrowLeft className='text-black'/></Button></div>
               
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
                <Button  className="rounded-none border-none shadow-none" onClick={toggleSearch}><AiOutlineSearch className="text-xl"/></Button>
                <Button    className="rounded-none border-none shadow-none" onClick={toggleAppDrawer}><CiMenuBurger className="text-xl"/></Button>
                </div>
                <form className="hidden items-center md:flex lg:flex">   
                <label  className="sr-only">Search</label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg  className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                    </div>
                    <input type="text" className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
                </div>
                <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-sky-700 rounded-lg border border-sky-700 hover:bg-sky-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span className="sr-only">Search</span>
                </button>
                </form>
                <div className="hidden md:block lg:block">
                    <ul className="flex justify-between  lg:w-[500px] ">
                        <li><Link href={'/'}><Button  className="rounded-none bg-white shadow-none border-none focus:ring-1" onClick={handler}> <HomeIcon color='black'  className='h-[25px] w-[25px]'/> </Button></Link></li>
                        <li><Link href={'/cart'}><Button   className="rounded-none bg-white shadow-none border-none focus:ring-1" onClick={handler}> <HeartIcon color='black'  className='h-[25px] w-[25px]'/> </Button></Link></li>
                        <li><Button  className="rounded-none bg-white shadow-none border-none focus:ring-1" onClick={handler}> <ShoppingBagIcon color='black'  className='h-[25px] w-[25px]'/> </Button></li>
                        <li><Button   className="rounded-none bg-white shadow-none border-none focus:ring-1" onClick={handler}> <BellIcon color='black'  className='h-[25px] w-[25px]'/> </Button></li>

                        <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button color={'inherit'} variant="contained" {...bindTrigger(popupState)} size={'small' }>
            My Account
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
                    </ul>
                    
                </div>
            </Navbar>
        </div>
    );


}



export default Header;