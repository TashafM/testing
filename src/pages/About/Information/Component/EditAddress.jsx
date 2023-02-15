import React from 'react'
import BtnTitleCenter from '../../../../components/Button/BtnTitleCenter'
import TextInput from '../../../../components/Input/TextInput'

function EditAddress() {
    return (
        <div>
            <div className='input-wrapper'>
                <TextInput
                    value={''}
                    onChange={() => {}}
                    placeholder='Floor Number / Block no / Office Name'
                />
            </div>

            <div className='input-wrapper'>
                <TextInput
                    value={''}
                    onChange={() => {}}
                    placeholder='Area / Locality'
                />
            </div>
            <div className='input-wrapper'>
                <TextInput
                    value={''}
                    onChange={() => {}}
                    placeholder='Nearest Landmark'
                />
            </div>
            <div className='input-wrapper'>
                <TextInput
                    value={''}
                    onChange={() => {}}
                    placeholder='Town / City'
                />
            </div>
            <div className='input-wrapper'>
                <TextInput value={''} onChange={() => {}} placeholder='City' />
            </div>
            <div className='input-wrapper'>
                <TextInput
                    value={''}
                    onChange={() => {}}
                    placeholder='Pincode'
                />
            </div>

            <BtnTitleCenter title={'SAVE'} onClick={() => {}} />
        </div>
    )
}

export default EditAddress
