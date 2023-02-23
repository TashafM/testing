import React from 'react'
import {NavItem} from 'react-bootstrap'
import {useLocation, useNavigate} from 'react-router-dom'
import './Tabs.scss'

function UnderLineTabs({tabs}) {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div className='col tabs-change'>
            {tabs.map((item, index) => {
                return (
                    <div className='tab-cont ' key={item.link}>
                        <div
                            className={
                                location.pathname === item.link
                                    ? 'tab'
                                    : 'tab title-indicator'
                            }
                            onClick={() => navigate(item.link)}>
                            {item.title}
                        </div>
                        <div
                            className={
                                location.pathname === item.link
                                    ? 'tab-indicator'
                                    : ''
                            }></div>
                    </div>
                )
            })}
        </div>
    )
}

export default UnderLineTabs
