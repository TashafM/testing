import React from 'react'
import BtnTitleCenter from '../../../../components/Button/BtnTitleCenter'
import TextInput from '../../../../components/Input/TextInput'
import './styles.scss'

function EditSocialMedia() {
    return (
        <div>
            <p className='drawer-title'>
                Please provide the links to the social media accounts & website
                of the company
            </p>

            <div className='input-wrapper'>
                <TextInput
                    value={''}
                    onChange={() => {}}
                    label='Instagram'
                    placeholder='eg. www.instagram.com/companyname'
                />
            </div>
            <div className='input-wrapper'>
                <TextInput
                    value={''}
                    onChange={() => {}}
                    label='Facebook'
                    placeholder='eg. www.facebook.com/companyname'
                />
            </div>
            <div className='input-wrapper'>
                <TextInput
                    value={''}
                    onChange={() => {}}
                    label='Twitter'
                    placeholder='eg. www.twitter.com/companyname'
                />
            </div>
            <div className='input-wrapper'>
                <TextInput
                    value={''}
                    onChange={() => {}}
                    label='Website'
                    placeholder='eg. www.companyname.com'
                />
            </div>

            <BtnTitleCenter
                title={'SAVE'}
                onClick={() => {
                    console.log('save buttonclick')
                }}
            />
        </div>
    )
}

export default EditSocialMedia
