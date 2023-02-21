import React from 'react'
import './Input.scss'

function TextArea({value, onChange,name,error}) {
    return (
        <>
        <textarea
        name={name}
            className='text-area-cont'
            onChange={(e) => onChange(e)}
            rows='4'
            cols='50'>
            {value}
        </textarea>
         <p style={{color:'red'}}>{error}</p>
         </>
    )
}

export default TextArea
