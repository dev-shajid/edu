'use client'

import Link from 'next/link'
import React from 'react'
import { BsFillMoonFill } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineLeft, AiOutlineThunderbolt } from 'react-icons/ai';
import { RiFlaskLine } from 'react-icons/ri';
import { TbMessageDots } from 'react-icons/tb';
import { usePathname, useRouter } from 'next/navigation';

const Nav = () => {
    const path = usePathname().split('/')

    return (
        <>
            <header className='flex justify-between items-center h-[80px]'>
                <Link href='/' className='bg-black cursor-pointer text-white font-medium px-4 py-2 text-3xl rounded-sm'>
                    EDU
                </Link>
                <nav className='flex gap-8 justify-between items-center mobile_nav'>
                    {
                        Menu.map((item, i) => (
                            <Link key={i} href={item.to} className="font-medium text-base flex flex-col items-center">
                                <div className={`${path[1] == item.active && 'text-white bg-gray-700'} sm:hidden w-[40px] text-[20px] aspect-square flex items-center justify-center rounded-full !cursor-pointer`}>
                                    {item.icon}
                                </div>
                                <span className='cursor-pointer'>{item.name}</span>
                            </Link>
                        ))
                    }
                </nav>
            </header>
        </>
    )
}

export default Nav

const Menu = [
    {
        name: "Home",
        to: '/',
        icon: <AiOutlineHome />,
        active: '',
    },
    {
        name: "HSC",
        to: '/hsc',
        icon: <AiOutlineThunderbolt />,
        active: 'hsc',
    },
    {
        name: "SSC",
        to: '/ssc',
        icon: <RiFlaskLine />,
        active: 'ssc',
    },
    {
        name: "Contact",
        to: '/contact',
        icon: <TbMessageDots />,
        active: 'contact',
    },
]