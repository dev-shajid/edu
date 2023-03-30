import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Card from '../../../../components/Card'
import Cards from '../../../../components/Cards'
import Title from '../../../../components/Title'

export const SERVER = "https://shajid-edu.vercel.app"
// export const SERVER = "http://localhost:3000"

const Chapter = ({data}) => {
  const router = useRouter()
  const [courses, setCourses] = useState({basic: data.filter(e=>e.category=='Basic'), advanced: data.filter(e=>e.category=='Advanced'), admission: data.filter(e=>e.category=='Admission'), })
  // console.log(router);
  return (
    <>
      <Head>
        <title>Chapter-{router.query.chapter}</title>
      </Head>
      {/* Basic */}
      {courses.basic[0] && <div className=''>
        <Title>Basic</Title>
        <Cards thumb={true}>
          {
            courses?.basic?.map((course, i) => (
              <div key={i} className='xs:px-4 px-[5px]'>
                <div key={i} className='m-auto h-full'>
                  <Card
                    thumb={course.image}
                    name={course.name}
                    total={course.total}
                    slug={`/${router.query.class}/${router.query.subject}/${router.query.chapter}/${course.playlistId}?id=0`}
                  />
                </div>
              </div>
            ))
          }
        </Cards>
      </div>}
      {/* Advanced */}
      {courses.advanced[0] && <div className='mt-12'>
        <Title>Advanced</Title>
        <Cards thumb={true}>
          {
            courses?.advanced?.map((course, i) => (
              <div key={i} className='xs:px-4 px-[5px]'>
                <div key={i} className='m-auto h-full'>
                  <Card
                    thumb={course.image}
                    name={course.name}
                    total={course.total}
                    slug={`/${router.query.class}/${router.query.subject}/${router.query.chapter}/${course.playlistId}?id=0`}
                  />
                </div>
              </div>
            ))
          }
        </Cards>
      </div>}
      {/* Admission */}
      {courses.admission[0] && <div className='mt-12'>
        <Title>Admission</Title>
        <Cards thumb={true}>
          {
            courses?.admission?.map((course, i) => (
              <div key={i} className='xs:px-4 px-[5px]'>
                <div key={i} className='m-auto h-full'>
                  <Card
                    thumb={course.image}
                    name={course.name}
                    total={course.total}
                    slug={`/${router.query.class}/${router.query.subject}/${router.query.chapter}/${course.playlistId}?id=0`}
                  />
                </div>
              </div>
            ))
          }
        </Cards>
      </div>}
      {/* No Course */}
      {!courses.basic[0] && !courses.advanced[0] && !courses.admission[0] && 
      <div className=''>
        <Title>No Course is Found ! 🙁</Title>
      </div>}
    </>
  )
}

export default Chapter

export const getServerSideProps = async (ctx) => {
  const res = await fetch(`${SERVER}/api/course?class=${ctx.query.class}&subject=${ctx.query.subject}&chapter=${ctx.query.chapter}`)
  const data = await res.json()
  console.log({res});

  return {
    props: { data: data.message }
  }
} 