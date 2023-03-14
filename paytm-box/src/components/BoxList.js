import React from 'react'
import './BoxList.css'

function BoxList({ boxList, onChange }) {

    const renderedList = boxList.map(({ id, isGreen }) => {
        return <div key={id} id={id} className={isGreen ? "box green" : "box"} onClick={() => onChange(id)}></div>
    })

    return (
        <>
            {renderedList}
        </>
    )
}

export default BoxList
