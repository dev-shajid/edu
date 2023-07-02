'use client'

import React from 'react'
import NextNProgress from "nextjs-progressbar";

export default function NextProgress() {
    return (
        <NextNProgress
            color="#7659ff"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
            spinner={false}
            showOnShallow={false}
        />
    )
}
