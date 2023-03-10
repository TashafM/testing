import React from 'react'
import './Button.scss'

function BtnTitleCenter({title, onClick = () => {},type,smallbutton}) {
    let newstyle = smallbutton ? 'btnsmall':'btn-title-center'

    return (
        <div>
            <button type={type} className={newstyle} onClick={onClick}>
                {title}
            </button>
        </div>
    )
}

export default BtnTitleCenter
