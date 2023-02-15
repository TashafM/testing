import React from 'react'

function TextInput({value, onChange, label, placeholder, error = ''}) {
    return (
        <div>
            {label ? <p className='input-lable'>{label}</p> : null}
            <input
                className='input-container'
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            <p>{error}</p>
        </div>
    )
}

export default TextInput
