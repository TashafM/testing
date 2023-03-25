import React, { useEffect, useRef, useState } from "react";
import File from "../../../../components/Input/File";
import TextInput from "../../../../components/Input/TextInput";
import { Formik, Form } from "formik";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import usePostBrand from "../hooks/usePostBrand";
import { useContextProvider } from "../../../../context";
import useEditBrandPatch from "../hooks/useEditBrandPatch";
import { Offcanvas } from "react-bootstrap";

function AddBrand({ show, handleClose, title, data, onUpdate, completeData }) {
  const formRef = useRef();
  const [file, setFile] = useState([]);
  // const { openDrawer } = useContextProvider();

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
    console.log("values", values);
    const formData = new FormData();
    const userId = localStorage.getItem("usercode");

    formData.append("brandName", values.brandName);

    formData.append("username", values.username);
    formData.append("email", values.email);
    formData.append("brandLocation[state]", "");
    formData.append("brandLocation[city]", "");
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
      });
    } else {
      formData.append("companyUserCode", userId);

      formData.append("brandLogoURL", file[0]);
      postData(formData, (res) => {
        onUpdate(res);
        handleClose();
      });
    }

    action.reset();
  };

  const handleChange = (files) => {
    console.log(files);
    setFile(files);
  };

  const initialValues = {
    file: "",
    brandName: data?.brandName ?? "",
    location: "",
    username: data?.brandName ?? "",
    email: data?.email ?? "",
  };

  console.log({ initialValues });
  return (
    <Offcanvas
      show={show.open}
      onHide={handleClose}
      placement="end"
      className="teamMember-add"
    >
      <div className="content">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="team-member-add">{show.type} Brands</div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <p className="drawer-title">
              Write down the company’s sales reach, services & support and
              interested to purchase
            </p>
            <Formik
              initialValues={initialValues}
              innerRef={formRef}
              onSubmit={submitHandler}
              // validationSchema={schema.createBrand}
              render={({
                handleSubmit,
                errors,
                values,
                setFieldValue,
                touched,
              }) => (
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
                      onChange={(e) =>
                        setFieldValue("location", e.target.value)
                      }
                      error={touched.location && errors.location}
                      // placeholder="eg. Sales Team"
                      label="Location"
                    />
                  </div>
                  <div className="input-wrapper">
                    <TextInput
                      name="username"
                      value={values.username}
                      onChange={(e) =>
                        setFieldValue("username", e.target.value)
                      }
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

                  <BtnTitleCenter
                    type="submit"
                    title={"Send request"}
                    loading={loading | editLoading}
                  />
                </Form>
              )}
            />
          </div>
        </Offcanvas.Body>
      </div>
    </Offcanvas>
  );
}

export default AddBrand;
