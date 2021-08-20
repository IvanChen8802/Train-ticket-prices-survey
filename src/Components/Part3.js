import React, { useState }  from 'react'
import Part3Node from './Part3Node'
import RangeSlider from './RangeSlider'

export default function Part3({nextPage}) {

    const [pageIndex, setPageIndex] = useState(0)
    const [finalIndex, setFinalIndex] = useState(0)

    const innerNextPage = (ans) => {
        let nextPageIndex = 0
        let nextFinalIndex = 0
        
        if(pageIndex < 3){
            nextPageIndex = pageIndex * 2 + ans
        } else if (pageIndex !== 7){
            nextFinalIndex = pageIndex * 2 + ans - 7
            nextPageIndex = 7
        } else {
            nextPage()
        }
        
        setPageIndex(nextPageIndex)
        setFinalIndex(nextFinalIndex)
    }

    const pages = [
                <Part3Node 
                    originalPrice={1490}
                    addPrice={520}
                    nextPage={innerNextPage}
                />,
                <Part3Node 
                    originalPrice={1490}
                    addPrice={400}
                    nextPage={innerNextPage}
                />,
                <Part3Node 
                    originalPrice={1490}
                    addPrice={640}
                    nextPage={innerNextPage}
                />,
                <Part3Node 
                    originalPrice={1490}
                    addPrice={340}
                    nextPage={innerNextPage}
                />,
                <Part3Node 
                    originalPrice={1490}
                    addPrice={460}
                    nextPage={innerNextPage}
                />,
                <Part3Node 
                    originalPrice={1490}
                    addPrice={575}
                    nextPage={innerNextPage}
                />,
                <Part3Node 
                    originalPrice={1490}
                    addPrice={705}
                    nextPage={innerNextPage}
                />,
                <RangeSlider 
                    finalIndex={finalIndex}
                    nextPage={innerNextPage}
                />
            ]

    return (
        pages[pageIndex]
    )
}