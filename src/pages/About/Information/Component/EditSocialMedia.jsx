import React, { useRef } from "react";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import TextInput from "../../../../components/Input/TextInput";
import "./styles.scss";
import { Formik, Form } from "formik";
import { usePatchAsyncReponse } from "../../../../hooks/usePatchAsyncReponse";
import { Offcanvas } from "react-bootstrap";
import DrawerHead from "./DrawerHead";

function EditSocialMedia({ show, handleClose, data, onUpdate, completeData }) {
  const formRef = useRef();

  // const { openDrawer } = useContextProvider();

  // const data = openDrawer?.data ?? [];

  const [patchData, { loading }] = usePatchAsyncReponse(
    "/portalPatchCompanySocialMediaLinks"
  );

  const submitHandler = async (values, action) => {
    console.log("values", values);
    const socialMediaLinks = [];

    Object.keys(values).map((key) => {
      if (values[key]) {
        socialMediaLinks.push({ type: key, socialMediaLink: values[key] });
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
            onSubmit={submitHandler}
            render={({
              handleSubmit,
              errors,
              values,
              setFieldValue,
              touched,
            }) => (
              <Form className="">
                <div className="input-wrapper">
                  <TextInput
                    name="instagram"
                    value={values.instagram}
                    onChange={(e) => setFieldValue("instagram", e.target.value)}
                    error={touched.instagram && errors.instagram}
                    label="Instagram"
                    placeholder="eg. www.instagram.com/companyname"
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="facebook"
                    value={values.facebook}
                    onChange={(e) => setFieldValue("facebook", e.target.value)}
                    error={touched.facebook && errors.facebook}
                    label="Facebook"
                    placeholder="eg. www.facebook.com/companyname"
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="twitter"
                    value={values.twitter}
                    onChange={(e) => setFieldValue("twitter", e.target.value)}
                    error={touched.twitter && errors.twitter}
                    label="Twitter"
                    placeholder="eg. www.twitter.com/companyname"
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="website"
                    value={values.website}
                    onChange={(e) => setFieldValue("website", e.target.value)}
                    error={touched.website && errors.website}
                    label="Website"
                    placeholder="eg. www.companyname.com"
                  />
                </div>

                <BtnTitleCenter
                  type="submit"
                  loading={loading}
                  title={"SAVE"}
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
