import React, { useEffect, useRef, useState } from "react";
import File from "../../../../components/Input/File";
import TextInput from "../../../../components/Input/TextInput";
import { Formik, Form } from "formik";
import schema from "../../../../helper/validation/schema";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import usePostBrand from "../hooks/usePostBrand";
import { useContextProvider } from "../../../../context";
import useEditBrandPatch from "../hooks/useEditBrandPatch";

function AddBrand() {
  const formRef = useRef();
  const [file, setFile] = useState([]);
  const { openDrawer } = useContextProvider();

  const { data, loading, postData } = usePostBrand("/portalAddCompanyBrands");
  const { loading: editLoading, postData: editBrnad } = useEditBrandPatch(
    "/portalEditCompayBrands"
  );

  useEffect(() => {
    if (openDrawer.type === "Edit Brands") {
      setFile([{ name: openDrawer.data.brandLogoURL }]);
    }
  }, []);

  const submitHandler = async (values, action) => {
    console.log("values", values);
    const formData = new FormData();
    // { brandId:"",  brandLogoURL:<file>,  brandName:"", brandLocation:{city:"", state:"", country:"", latitude:"", longitude:""}, username:"", email:"" }
    console.log({ file });
    const userId = localStorage.getItem("usercode");

    formData.append("brandName", values.brandName);

    formData.append("username", values.username);
    formData.append("email", values.email);
    formData.append("brandLocation[state]", "");
    formData.append("brandLocation[city]", "");
    formData.append("companyUserCode", userId);
    // formData.append(
    //   "brandLocation",
    //   JSON.stringify({
    //     city: "",
    //     state: "",
    //     country: "",
    //     latitude: "1222",
    //     longitude: "1235",
    //   })
    // );
    formData.append("brandLocation[latitude]", "");
    formData.append("brandLocation[longitude]", "");
    formData.append("brandLocation[country]", "");
    if (openDrawer.type === "Edit Brands") {
      // { brandId:"",  brandLogoURL:<file>,  brandName:"", brandLocation:{city:"", state:"", country:"", latitude:"", longitude:""}, username:"", email:"" }
      if (file.length && file[0]?.size) {
        formData.append("brandLogoURL", file[0]);
      } else {
        formData.append("brandLogoURL", "");
      }

      formData.append("brandId", openDrawer.data.brandId);

      editBrnad(formData);
    } else {
      formData.append("brandLogoURL", file[0]);
      postData(formData);
    }

    action.reset();
  };

  const handleChange = (files) => {
    console.log(files);
    setFile(files);
  };

  const initialValues = {
    file: "",
    brandName: openDrawer?.data?.brandName ?? "",
    location: "",
    username: openDrawer?.data?.brandName ?? "",
    email: openDrawer?.data?.email ?? "",
  };

  console.log({ initialValues });
  return (
    <div>
      <p className="drawer-title">
        Write down the company’s sales reach, services & support and interested
        to purchase
      </p>
      <Formik
        initialValues={initialValues}
        innerRef={formRef}
        onSubmit={submitHandler}
        // validationSchema={schema.createBrand}
        render={({ handleSubmit, errors, values, setFieldValue, touched }) => (
          <Form className="">
            <div className="input-wrapper">
              <File
                file={file}
                onChange={handleChange}
                label="Add Image"
                // error={touched.file && errors.file}
              />
            </div>
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
