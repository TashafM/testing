import React,{useRef} from 'react'
import BtnTitleCenter from '../../../../components/Button/BtnTitleCenter'
import TextInput from '../../../../components/Input/TextInput'
import './styles.scss'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';


function EditContacts() {

    const formRef = useRef();

    const submitHandler = async (values, action) => {
        console.log("values",values)
    }


    const validate = Yup.object({
        email: Yup.string().required('email is requird'),
        title: Yup.string().required('title is required'),
        contactNumber: Yup.number().required('contact number is required'),

      });
    return (
        <div>
            <p className='drawer-title'>
                Please provide the company’s email & contacts
            </p>
            <Formik
            initialValues={{
                email: '',
                title: '',
                contactNumber:''

            }}
            innerRef={formRef}
            onSubmit={submitHandler}
            validationSchema={validate}
            render={({ handleSubmit, errors, values, setFieldValue,touched }) => (
              <Form className="">
            <div className='input-wrapper'>
                <TextInput
                 name='title'
                 value={values.title}
                 onChange={(e) => setFieldValue('title', e.target.value)}
                 error={touched.title && errors.title}
                 placeholder='eg. Sales Team'
                label='Title'

                />
            </div>
            <div className='input-wrapper'>
                <TextInput
                    name='email'
                    value={values.email}
                    onChange={(e) => setFieldValue('email', e.target.value)}
                    error={touched.email && errors.email}
                    label='Email ID'
                    placeholder='eg. salesteam@br.in'
                />
            </div>
            <div className='input-wrapper'>
                <TextInput
                    name='contactNumber'
                    value={values.contactNumber}
                    onChange={(e) => setFieldValue('contactNumber', e.target.value)}
                    error={touched.contactNumber && errors.contactNumber}
                    label='Contact Number'
                    placeholder='eg. 8511591740'
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

export default EditContacts
