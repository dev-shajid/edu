import React from 'react'
import Card from './Card'
import Cards from './Cards'
import Title from './Title'

const YoutubeList = () => {
    return (
        <>
            <div className='py-12'>
                <Title>Youtube Channals</Title>
                <Cards>
                    {
                        [1, 2, 3, 4, 5, 6].map((item, i) => (
                            <div key={i} className='xs:px-4 px-[5px]'>
                                <div key={i} className='m-auto max-w-xs'>
                                    <Card logo={'/images/appar.png'} name="Appar's Classroom" slug='/' />
                                </div>
                            </div>
                        ))
                    }
                </Cards>
            </div>
        </>
    )
}

export default YoutubeList