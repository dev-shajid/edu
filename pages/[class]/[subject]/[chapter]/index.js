import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Card from '../../../../components/Card'
import Cards from '../../../../components/Cards'
import Title from '../../../../components/Title'

const Chapter = () => {
  const router = useRouter()
  
  return (
    <>
      <Head>
        <title>Physics 1st</title>
      </Head>
      {/* <h1 className='text-3xl text-center font-semibold'>{router.query.class} -- {router.query.subject} -- Chapter {router.query.chapter}</h1> */}
      <div className='sm:pt-8 pt-4'>
        <Title>Choos your Favorite One</Title>
        <Cards thumb={true}>
          {
            [1, 2, 3, 4, 5, 6].map((item, i) => (
              <div key={i} className='xs:px-4 px-[5px]'>
                <div key={i} className='m-auto h-full'>
                  <Card
                    thumb={"https://i.ytimg.com/vi/CNNkrvV_JaM/sddefault.jpg"}
                    name={"Appar's Classroom"}
                    total={'19'}
                    slug={`/${router.query.class}/${router.query.subject}/${router.query.chapter}/${'PLubWB9tWo5lVAdd2bXEW3Tgn99tcxzDbt'}`}
                  />
                </div>
              </div>
            ))
          }
        </Cards>
      </div>
    </>
  )
}

export default Chapter

const contents = {
  class: "hsc",
  subject: "physics1",
  chapter: "2",
  playListId: 'vlbsSEt4NyA',
  thumb: '',
  total: '',
}