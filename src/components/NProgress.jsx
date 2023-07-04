'use client'

import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import NProgress from 'nprogress';
import "nprogress/nprogress.css";

export default function NProgress2() {
    const path = usePathname()

    NProgress.configure({ easing: 'ease', speed: 300, showSpinner: false });

    const [prevLoc, setPrevLoc] = useState("")

    useEffect(() => {
        setPrevLoc(path)
        NProgress.start()
        if (path != prevLoc) {
            setPrevLoc(path)
        }
        return ()=> NProgress.done()
    }, [path])

    useEffect(() => {
        NProgress.done()
    }, [prevLoc])

    return (
        <>

        </>
    )
}
