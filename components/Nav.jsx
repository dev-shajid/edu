import Link from 'next/link'
import React from 'react'

const Nav = () => {
    return (
        <header className='flex justify-between items-center py-4'>
            <Link href='/'>
                <a className="bg-black cursor-pointer text-white font-medium px-4 py-2 text-4xl rounded-sm">
                    EDU
                </a>
            </Link>
            <nav className='flex'>
                <div className="item ml-12 font-medium text-[18px] cursor-pointer"><Link href='/hsc'>HSC</Link></div>
                <div className="item ml-12 font-medium text-[18px] cursor-pointer sm:block hidden"><Link href='/hsc'>Admission</Link></div>
                <div className="item ml-12 font-medium text-[18px] cursor-pointer sm:block hidden"><Link href='/ssc'>SSC</Link></div>
                <div className="item ml-12 font-medium text-[18px] cursor-pointer sm:block hidden"><Link href='/contact'>Contact</Link></div>
                <div className="item ml-12 font-medium text-[18px] cursor-pointer sm:block hidden">
                    Dark
                </div>
            </nav>
        </header>
    )
}

export default Nav