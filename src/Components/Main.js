import React from 'react'
import Part3 from './Part3'
import Part1 from './Part1'
import { useState } from 'react'

export default function Main() {
    const [pageIndex, setPageIndex] = useState(0)

    const nextPage = () => {
        setPageIndex(pageIndex + 1)
    }

    const pages = [
        <Part1 
            nextPage={nextPage}
        />,
        <Part3 
            nextPage={nextPage}
        />
    ]
    return (
        pages[pageIndex]
    )
}