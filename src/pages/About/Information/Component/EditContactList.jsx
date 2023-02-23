import React from 'react'
import CardHead from './CardHead'
import contact from '../../../../assets/images/contact.png'
import email from '../../../../assets/images/email.png'
import phone from '../../../../assets/images/phone.png'
import './styles.scss'

function EditContactList() {
    return (
        <div className='card-cont'>
            <CardHead title='Contact' icon={contact} />
            <div className='d-flex cont-email-cont'>
                <img src={email} alt='email-icon' />
                <span className='cont-email'>demo@elred.com</span>
            </div>
            <div className='d-flex '>
                <img src={phone} alt='cont-phone-icon' />
                <span className='cont-email cont-phone'>876465366567</span>
            </div>
        </div>
    )
}

export default EditContactList
