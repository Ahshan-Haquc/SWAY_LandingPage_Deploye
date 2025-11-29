"use client"
import { toggleMobileMenu } from '@/redux/slice/sidebarSlice';
import { Menu } from 'lucide-react';
import React from 'react';
import { useDispatch } from 'react-redux';

const BurgerMenu = () => {
    const dispatch = useDispatch();
    return (
            <div className=" h-12 pl-4 md:pl-0 2xl:pl-5 fixed top-4 md:top-4.5 sm:left-4 2xl:left-1/9 z-50 hover:scale-105 hover:cursor-pointer text-black" onClick={()=>dispatch(toggleMobileMenu())}>
                <div className="flex justify-center items-center p-2 bg-black/10 backdrop-blur-[10px] rounded-full">
                <Menu className='h-6 w-6 md:h-10 md:w-10 object-contain '/>
                </div>
            </div>
    );
};

export default BurgerMenu;