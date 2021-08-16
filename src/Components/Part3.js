import React from 'react'

export default function Part3({originalPrice, addPrice, nextPage}) {

    const handleOnClick = (ans) => () => {
        nextPage(ans)
    }
    
    // JSX
    return (
        <div className="container">
            <div className="box">
                {/** comment */}
                <div className="header">第三部分：詢價金額</div>
                <div className="body">
                    <div className="title">目前票價：{originalPrice}</div>
                    <div className="content">+{addPrice}<br></br><span>={originalPrice + addPrice}</span></div>
                </div>
                <div className="footer">
                    <div 
                        className="button"
                        onClick={handleOnClick(1)}
                    >
                        NO
                    </div>
                    <div 
                        className="button"
                        onClick={handleOnClick(2)}
                    >
                        YES
                    </div>
                </div>
            </div>
        </div>
    )
}
