import React, { useRef } from "react";
import File from "../../../../components/Input/File";
import TextInput from "../../../../components/Input/TextInput";
import { Formik, Form } from "formik";
import schema from "../../../../helper/validation/schema";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";

function AddBrand() {
  const formRef = useRef();

  const submitHandler = async (values, action) => {
    console.log("values", values);
  };

  return (
    <div>
      <p className="drawer-title">
        Write down the company’s sales reach, services & support and interested
        to purchase
      </p>
      <Formik
        initialValues={{
          file: "",
          brandName: "",
          location: "",
          username: "",
          email: "",
        }}
        innerRef={formRef}
        onSubmit={submitHandler}
        validationSchema={schema.createBrand}
        render={({ handleSubmit, errors, values, setFieldValue, touched }) => (
          <Form className="">
            <File
              value={values.file}
              onChange={() => {}}
              label="Add Image"
              error={touched.file && errors.file}
            />
            <div className="input-wrapper">
              <TextInput
                name="brandName"
                value={values.brandName}
                onChange={(e) => setFieldValue("brandName", e.target.value)}
                error={touched.brandName && errors.brandName}
                label="Brand Name"
              />
            </div>
            <div className="input-wrapper">
              <TextInput
                name="Location"
                value={values.location}
                onChange={(e) => setFieldValue("location", e.target.value)}
                error={touched.location && errors.location}
                // placeholder="eg. Sales Team"
                label="Location"
              />
            </div>
            <div className="input-wrapper">
              <TextInput
                name="username"
                value={values.username}
                onChange={(e) => setFieldValue("username", e.target.value)}
                error={touched.username && errors.username}
                // placeholder="eg. Sales Team"
                label="Username"
              />
            </div>
            <div className="input-wrapper">
              <TextInput
                name="email"
                value={values.email}
                onChange={(e) => setFieldValue("email", e.target.value)}
                error={touched.email && errors.email}
                label="Email ID"
              />
            </div>

            <BtnTitleCenter type="submit" title={"Send request"} />
          </Form>
        )}
      />
    </div>
  );
}

export default AddBrand;
