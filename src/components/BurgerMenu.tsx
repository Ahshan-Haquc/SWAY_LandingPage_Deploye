"use client"
import { toggleMobileMenu } from '@/redux/slice/sidebarSlice';
import { Menu } from 'lucide-react';
import React from 'react';
import { useDispatch } from 'react-redux';

const BurgerMenu = () => {
    const dispatch = useDispatch();
    return (
        <div className='h-12 md:h-16 flex items-center pl-4 md:pl-0 sticky top-0 z-50'>
            <div className=" hover:scale-105 " onClick={()=>dispatch(toggleMobileMenu())}>
                <Menu className='h-6 w-6 md:h-10 md:w-10 object-contain '/>
            </div>
        </div>
    );
};

export default BurgerMenu;