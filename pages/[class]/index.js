import { useRouter } from 'next/router'
import React from 'react'
import Card from '../../components/Card'
import Cards from '../../components/Cards'
import Title from '../../components/Title'

const Class = () => {
    const router = useRouter()
    
    if(router.query.class=='hsc'){
        
        return (
            <>
                <div className='py-12'>
                    <Title>Your Subjects</Title>
                    <Cards>
                        {
                            hsc.map((sub, i) => (
                                <div key={i} className='xs:px-4 px-[5px]'>
                                    <div key={i} className='m-auto max-w-xs'>
                                        <Card logo={sub.img} name={sub.name} slug={sub.slug} />
                                    </div>
                                </div>
                            ))
                        }
                    </Cards>
                </div>
            </>
        )
    }

    if(router.query.class=='ssc'){
        return (
            <>
                <div className='py-12'>
                    <Title>Your Subjects</Title>
                    <Cards>
                        {
                            ssc.map((sub, i) => (
                                <div key={i} className='xs:px-4 px-[5px]'>
                                    <div key={i} className='m-auto max-w-xs'>
                                        <Card logo={sub.img} name={sub.name} slug={sub.slug} />
                                    </div>
                                </div>
                            ))
                        }
                    </Cards>
                </div>
            </>
        )
    }
    return (
        <Title>Didnt get the class</Title>
    )

}

export default index

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
        name: 'Chemestry 1st',
        slug: '/hsc/chemestry1',
    },
    {
        img: '/images/c2.png',
        name: 'Chemestry 2nd',
        slug: '/hsc/chemestry2',
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
        name: 'Chemestry',
        slug: '/ssc/chemestry',
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