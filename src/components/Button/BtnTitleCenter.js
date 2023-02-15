import React from 'react'
import './Button.scss'

function BtnTitleCenter({title, onClick = () => {}}) {
    return (
        <div>
            <button className='btn-title-center' onClick={onClick}>
                {title}
            </button>
        </div>
    )
}

export default BtnTitleCenter
