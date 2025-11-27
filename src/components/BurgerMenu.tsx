"use client"
import { toggleMobileMenu } from '@/redux/slice/sidebarSlice';
import { Menu } from 'lucide-react';
import React from 'react';
import { useDispatch } from 'react-redux';

const BurgerMenu = () => {
    const dispatch = useDispatch();
    return (
            <div className=" h-12 pl-4 md:pl-0 fixed top-4 md:top-6 z-50 hover:scale-105 hover:cursor-pointer text-black" onClick={()=>dispatch(toggleMobileMenu())}>
                <Menu className='h-6 w-6 md:h-10 md:w-10 object-contain '/>
            </div>
    );
};

export default BurgerMenu;