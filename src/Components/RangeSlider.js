import React from 'react'
import { useState } from 'react'

export default function RangeSlider({finalIndex}){
    
    const finalPriceRange = [
        [0+1490,339+1490],
        [340+1490,399+1490],
        [400+1490,459+1490],
        [460+1490,519+1490],
        [520+1490,574+1490],
        [575+1490,639+1490],
        [640+1490,704+1490],
        [705+1490,1000+1490]
    ]
    
    const [val,setVal]=useState(parseInt((finalPriceRange[finalIndex][0] + finalPriceRange[finalIndex][1]) / 2 , 10))
    const updateVal = e => {
        setVal(parseInt(e.target.value,10))
    }
       
    return (        
        <div className="container">
                {/** comment */}
                <div className="header">第三部分：詢價金額</div>
                <div className="title">您的選擇區間為:{finalPriceRange[finalIndex][0]}~{finalPriceRange[finalIndex][1]}<br></br>請選擇您認為合理的金額</div>
                <div class="slidecontainer">
                <input type="range" min={finalPriceRange[finalIndex][0]} max={finalPriceRange[finalIndex][1]} value={val} onChange={updateVal} class="slider" id="myRange"/>
                <div>{val}</div>
                </div> 
                <div className="sendbutton">完成送出</div>                
        </div>
        )
}
