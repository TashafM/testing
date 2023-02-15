import React from 'react'
import CardStatement from './CardStatement'
import './styles.scss'

function EditStatement() {
    return (
        <div>
            <p className='drawer-title'>
                Write down the statements of the company in to convey your
                vision to the potential customer
            </p>

            <CardStatement />
        </div>
    )
}

export default EditStatement
