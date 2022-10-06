import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
// import Video from '../../../../components/Video'

const YOUTUBE_LINK = 'https://www.googleapis.com/youtube/v3/playlistItems'

export const getServerSideProps = async (ctx) => {
    const res = await fetch(`${YOUTUBE_LINK}?part=snippet&playlistId=${ctx.query.playListId}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`)
    const data = await res.json()
    return {
        props: { data }
    }
}

const Videos = ({ data }) => {
    const router = useRouter()
    const [classId, setClass] = useState(router.query.id || 0)

    return (
        <>
            <Head>
                <title>{data?.items[classId]?.snippet?.title}</title>
            </Head>
            <div className='video_container flex lg:flex-row flex-col mt-2'>
                <div className='video w-full aspect-video lg:flex-[5] rounded-sm overflow-hidden'>
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${data.items[classId].snippet.resourceId.videoId}?autoplay=1`} title={'hello'} frameBorder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    {/* <Video id={data.items[classId].snippet.resourceId.videoId}/> */}
                </div>
                <div className='list border bg-white border-gray-300 w-full lg:ml-4 lg:my-0 my-4 lg:flex-[2] flex-1 rounded-sm overflow-auto'>
                    {
                        data.items.map((course, i) => (
                            <Link key={i} href={`/${router.query.class}/${router.query.subject}/${router.query.chapter}/${router.query.playListId}?id=${i}`}>
                                <div onClick={() => setClass(i)} className={`w-full p-2 flex my-2 cursor-pointer hover:bg-gray-200 ${classId==i && 'bg-gray-200'}`}>
                                    <div className='lg:min-w-[100px] min-w-[120px] w-[120px] flex justify-center items-center overflow-hidden mr-4 aspect-video rounded'>
                                        <img src={course.snippet.thumbnails.high.url} className='acpect-video object-cover' />
                                    </div>
                                    <div>
                                        <p className='font-medium'>{course.snippet.title.split('').slice(0, 50).join('')}{course.snippet.title.split('').length > 50 && '...'}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Videos