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
      <h1 className='text-3xl text-center font-semibold'>{router.query.class} -- {router.query.subject} -- Chapter {router.query.chapter}</h1>
      <div className='py-12'>
        <Title>Choos your Favorite One</Title>
        <Cards>
          {
            [1, 2, 3, 4, 5, 6].map((item, i) => (
              <div key={i} className='xs:px-4 px-[5px]'>
                <div key={i} className='m-auto'>
                  <Card
                    thumb="https://i.ytimg.com/vi/5Xy-t8k_M4A/maxresdefault.jpg"
                    name={"Appar's Classroom"}
                    slug={`/${router.query.class}/${router.query.subject}/${router.query.chapter}/5Xy-t8k_M4A`}
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