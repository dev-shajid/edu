import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Title from '../../../../components/Title'

const YOUTUBE_LINK = 'https://www.googleapis.com/youtube/v3/playlistItems'
const YOUTUBE_PLAYLIST_ID = 'PLubWB9tWo5lVAdd2bXEW3Tgn99tcxzDbt'

export const getServerSideProps = async () => {
    const res = await fetch(`${YOUTUBE_LINK}?part=snippet&playlistId=${YOUTUBE_PLAYLIST_ID}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`)
    const data = await res.json()
    return {
        props: {
            data,
            content: {
                total: data.items.length,
                thumb: data.items[0].snippet.thumbnails.high.url,
            }
        }
    }
}

const Video = ({ data, content }) => {
    const router = useRouter()
    // console.log(router.query);
    // console.log(content);

    const [id, setId] = useState('')
    const [con, setCon] = useState({ total: null, thumb: '' })

    const handleClick = async (e) => {
        e.preventDefault()
        const res = await fetch(`${YOUTUBE_LINK}?part=snippet&playlistId=${id}&maxResults=50&key=AIzaSyDdDXDjUrRH7hqkR285glv6a_i02KRGFNk`)
        const data = await res.json()
        console.log(data);
        if(res.status==200){
            setCon({ total: data.items?.length, thumb: data.items[0]?.snippet.thumbnails.standard.url })
        }else{
            setCon()
        }
    }

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

                        <div>
                            <input
                                type='text'
                                placeholder='Search...'
                                className='m-2 p-2 rounded w-[80%]'
                                onChange={(e) => setId(e.target.value)}
                            />
                            <button onClick={handleClick} className='bg-red-400 p-2 rounded cursor-pointer'>Submit</button>
                        </div>
                        {con?.total ?
                            <>
                                <Title>Total: {con.total}</Title>
                                <div className='w-full text-center text-5xl font-semibold p-4' >
                                    <img src={con.thumb} alt="Thumbnail" className='aspect-video object-cover' />
                                </div>
                            </> :
                            <div>Error: Not a valid ID</div>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Video

// AIzaSyDdDXDjUrRH7hqkR285glv6a_i02KRGFNk