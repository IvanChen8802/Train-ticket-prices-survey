import React from 'react'
import Part3 from './Part3'
import { useState } from 'react'


export default function Main() {
    const [data, setData] = useState({
        originalPrice: 1490,
        addPrice: 520,
        prices: {
            520: [400 ,640],
            400: [340, 460],
            640: [575, 705]
        },
        yn: []
    })

    const [pageIndex, setPageIndex] = useState(0)

    const nextPage = (ans) => {
        setPageIndex(pageIndex * 2 + ans)
    }

    const pages = [
                <Part3 
                    originalPrice={1490}
                    addPrice={520}
                    nextPage={nextPage}
                />,
                <Part3 
                    originalPrice={1490}
                    addPrice={400}
                    nextPage={nextPage}
                />,
                <Part3 
                    originalPrice={1490}
                    addPrice={640}
                    nextPage={nextPage}
                />,
                <Part3 
                    originalPrice={1490}
                    addPrice={340}
                    nextPage={nextPage}
                />,
                <Part3 
                    originalPrice={1490}
                    addPrice={460}
                    nextPage={nextPage}
                />,
                <Part3 
                    originalPrice={1490}
                    addPrice={575}
                    nextPage={nextPage}
                />,
                <Part3 
                    originalPrice={1490}
                    addPrice={705}
                    nextPage={nextPage}
                />,
            ]

    return (
        pages[pageIndex]
    )
}
