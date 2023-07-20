'use client'
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { HomeIcon,ShoppingBagIcon,BellIcon,HeartIcon } from '@heroicons/react/24/outline';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className='md:hidden lg:hidden'>
    <BottomNavigation 
        sx={{ width: 500 }} 
        value={value} 
        onChange={handleChange} 
        className='bg-white fixed bottom-0 '
        
        >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon/>}
      />
      <BottomNavigationAction
        label="Cart"
        value="cart"
        icon={<ShoppingBagIcon />}
      />
      <BottomNavigationAction
        label="Wishlist"
        value="favorites"
        icon={<HeartIcon />}
      />
      
      <BottomNavigationAction label="Notifications" value="Notifications" icon={<BellIcon />} />
    </BottomNavigation>
    </div>
  );
}