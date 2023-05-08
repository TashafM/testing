import React, { useEffect, useRef, useState } from "react";
import File from "../../../../components/Input/File";
import TextInput from "../../../../components/Input/TextInput";
import { Formik, Form } from "formik";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import usePostBrand from "../hooks/usePostBrand";
import useEditBrandPatch from "../hooks/useEditBrandPatch";
import { Offcanvas } from "react-bootstrap";
import DrawerHead from "../../Information/Component/DrawerHead";
import schema from "../../../../helper/validation/schema";
import { toast } from "react-toastify";
import { SUCCESS_MESSAGES } from "../../../../helper/messages";

function AddBrand({ show, handleClose, title, data, onUpdate, completeData }) {
  const formRef = useRef();
  const [file, setFile] = useState([]);
  const [makeApiCall, setMakeApiCall] = useState(false);
  const [fileError, setFileError] = useState("");

  const { postData, loading } = usePostBrand("/portalAddCompanyBrands");
  const { postData: editBrnad, loading: editLoading } = useEditBrandPatch(
    "/portalEditCompanyBrands"
  );

  useEffect(() => {
    if (show.type === "Edit") {
      setFile([{ name: data.brandLogoURL }]);
    }
  }, [data?.brandLogoURL, data, show.type]);

  const submitHandler = async (values, action) => {
    if (file && file.length) {
      if (makeApiCall) {
        const formData = new FormData();
        const userId = localStorage.getItem("usercode");

        formData.append("brandName", values.brandName);

        formData.append("username", values.username);
        formData.append("email", values.email);
        formData.append("brandLocation[state]", "");
        formData.append("brandLocation[city]", values.location);
        formData.append("brandLocation[latitude]", "");
        formData.append("brandLocation[longitude]", "");
        formData.append("brandLocation[country]", "");
        if (show.type === "Edit") {
          if (file.length && file[0]?.name !== data.brandLogoURL) {
            // alert(222);
            formData.append("brandLogoURL", file[0]);
          }

          formData.append("brandId", data.brandId);

          editBrnad(formData, (res) => {
            onUpdate(res);
            handleClose();
            toast.success(SUCCESS_MESSAGES.BRAND_EDIT);
          });
        } else {
          formData.append("companyUserCode", userId);

          formData.append("brandLogoURL", file[0]);
          postData(formData, (res) => {
            onUpdate(res);
            handleClose();
            toast.success(SUCCESS_MESSAGES.BRAND_ADD);
          });
        }

        action.reset();
      } else {
        handleClose();
      }
    } else {
      setFileError("file is required");
    }
  };

  const handleChange = (files) => {
    !makeApiCall && setMakeApiCall(true);
    if (files.length) {
      setFileError("");
    }

    setFile(files);
  };

  const handleError = (e) => {
    console.log(e);
    setFileError("max file size allowed is 10MB");
  };

  const initialValues = {
    file: "",
    brandName: data?.brandName ?? "",
    location: data?.brandLocation?.city,
    username: data?.username ?? "",
    email: data?.email ?? "",
  };

  console.log({ file }, fileError);
  return (
    <Offcanvas
      show={show.open}
      onHide={handleClose}
      placement="end"
      className="teamMember-add"
    >
      <div className="content">
        <DrawerHead
          title={show.type === "Edit" ? "Edit details" : `${show.type} Brands`}
          handleClose={handleClose}
          description="Please fill these following details to add your brand."
        />
        <div>
          <Formik
            initialValues={initialValues}
            innerRef={formRef}
            onSubmit={submitHandler}
            validationSchema={schema.createBrand}
            render={({ errors, values, setFieldValue, touched }) => (
              <Form className="">
                <div className="input-wrapper">
                  <File
                    file={file}
                    onChange={handleChange}
                    handleError={handleError}
                    label="Add Image"
                    required={true}
                    setFile={setFile}
                    // error={touched.file && errors.file}
                  />
                  {fileError && <p style={{ color: "red" }}>{fileError}</p>}
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="brandName"
                    value={values.brandName}
                    onChange={(e) => {
                      !makeApiCall && setMakeApiCall(true);
                      setFieldValue("brandName", e.target.value);
                    }}
                    required={true}
                    error={touched.brandName && errors.brandName}
                    label="Brand Name"
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="location"
                    value={values.location}
                    onChange={(e) => {
                      !makeApiCall && setMakeApiCall(true);
                      setFieldValue("location", e.target.value);
                    }}
                    error={touched.location && errors.location}
                    required={true}
                    label="Location"
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="username"
                    value={values.username}
                    onChange={(e) => {
                      !makeApiCall && setMakeApiCall(true);
                      setFieldValue("username", e.target.value);
                    }}
                    error={touched.username && errors.username}
                    label="Username"
                  />
                  <p className="tagging-text m-0">For tagging purpose</p>
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="email"
                    value={values.email}
                    onChange={(e) => {
                      !makeApiCall && setMakeApiCall(true);
                      setFieldValue("email", e.target.value);
                    }}
                    error={touched.email && errors.email}
                    label="Email ID"
                  />
                  <p className="tagging-text m-0">For tagging purpose</p>
                </div>

                {(touched.brandName && errors?.brandName) ||
                (touched.location && errors?.location) ? (
                  <p className="validation-error">
                    Error: Invalid input parameters. Please check your input and
                    try again.
                  </p>
                ) : null}
                <BtnTitleCenter
                  type="submit"
                  title={"Save"}
                  disabled={show.type === "Edit" ? editLoading : loading}
                  loading={show.type === "Edit" ? editLoading : loading}
                />
              </Form>
            )}
          />
        </div>
      </div>
    </Offcanvas>
  );
}

export default AddBrand;
