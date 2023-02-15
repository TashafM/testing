import React from 'react'
import './Button.scss'

function BtnIconOnly({icon, onClick = () => {}}) {
    return (
        <div className='icon-button'>
            <button className='edit-icon' onClick={onClick}>
                <img src={icon} alt='iconed button' />
            </button>
        </div>
    )
}

export default BtnIconOnly
