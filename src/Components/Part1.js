import React from 'react'

export default function Part1({nextPage}) {
    return (
        <div>
            <h1>Part1 Dunny page</h1>
            <div className="footer">
                <div 
                    className="button"
                    onClick={nextPage}
                >
                    下一頁
                </div>
            </div>
        </div>
    )
}
