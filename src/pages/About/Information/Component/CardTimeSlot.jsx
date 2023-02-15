import React from 'react'
import Switch from '../../../../components/Input/Switch'

function CardTimeSlot({title, active}) {
    return (
        <div className='card-slots-container align-items-center justify-content-between'>
            <span className='card-day'>{title}</span>
            <div className='d-flex align-items-center'>
                <span className='card-day title-active'>Active</span>
                <Switch />
            </div>
        </div>
    )
}

export default CardTimeSlot
