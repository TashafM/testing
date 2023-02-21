import React from 'react'
import './Button.scss'

function BtnTitleCenter({title, onClick = () => {},type}) {
    return (
        <div>
            <button type={type} className='btn-title-center' onClick={onClick}>
                {title}
            </button>
        </div>
    )
}

export default BtnTitleCenter
