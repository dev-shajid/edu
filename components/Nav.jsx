import Link from 'next/link'
import React from 'react'
import { BsFillMoonFill } from 'react-icons/bs';
import { AiOutlineHome, AiOutlineLeft, AiOutlineThunderbolt } from 'react-icons/ai';
import { RiFlaskLine } from 'react-icons/ri';
import { TbMessageDots } from 'react-icons/tb';
import { useRouter } from 'next/router';

const Nav = () => {
    const router = useRouter()
    console.log(router.route);
    return (
        <>
            <header className='flex justify-between items-center py-4 lg:px-0 px-1'>
                <Link href='/'>
                    <a className="bg-black cursor-pointer text-white font-medium px-4 py-2 text-4xl rounded-sm md:scale-100 scale-75 origin-left">
                        EDU
                    </a>
                </Link>
                <div className='flex items-center'>
                    <div className='mobile_nav'>
                        <nav className='flex container m-auto'>
                            <div className="item sm:ml-12 font-medium text-[18px] cursor-pointer"><Link href='/'>
                                <a>
                                    <div className={`${router.route == '/' && 'text-white bg-gray-700 '} sm:hidden w-[40px] h-[40px] flex items-center justify-center rounded-full`}>
                                        <AiOutlineHome />
                                    </div>
                                    Home
                                </a>
                            </Link></div>
                            <div className="item sm:ml-12 font-medium text-[18px] cursor-pointer"><Link href='/hsc'>
                                <a>
                                    <div className={`${router.query.class == 'hsc' && 'text-white bg-gray-700 '} sm:hidden w-[40px] h-[40px] flex items-center justify-center rounded-full`}>
                                        <AiOutlineThunderbolt />
                                    </div>
                                    HSC
                                </a>
                            </Link></div>
                            <div className="item sm:ml-12 font-medium text-[18px] cursor-pointer"><Link href='/ssc'>
                                <a>
                                    <div className={`${router.query.class == 'ssc' && 'text-white bg-gray-700 '} sm:hidden w-[40px] h-[40px] flex items-center justify-center rounded-full`}>
                                        <RiFlaskLine />
                                    </div>
                                    SSC
                                </a>
                            </Link></div>
                            <div className="item sm:ml-12 font-medium text-[18px] cursor-pointer"><Link href='/contact'>
                                <a>
                                    <div className={`${router.route == '/contact' && 'text-white bg-gray-700 '} sm:hidden w-[40px] h-[40px] flex items-center justify-center rounded-full`}>
                                        <TbMessageDots />
                                    </div>
                                    Contact
                                </a>
                            </Link></div>
                        </nav>
                    </div>
                    <div className="item ml-12 font-medium text-[18px] cursor-pointer sm:flex items-center">
                        <BsFillMoonFill />
                    </div>
                </div>
            </header>
            <div className={`my-4 ${router.route == '/' && 'hidden'}`}>
                <AiOutlineLeft onClick={() => router.back()} className='text-3xl cursor-pointer' />
            </div>
        </>
    )
}

export default Nav