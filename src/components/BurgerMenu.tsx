"use client"
import { toggleMobileMenu } from '@/redux/slice/sidebarSlice';
import { Menu } from 'lucide-react';
import React from 'react';
import { useDispatch } from 'react-redux';

const BurgerMenu = () => {
    const dispatch = useDispatch();
    return (
            <div className=" h-12 pl-4 md:pl-0 2xl:pl-5 fixed top-6 md:top-4.5 sm:left-4 md:left-4  hover:scale-105 hover:cursor-pointer text-black z-1000" onClick={()=>dispatch(toggleMobileMenu())}>
                <div className="flex justify-center items-center p-2 bg-black/40 backdrop-blur-[10px] text-white rounded-full">
                <Menu className='h-6 w-6 md:h-10 md:w-10 object-contain '/>
                </div>
            </div>
    );
};

export default BurgerMenu;