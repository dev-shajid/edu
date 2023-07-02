import Link from 'next/link'
import React from 'react'

export function Section({ children, className }) {
  return (
    <div className={`${className} max-w-[1400px] p-4`}>{children}</div>
  )
}

export function Title({ children, className }) {
  return (
    <div className={`${className} sm:text-3xl xs:text-3xl text-2xl font-semibold text-center`}>
      {children}
    </div>
  )
}

export function Cards({ children, thumb, className }) {
  return (
    <div className={`${className} grid ${thumb ? 'lg:grid-cols-3 sm:grid-cols-2' : 'md:grid-cols-3 grid-cols-2'} gap-y-5 mt-8`}>
      {children}
    </div>
  )
}

export function Card(props) {
  if (props?.logo) {
    return (
      <div className='border flex flex-col justify-start h-full items-center border-stackBorder-light cursor-pointer hover:border-blue transition rounded-lg bg-indigo-40 bg-white py-4'>
        <div className='lg:w-[90px] aspect-square sm:w-[75px] w-[70px]' >
          <img src={props.logo} alt="logo" className='rounded-full' />
        </div>
        <div className='text-[16px] md:text-[20px] py-3 text-center font-medium px-4'>{props.name}</div>
      </div>
    )
  }
  if (props?.num) {
    return (
      <div className='border flex flex-col justify-start h-full items-center border-stackBorder-light cursor-pointer hover:border-blue transition rounded-lg bg-indigo-40 bg-white py-4'>
        <div className='lg:w-[90px] sm:w-[75px] w-[70px] text-center text-5xl font-semibold text-blue' >
          {props.num}
        </div>
        <div className='text-[16px] md:text-[20px] py-3 text-center font-medium px-4'>{props.name}</div>
      </div>
    )
  }

  if (props.thumb) {
    return (
      <div className='border flex flex-col justify-start h-full items-center border-stackBorder-light cursor-pointer hover:border-blue transition rounded-lg bg-indigo-40 bg-white overflow-hidden'>
        <div className='w-full text-center text-5xl aspect-video bg-gray-200 font-semibold overflow-hidden' >
          <img src={props.thumb} alt="Thumbnail" className='aspect-video object-cover duration-300 hover:scale-105' />
        </div>
        <div className='text-[16px] md:text-[20px] py-3 text-center font-medium px-4'>{props.name} ({props.total})</div>
      </div>
    )
  }
}