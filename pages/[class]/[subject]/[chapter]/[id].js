import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const YOUTUBE_LINK = 'https://www.googleapis.com/youtube/v3/playlistItems'
const YOUTUBE_PLAYLIST_ID = 'PLBuk2RmBnZ5V3izX2Bcdia_Nqnq6EjFy-'

export const getServerSideProps = async () => {
    const res = await fetch(`${YOUTUBE_LINK}?part=snippet&playlistId=${YOUTUBE_PLAYLIST_ID}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`)
    const data = await res.json()
    console.log(data);
    return {
        props: {
            data
        }
    }
}

const Video = ({ data }) => {
    const router = useRouter()
    // console.log(router.query);
    console.log(data.items[0]);
    return (
        <>
            <Head>
                <title>{data.items[0].snippet.title}</title>
            </Head>
            <div className='grid video_container'>
                <div className='video w-full aspect-video rounded-sm overflow-hidden'>
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${data.items[0].snippet.resourceId.videoId}`} title={'hello'} frameBorder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className='list w-full min-h-[300px] md:pl-4 md:mt-0 mt-4'>
                    <div className='bg-indigo-400 w-full h-full rounded-sm'>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Video

// AIzaSyDdDXDjUrRH7hqkR285glv6a_i02KRGFNk