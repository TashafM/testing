import React, {useState} from 'react'

function Switch() {
    const [first, setfirst] = useState(false)
    return (
        <div>
            <label class='switch'>
                <input
                    type='checkbox'
                    checked={first}
                    onChange={() => {
                        setfirst(!first)
                    }}
                />
                <span class='slider round'></span>
            </label>
        </div>
    )
}

export default Switch
