import React from 'react'
import './Input.scss'

function TextArea({value, onChange}) {
    return (
        <textarea
            className='text-area-cont'
            onChange={(e) => onChange(e)}
            rows='4'
            cols='50'>
            {value}
        </textarea>
    )
}

export default TextArea
