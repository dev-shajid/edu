import Link from 'next/link'
import React from 'react'

const Card = (props) => {
    if (props?.logo) {
        return (
            <Link href={props.slug}>
                <a className='border flex flex-col justify-start h-full items-center border-stackBorder-light cursor-pointer hover:border-blue transition rounded-lg bg-indigo-40 bg-white py-4'>
                    <div className='lg:w-[90px] h-auto sm:w-[75px] w-[70px]' >
                        <img src={props.logo} alt="logo" className='rounded-full' />
                    </div>
                    <div className='lg:text-2xl xs:text-xl mt-4 text-center font-medium px-4'>{props.name}</div>
                </a >
            </Link>
        )
    }
    if (props?.num) {
        return (
            <Link href={props.slug}>
                <a className='border flex flex-col justify-start h-full items-center border-stackBorder-light cursor-pointer hover:border-blue transition rounded-lg bg-indigo-40 bg-white py-4'>
                    <div className='lg:w-[90px] sm:w-[75px] w-[70px] text-center text-5xl font-semibold text-blue' >
                        {props.num}
                    </div>
                    <div className='lg:text-2xl xs:text-xl mt-4 text-center font-medium px-4'>{props.name}</div>
                </a >
            </Link>
        )
    }

    if (props.thumb) {
        return (
            <Link href={props.slug}>
            <a className='border flex flex-col justify-start h-full items-center border-stackBorder-light cursor-pointer hover:border-blue transition rounded-lg bg-indigo-40 bg-white pb-4 overflow-hidden'>
                <div className='w-full text-center text-5xl aspect-video bg-gray-200 font-semibold overflow-hidden' >
                    <img src={props.thumb} alt="Thumbnail" className='aspect-video object-cover duration-300 hover:scale-105' />
                </div>
                <div className='lg:text-2xl xs:text-xl mt-4 text-center font-medium px-4'>{props.name} ({props.total})</div>
            </a>
            </Link>
        )
    }
}

export default Card