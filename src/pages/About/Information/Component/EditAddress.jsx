import React, { useRef } from 'react'
import BtnTitleCenter from '../../../../components/Button/BtnTitleCenter'
import TextInput from '../../../../components/Input/TextInput'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

function EditAddress() {
    const formRef = useRef();

    const submitHandler = async (values, action) => {
        console.log("values", values)
    }


    const validate = Yup.object({
        officeName: Yup.string().required('office name is required'),
        locality: Yup.string().required('location is rquire'),
        nearestLandmark: Yup.string().required('nearest landmark is required'),
        town: Yup.string().required('town is  required'),
        city: Yup.string().required('city is required'),
        pincode: Yup.string().required('pincode is required'),
    });
    return (
        <div>
            <Formik
                initialValues={{
                    officeName: '',
                    locality: '',
                    nearestLandmark: '',
                    town: '',
                    city: '',
                    pincode: ''

                }}
                innerRef={formRef}
                onSubmit={submitHandler}
                validationSchema={validate}
                render={({ handleSubmit, errors, values, setFieldValue, touched }) => (
                    <Form className="">
                        {console.log(errors)}
                        <div className='input-wrapper'>
                            <TextInput
                                name='officeName'
                                value={values.officeName}
                                onChange={(e) => setFieldValue('officeName', e.target.value)}
                                placeholder='Floor Number / Block no / Office Name'
                                error={touched.officeName && errors.officeName}
                            />
                        </div>

                        <div className='input-wrapper'>
                            <TextInput
                                name='locality'
                                value={values.locality}
                                onChange={(e) => setFieldValue('locality', e.target.value)}
                                placeholder='Area / Locality'
                                error={touched.locality && errors.locality}
                            />
                        </div>
                        <div className='input-wrapper'>
                            <TextInput
                                name='nearestLandmark'
                                value={values.nearestLandmark}
                                onChange={(e) => setFieldValue('nearestLandmark', e.target.value)}
                                placeholder='Nearest Landmark'
                                error={touched.nearestLandmark && errors.nearestLandmark}
                            />
                        </div>
                        <div className='input-wrapper'>
                            <TextInput
                                name='town'
                                value={values.town}
                                onChange={(e) => setFieldValue('town', e.target.value)}
                                placeholder='Town / City'
                                error={touched.town && errors.town}
                            />
                        </div>
                        <div className='input-wrapper'>
                            <TextInput
                                name='city'
                                value={values.city}
                                onChange={(e) => setFieldValue('city', e.target.value)}
                                error={touched.city && errors.city}
                                placeholder='City' />
                        </div>
                        <div className='input-wrapper'>
                            <TextInput
                                name='pincode'
                                value={values.pincode}
                                onChange={(e) => setFieldValue('pincode', e.target.value)}
                                error={touched.pincode && errors.pincode}
                                placeholder='Pincode'
                            />
                        </div>

                        <BtnTitleCenter
                            type='submit'
                            title={'SAVE'}
                        />

                    </Form>
                )}
            />
        </div>
    )
}

export default EditAddress
