import React from 'react'
import Part3 from './Part3'
import RangeSlider from './RangeSlider'
import { useState } from 'react'


export default function Main() {

    const [pageIndex, setPageIndex] = useState(0)
    const [finalIndex, setFinalIndex] = useState(0)

    const nextPage = (ans) => {
        if(pageIndex<3){
            setPageIndex(pageIndex * 2 + ans)
        }
        else{
            setFinalIndex(pageIndex* 2 + ans - 7) 
            setPageIndex(7)
        }
        
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
                <RangeSlider 
                    finalIndex={finalIndex}
                />
            ]

    return (
        pages[pageIndex]
    )
}