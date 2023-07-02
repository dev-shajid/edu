import { Card, Cards, Title } from '@/components/Basic'
import Link from 'next/link'
import React from 'react'

async function getCourses(params) {
    const res = await fetch(`${SERVER}/api/course?class=${params.class}&subject=${params.subject}&chapter=${params.chapter}`, {
        next: { revalidate: 10 },
    })
    const data = await res.json()
    return data
}

export default async function page({ params }) {
    const courses = await getCourses(params)
    const basic = courses.filter(e => e.category == 'Basic')
    const advanced = courses.filter(e => e.category == 'Advanced')
    const admissioin = courses.filter(e => e.category == 'Admissioin')

    if (!courses.length) return <Title>Didn't get any Course</Title>

    return (
        <div className='md:space-y-12 space-y-8 md:my-8 my-4'>
            {basic[0] && <CoursesCards title={'Basic'} courses={basic} params={params} />}
            {advanced[0] && <CoursesCards title={'Advanced'} courses={advanced} params={params} />}
            {admissioin[0] && <CoursesCards title={'Admissioin'} courses={admissioin} params={params} />}
        </div>
    )
}

const CoursesCards = ({ title, courses, params }) => {
    return (
        <div>
            {/* <div className='flex items-center justify-center'> */}
            <Title>{title}</Title>
            {/* </div> */}
            <Cards thumb={true}>
                {
                    courses?.map((course, i) => (
                        <div key={i} className='xs:px-4 px-[5px]'>
                            <div key={i} className='m-auto h-full'>
                                <Link href={`/${params.class}/${params.subject}/${params.chapter}/${course.playlistId}/0`}>
                                    <Card
                                        thumb={course.image}
                                        name={course.name}
                                        total={course.total}
                                    />
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </Cards>
        </div>
    )
}


// export const SERVER = "http://localhost:4000"
export const SERVER = "https://edu-admin-api.vercel.app/"