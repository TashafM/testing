import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import contact from '../../../assets/images/contact.png'
import email from '../../../assets/images/email.png'
import phone from '../../../assets/images/phone.png'
import location from '../../../assets/images/location.png'
import links from '../../../assets/images/links.png'
import quote from '../../../assets/images/quote.png'
import business from '../../../assets/images/business.png'

import './Information.scss'
import CardHead from './Component/CardHead'
import {useContextProvider} from '../../../context'

function Information() {
    return (
        <Container fluid>
            <Row className='info-container'>
                <Col className='card-wrapper' xs={4}>
                    <div className='card-cont'>
                        <CardHead title='Contact' icon={contact} />
                        <div className='d-flex email-cont'>
                            <img src={email} alt='email-icon' />
                            <span className='email'>demo@elred.com</span>
                        </div>
                        <div className='d-flex'>
                            <img src={phone} alt='phone-icon' />
                            <span className='email phone'>876465366567</span>
                        </div>
                    </div>
                </Col>
                <Col className='card-wrapper' xs={4}>
                    <div className='card-cont'>
                        <CardHead title='Address' icon={location} />
                        <div>
                            <span className='email margin-text'>
                                C-1 / 351 / 4 , GIDC Makarpura, Vadodara –
                                390010, Gujarat, India.
                            </span>
                        </div>
                    </div>
                </Col>
                <Col className='card-wrapper' style={{marginRight: 0}} xs={4}>
                    <div className='card-cont'>
                        <CardHead title='Hours of operations' icon={business} />
                        <div>
                            <span className='email margin-text'>
                                Monday To Friday - 09:00 Am to 06: 00 Pm
                            </span>
                        </div>
                    </div>
                </Col>
                <Col className='card-wrapper' xs={4}>
                    <div className='card-cont'>
                        <CardHead title='Social Media & Links' icon={links} />
                    </div>
                </Col>
                <Col className='card-wrapper' xs={4}>
                    <div className='card-cont'>
                        <CardHead title='Statement' icon={quote} />
                        <div>
                            <span className='email margin-text'>
                                You think it we ink it.
                            </span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Information
