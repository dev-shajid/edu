import PageLoading from '@/components/PageLoading'
import Link from 'next/link'
import { Suspense } from 'react'

const YOUTUBE_LINK = 'https://www.googleapis.com/youtube/v3/playlistItems'

export const getPlaylist = async (params) => {
    const res = await fetch(`${YOUTUBE_LINK}?part=snippet&playlistId=${params.playListId}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`, {
        next: { revalidate: 10 }
    })
    const data = await res.json()
    return data
}

const Videos = async ({ params, searchParams }) => {
    const classId = params.id || 0

    const data = await getPlaylist(params, searchParams)

    console.log({ classId })

    return (
        <>
            <div className='flex lg:flex-row flex-col mt-2'>
                <Suspense fallback={<div className='w-full aspect-video lg:flex-[5] rounded-sm overflow-hidden bg-gray-300 animate-pulse'/>}>
                    <div className='video w-full aspect-video lg:flex-[5] rounded-sm overflow-hidden'>
                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${data.items[classId].snippet.resourceId.videoId}?autoplay=1`} title={'hello'} frameBorder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </Suspense>
                <div className='list border aspect-video bg-white border-gray-300 w-full lg:ml-4 lg:my-0 my-4 lg:flex-[2] flex-1 rounded-sm overflow-auto'>
                    {
                        data.items.map((course, i) => (
                            <Link key={i} href={`/${params.class}/${params.subject}/${params.chapter}/${params.playListId}/${i}`}>
                                <div className={`w-full p-2 flex my-2 cursor-pointer hover:bg-gray-200 ${classId == i && 'bg-gray-200'}`}>
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