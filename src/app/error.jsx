'use client' // Error components must be Client Components

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({ error, reset, }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className='flex flex-col items-center mt-40'>
            <div className='text-3xl font-semibold'>Something went wrong!</div>
            <Link className='bg-gray-300 border border-gray-400 rounded-md px-6 py-2 mt-4' href='/'>Go to Home</Link>
        </div>
    )
}