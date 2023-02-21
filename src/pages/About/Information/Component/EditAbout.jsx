import React, { useState, useRef } from "react";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import TextArea from "../../../../components/Input/TextArea";
import "./styles.scss";
import { Formik, Form } from "formik";
import * as Yup from "yup";

function EditAbout() {
  const formRef = useRef();

  const submitHandler = async (values, action) => {
    console.log("values", values);
  };

  const validate = Yup.object({
    about: Yup.string().required("requird"),
  });
  return (
    <div>
      <Formik
        initialValues={{
          about:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ",
        }}
        innerRef={formRef}
        onSubmit={submitHandler}
        validationSchema={validate}
        render={({ handleSubmit, errors, values, setFieldValue, touched }) => (
          <Form className="">
            <div className="container-text-area">
              <TextArea
                name="about"
                value={values.about}
                onChange={(e) => setFieldValue("about", e.target.value)}
                error={touched.about && errors.about}
                placeholder="About"
              />
              <span></span>
            </div>

            <BtnTitleCenter type="submit" title={"Save"} />
          </Form>
        )}
      />
    </div>
  );
}

export default EditAbout;
