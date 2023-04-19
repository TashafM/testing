import React, { useRef } from "react";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import TextInput from "../../../../components/Input/TextInput";
import "./styles.scss";
import { Formik, Form } from "formik";
import { usePatchAsyncReponse } from "../../../../hooks/usePatchAsyncReponse";
import { Offcanvas } from "react-bootstrap";
import DrawerHead from "./DrawerHead";
import { useState } from "react";
import { isValidUrl } from "../../../../components/Utils/Utils";
import schema from "../../../../helper/validation/schema";

function EditSocialMedia({ show, handleClose, data, onUpdate, completeData }) {
  const formRef = useRef();

  const [makeApiCall, setMakeApiCall] = useState(false);

  // const { openDrawer } = useContextProvider();

  // const data = openDrawer?.data ?? [];

  const [patchData, { loading }] = usePatchAsyncReponse(
    "/portalPatchCompanySocialMediaLinks"
  );

  const submitHandler = async (values, action) => {
    console.log("values", values, makeApiCall);
    const socialMediaLinks = [];
    if (makeApiCall) {
      Object.keys(values).map((key) => {
        if (values[key]) {
          socialMediaLinks.push({ type: key, socialMediaLink: values[key] });
        } else {
          socialMediaLinks.push({ type: key, socialMediaLink: "" });
        }
      });
      const body = {
        socialMediaLinks,
      };

      console.log({ body });

      patchData(body, (res) => {
        const arr = JSON.parse(JSON.stringify(completeData));
        arr[0].socialMediaDetails = res;
        console.log({ arr });
        onUpdate(arr);
        handleClose();
      });
    } else {
      handleClose();
    }
  };

  let initialValues = {
    instagram: "",
    facebook: "",
    twitter: "",
    website: "",
  };

  // if (data && data.length) {
  data.map((item) => {
    console.log(item);
    initialValues[item.type] = item.socialMediaLink;
  });

  console.log({ handleClose });
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      className="teamMember-add"
    >
      <div className="content">
        <DrawerHead
          title="Social Media & Links"
          handleClose={handleClose}
          description="Please provide the links to the social media accounts & website of
          the company"
        />

        <div>
          <p className="drawer-title"></p>
          <Formik
            initialValues={initialValues}
            innerRef={formRef}
            validationSchema={schema.social}
            onSubmit={submitHandler}
            render={({
              handleSubmit,
              errors,
              setErrors,
              values,
              setFieldValue,
              touched,
            }) => (
              <Form className="">
                <div className="input-wrapper">
                  <TextInput
                    name="instagram"
                    value={values.instagram}
                    onChange={(e) => {
                      !makeApiCall && setMakeApiCall(true);
                      if (isValidUrl(e.target.value)) {
                        setErrors({ ...errors, instagram: "enter valid url" });
                      }
                      setFieldValue("instagram", e.target.value);
                    }}
                    error={errors.instagram}
                    label="Instagram"
                    placeholder="eg. www.instagram.com/companyname"
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="facebook"
                    value={values.facebook}
                    onChange={(e) => {
                      !makeApiCall && setMakeApiCall(true);
                      setFieldValue("facebook", e.target.value);
                    }}
                    error={touched.facebook && errors.facebook}
                    label="Facebook"
                    placeholder="eg. www.facebook.com/companyname"
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="twitter"
                    value={values.twitter}
                    onChange={(e) => {
                      !makeApiCall && setMakeApiCall(true);
                      setFieldValue("twitter", e.target.value);
                    }}
                    error={touched.twitter && errors.twitter}
                    label="Twitter"
                    placeholder="eg. www.twitter.com/companyname"
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="website"
                    value={values.website}
                    onChange={(e) => {
                      !makeApiCall && setMakeApiCall(true);
                      setFieldValue("website", e.target.value);
                    }}
                    error={touched.website && errors.website}
                    label="Website"
                    placeholder="eg. www.companyname.com"
                  />
                </div>

                <BtnTitleCenter
                  type="submit"
                  loading={loading}
                  disabled={loading}
                  title={"Save"}
                />
              </Form>
            )}
          />
        </div>
      </div>
    </Offcanvas>
  );
  // }

  // return null;
}

export default EditSocialMedia;
