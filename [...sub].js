import { useRouter } from 'next/router'
import React from 'react'

const Subject = () => {
    const router = useRouter()

    if (router.query?.sub?.length == 1) {
        return (
            <div>
                Subject
            </div>
        )
    }

    if (router.query?.sub?.length == 2) {
        return (
            <div>
                Chapter
            </div>
        )
    }

    if (router.query?.sub?.length == 3) {
        return (
            <div>
                Videos
            </div>
        )
    }

    return (
        <div></div>
    )
}

export default Subject

const chapters = [
    {
        img:'',
        name: '',
        id: '',
        slug:''
    },
]

const contents = [
    {
        img:'',
        name: '',
        id: '',
        slug:''
    },
]

const notes = [
    {
        img:'',
        name: '',
        id: '',
        slug:''
    },
]