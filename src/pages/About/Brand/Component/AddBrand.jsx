import React, { useRef, useState } from "react";
import File from "../../../../components/Input/File";
import TextInput from "../../../../components/Input/TextInput";
import { Formik, Form } from "formik";
import schema from "../../../../helper/validation/schema";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import usePostBrand from "../hooks/usePostBrand";

function AddBrand() {
  const formRef = useRef();
  const [file, setFile] = useState([]);

  const { data, loading, postData } = usePostBrand("/portalEditCompayBrands");

  const submitHandler = async (values, action) => {
    console.log("values", values);
    const formData = new FormData();
    // { brandId:"",  brandLogoURL:<file>,  brandName:"", brandLocation:{city:"", state:"", country:"", latitude:"", longitude:""}, username:"", email:"" }
    formData.append("brandName", values.brandName);
    formData.append("username", values.username);
    formData.append("email", values.email);
    formData.append("brandLogoURL", file);
    formData.append("brandId", "");
    formData.append("brandLocation[state]", "");
    formData.append("brandLocation[city]", "");
    formData.append("companyUserCode", "64134ed79a2fde15a4f93691");
    formData.append("brandLocation[latitude]", "");
    formData.append("brandLocation[longitude]", "");
    formData.append("brandLocation[country]", "");

    postData(formData);
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
        // validationSchema={schema.createBrand}
        render={({ handleSubmit, errors, values, setFieldValue, touched }) => (
          <Form className="">
            <File
              value={file}
              onChange={(e) => {
                setFile(e.target.value);
              }}
              label="Add Image"
              error={touched.file && errors.file}
            />
            <div className="input-wrapper">
              <TextInput
                name="brandName"
                value={values.brandName}
                onChange={(e) => {
                  console.log(e.target.value);
                  setFieldValue("brandName", e.target.value);
                }}
                error={touched.brandName && errors.brandName}
                label="Brand Name"
              />
            </div>
            <div className="input-wrapper">
              <TextInput
                name="location"
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
