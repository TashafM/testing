import React from 'react'
import quote from '../../../../assets/images/quote.png'
import deleteIcon from '../../../../assets/images/delete.png'
import edit from '../../../../assets/images/edit-icon.png'
import BtnIconOnly from '../../../../components/Button/BtnIconOnly'

function CardStatement() {
    return (
        <div className='card-statement-cont'>
            <div className='d-flex justify-content-between statement-head'>
                <image src={quote} alt='icon quote' />
                <div className='d-flex '>
                    <div className='icon-delete'>
                        <BtnIconOnly
                            icon={deleteIcon}
                            onClick={() => {
                                console.log('delete click')
                            }}
                        />
                    </div>

                    <BtnIconOnly
                        icon={edit}
                        onClick={() => {
                            console.log('delete click')
                        }}
                    />
                </div>
            </div>
            <div className='statement-title'>
                eg. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam,
            </div>
        </div>
    )
}

export default CardStatement
