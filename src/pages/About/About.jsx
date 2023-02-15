import React, {useState} from 'react'
import {Outlet} from 'react-router-dom'
import UnderLineTabs from '../../components/Tabs/UnderLineTabs'
import './About.scss'
import {AboutTabs} from './data/data'

import Description from './Description/Description'

function About() {
    const [selectedTab, selectTab] = useState(1)
    return (
        <div className='about-wrapper'>
            <Description />
            <UnderLineTabs tabs={AboutTabs} />
            <div className='tabs-container-section'>
                <Outlet />
            </div>
        </div>
    )
}

export default About
