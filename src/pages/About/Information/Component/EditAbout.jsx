import React, {useState} from 'react'
import BtnTitleCenter from '../../../../components/Button/BtnTitleCenter'
import TextArea from '../../../../components/Input/TextArea'
import './styles.scss'

function EditAbout() {
    const [aboutText, setAboutText] = useState(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ',
    )
    return (
        <div>
            <div className='container-text-area'>
                <TextArea
                    value={aboutText}
                    onChange={(e) => {
                        console.log(e.target.value)
                        // setAboutText(e.target)
                    }}
                />
            </div>

            <BtnTitleCenter title={'Save'} />
        </div>
    )
}

export default EditAbout
