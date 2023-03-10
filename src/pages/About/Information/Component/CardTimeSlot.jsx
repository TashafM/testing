import React from 'react'
import { Badge } from 'react-bootstrap'
import Switch from '../../../../components/Input/Switch'

function CardTimeSlot({title, active}) {
    return (
        <div className='card-slots-container align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
            <Switch />
            <span className='card-day cardspace'>{title}</span>
            </div>


            <div className='d-flex align-items-center'>
            <Badge bg="light"  className='p-3 mr-2 ml-3 text-black'>9.00 AM</Badge>
            <span >To</span>
            <Badge bg="light" className='p-3 mr-2 ml-3 text-black'>5.00 AM</Badge>
            </div>
        </div>
    )
}

export default CardTimeSlot
