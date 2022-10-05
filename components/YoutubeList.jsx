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
                        lists.map((item, i) => (
                            <div key={i} className='xs:px-4 px-[5px]'>
                                <div key={i} className='m-auto max-w-xs h-full'>
                                    <Card logo={item.logo} name={item.name} slug='/' />
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

const lists = [
    {
        logo:'/images/appar.png',
        name: "Appar's Classroom",
    },
    {
        logo:'https://yt3.ggpht.com/AwvyTEBWGypzc0VgA7PqiGOIy_MpjSam0nBDq07WFwlKqU73trX87FTUBdHD5iHpWU8Rg-7ix2Q=s176-c-k-c0x00ffffff-no-rj',
        name: 'OnnoRokom Pathshala',
    },
    {
        logo:'https://yt3.ggpht.com/ytc/AMLnZu9lniOBMLLND5DYl-jemISTXa1oVf1Lah1IQcM1AA=s176-c-k-c0x00ffffff-no-rj',
        name: "Amader School ",
    },
    {
        logo:'https://yt3.ggpht.com/ytc/AMLnZu8j-NAES_bUvUq4-XK8aXdB9z0_s0hRMs-53zm12A=s176-c-k-c0x00ffffff-no-rj',
        name: "ROOTs Edu",
    },
    {
        logo:'https://yt3.ggpht.com/2TReXqliNZc4u4bvBAyxvhdAlieFh8dXgYUvPfWbpBKllyA4A_g_xmVWQN7cETfGI0b2mDHd29s=s176-c-k-c0x00ffffff-no-rj',
        name: "বন্দি পাঠশালা",
    },
    {
        logo:'https://yt3.ggpht.com/ytc/AMLnZu9OVcs2DK9U5UXq7p4K4W010qQ8XLeIuGrU5StlNw=s176-c-k-c0x00ffffff-no-rj',
        name: "Athena Science Academy",
    },
]