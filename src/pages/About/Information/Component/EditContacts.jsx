import React from 'react'
import BtnTitleCenter from '../../../../components/Button/BtnTitleCenter'
import TextInput from '../../../../components/Input/TextInput'
import './styles.scss'

function EditContacts() {
    return (
        <div>
            <p className='drawer-title'>
                Please provide the company’s email & contacts
            </p>
            <div className='input-wrapper'>
                <TextInput
                    value={''}
                    onChange={() => {}}
                    label='Title'
                    placeholder='eg. Sales Team'
                />
            </div>
            <div className='input-wrapper'>
                <TextInput
                    value={''}
                    onChange={() => {}}
                    label='Email ID'
                    placeholder='eg. salesteam@br.in'
                />
            </div>
            <div className='input-wrapper'>
                <TextInput
                    value={''}
                    onChange={() => {}}
                    label='Contact Number'
                    placeholder='eg. 8511591740'
                />
            </div>

            <BtnTitleCenter title={'SAVE'} onClick={() => {}} />
        </div>
    )
}

export default EditContacts
