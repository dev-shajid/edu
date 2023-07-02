import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div className='m-auto md:flex items-center md:mt-0 mt-8'>
            <div className="left flex-[3]">
                <div className="title mb-5 lg:text-6xl md:text-[2.9rem] xs:text-[2.9rem] text-[2rem] lg:leading-snug md:leading-tight font-semibold">
                    <span className='text-blue'>Easy To Find</span><br />
                    <span>Your Dream Contents</span>
                </div>
                <div className='grid grid-cols-3 max-w-[360px] gap-4'>
                    {
                        items.map((item, i) => (
                            i == 2 ?
                                <div key={100}></div> :
                                <div key={i} className='bg-white py-3 px-5 rounded-md border border-stackBorder-light bg-grayd-200 flex flex-col justify-center items-center max-w-[100px]'>
                                    <div className='max-w-[60px]'>
                                        <Image
                                            src={item.icon}
                                            alt='ssc'
                                            height={60}
                                            width={60}
                                            objectFit='contain'
                                        />
                                    </div>
                                    <div className='font-semibold xs:text-[15px] text-[12px]'>{item.name}</div>
                                </div>

                        ))
                    }
                </div>

            </div>

            <div className="image p-5 bg-indigoj-200 md:text-center text-center flex-[2]">
                <Image
                    src='/images/banner2.png'
                    alt='Banner'
                    height={500}
                    width={500}
                    objectFit='contain'
                />
            </div>
        </div>
    )
}

export default Banner

const items = [
    {
        icon: '/images/ssc.png',
        name: 'SSC'
    },
    {
        icon: '/images/hsc.png',
        name: 'HSC'
    },
    {},
    {
        icon: '/images/engineering.png',
        name: 'Engineering'
    },
    {
        icon: '/images/varsity.png',
        name: 'Varsity'
    },
    {
        icon: '/images/medical.png',
        name: 'Medical'
    },
]