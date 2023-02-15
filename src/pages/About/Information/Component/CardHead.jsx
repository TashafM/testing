import React from 'react'
import '../Information.scss'
import edit from '../../../../assets/images/edit-icon.png'
import BtnIconOnly from '../../../../components/Button/BtnIconOnly'
import {useContextProvider} from '../../../../context'

function CardHead({icon, title, onClick}) {
    const {setOpenDrawer} = useContextProvider()

    return (
        <div className='d-flex card-head'>
            <img src={icon} alt='contact-icon' />
            <div className='wrapper-title'>
                <span className='cont-title'>{title}</span>
                <BtnIconOnly
                    icon={edit}
                    onClick={() => {
                        setOpenDrawer({
                            open: true,
                            type: title,
                        })
                    }}
                />
            </div>
        </div>
    )
}

export default CardHead
