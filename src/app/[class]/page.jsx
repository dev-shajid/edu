'use client'

import { Card, Cards, Title } from '@/components/Basic'
import Link from 'next/link'
import React from 'react'
import { SkeletonLoading } from './[subject]/[chapter]/loading'

export default function page({ params }) {

    if (params.class != 'hsc' && params.class != 'ssc') return <Title>Didnt get the class</Title>

    return (
        <>
            <div className='mt-8'>
                <Title>Your Subjects</Title>
                <Cards>
                    {
                        (params.class == 'hsc' ? hsc : ssc).map((sub, i) => (
                            <div key={i} className='xs:px-4 px-[5px]'>
                                <div className='m-auto max-w-xs h-full'>
                                    <Link href={sub.slug}>
                                        <Card logo={sub.img} name={sub?.name} />
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </Cards>
            </div>
        </>
    )
}

const hsc = [
    {
        img: '/images/p1.png',
        name: 'Physics 1st',
        slug: '/hsc/physics1',
    },
    {
        img: '/images/p2.png',
        name: 'Physics 2nd',
        slug: '/hsc/physics2',
    },
    {
        img: '/images/h1.png',
        name: 'Higher Math 1st',
        slug: '/hsc/hmath1',
    },
    {
        img: '/images/h2.png',
        name: 'Higher Math 2nd',
        slug: '/hsc/hmath2',
    },
    {
        img: '/images/c1.png',
        name: 'Chemistry 1st',
        slug: '/hsc/chemistry1',
    },
    {
        img: '/images/c2.png',
        name: 'Chemistry 2nd',
        slug: '/hsc/chemistry2',
    },
    {
        img: '/images/b1.png',
        name: 'Biology 1st',
        slug: '/hsc/biology1',
    },
    {
        img: '/images/b2.png',
        name: 'Biology 2nd',
        slug: '/hsc/biology2',
    },
    {
        img: '/images/ict.png',
        name: 'ICT',
        slug: '/hsc/ict',
    },
    {
        img: '/images/ban1.png',
        name: 'Bangla 1st',
        slug: '/hsc/bangla1',
    },
    {
        img: '/images/ban2.png',
        name: 'Bangla 2nd',
        slug: '/hsc/bangla2',
    },
    {
        img: '/images/e1.png',
        name: 'English 1st',
        slug: '/hsc/english1',
    },
    {
        img: '/images/e2.png',
        name: 'English 2nd',
        slug: '/hsc/english2',
    },
]

const ssc = [
    {
        img: '/images/p1.png',
        name: 'Physics',
        slug: '/ssc/physics',
    },
    {
        img: '/images/h1.png',
        name: 'Math',
        slug: '/ssc/math',
    },
    {
        img: '/images/h2.png',
        name: 'Higher Math',
        slug: '/ssc/hmath',
    },
    {
        img: '/images/c1.png',
        name: 'Chemistry',
        slug: '/ssc/chemistry',
    },
    {
        img: '/images/b1.png',
        name: 'Biology',
        slug: '/ssc/biology',
    },
    {
        img: '/images/ict.png',
        name: 'ICT',
        slug: '/ssc/ict',
    },
    {
        img: '/images/ban1.png',
        name: 'Bangla 1st',
        slug: '/ssc/bangla1',
    },
    {
        img: '/images/ban2.png',
        name: 'Bangla 2nd',
        slug: '/ssc/bangla2',
    },
    {
        img: '/images/e1.png',
        name: 'English 1st',
        slug: '/ssc/english1',
    },
    {
        img: '/images/e2.png',
        name: 'English 2nd',
        slug: '/ssc/english2',
    },
]