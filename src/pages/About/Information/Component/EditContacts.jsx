import React, { useRef } from "react";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import TextInput from "../../../../components/Input/TextInput";
import "./styles.scss";
import { Formik, Form } from "formik";
import PhoneNumber from "../../../../components/Input/PhoneNumber";
import TextArea from "../../../../components/Input/TextArea";
import schema from "../../../../helper/validation/schema";
import { usePostAsyncResponse } from "../../../../hooks/usePostAsyncResponse";
import { useContextProvider } from "../../../../context";
import { usePatchAsyncReponse } from "../../../../hooks/usePatchAsyncReponse";
import { useState } from "react";

function EditContacts() {
  const formRef = useRef();
  const { openDrawer, setOpenDrawer } = useContextProvider();
  const [makeApiCall, setMakeApiCall] = useState(false);

  const data = openDrawer.data;

  const submitHandler = async (values, action) => {
    console.log("values", openDrawer.type);
    if (makeApiCall) {
      if (openDrawer.type === "Edit Contact") {
        const contactUsId = data._id;
        delete values.address;
        delete data._id;

        const body = {
          ...data,
          ...values,
          contactUsId,
        };

        pathcData(body, (res) => {
          console.log({ res });
          try {
            const d = JSON.parse(JSON.stringify(openDrawer.completeData));
            d[0].contactUs[openDrawer.index] = { ...res[0] };
            openDrawer.callback(d);
          } catch (error) {
            console.log(error);
          }

          setOpenDrawer({
            open: false,
            type: "",
          });
        });
      } else {
        const body = {
          ...values,
          address: {
            city: "Banglore",
            state: "Karnataka",
            latitude: "1293.123",
            longitude: "12.345678",
            country: "India",
            fullAddress: "asdas",
          },
        };

        postData(body, (res) => {
          console.log({ res });
          const d = JSON.parse(JSON.stringify(openDrawer.completeData));
          d[0].contactUs.push(res[0]);

          console.log({ d });
          openDrawer.callback(d);
          setOpenDrawer({
            open: false,
            type: "",
          });
        });
      }
    } else {
      setOpenDrawer({
        open: false,
        type: "",
      });
    }

    // if (values.contact.match(/^\+?[0-9]\d{1,20}$/)) {

    // }
  };

  const [postData, { loading }] = usePostAsyncResponse(
    "/portalPostCompanyContactUsDetails"
  );

  const [pathcData, { loading: editLoading }] = usePatchAsyncReponse(
    "/portalPatchCompanyContactUsDetails"
  );
  return (
    <div>
      <p className="drawer-title">
        Please provide the company’s email & contacts
      </p>
      <Formik
        initialValues={{
          email: data.email,
          title: data.title,
          contact: data.contact,
          address: "",
        }}
        innerRef={formRef}
        onSubmit={submitHandler}
        validationSchema={schema.contacts}
        render={({ handleSubmit, errors, values, setFieldValue, touched }) => (
          <Form className="">
            <div className="input-wrapper">
              <TextInput
                name="title"
                value={values.title}
                onChange={(e) => {
                  !makeApiCall && setMakeApiCall(true);
                  setFieldValue("title", e.target.value);
                }}
                error={touched.title && errors.title}
                placeholder="eg. Sales Team"
                label="Title *"
              />
            </div>

            <div className="input-wrapper ">
              <TextInput
                name="contact"
                value={values.contact}
                onChange={(e) => {
                  const reg = new RegExp("^[0-9]*$");
                  !makeApiCall && setMakeApiCall(true);

                  // if (e.target.value.match(reg) || e.target.value === "+") {
                  setFieldValue("contact", e.target.value);
                  // }
                }}
                error={touched.contact && errors.contact}
                label="Contact Number *"
                placeholder="eg. 8511591740"
              />
              {/* <PhoneNumber
                name="contact"
                value={values.contact}
                onChange={(e) => setFieldValue("contact", e)}
                error={touched.contact && errors.contact}
                label="Contact Number *"
                placeholder="eg. 8511591740"
              /> */}
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
                label="Email ID *"
                placeholder="eg. salesteam@br.in"
              />
            </div>

            <div className="container-text-area">
              <TextArea
                label="Address"
                name="address"
                value={values.address}
                onChange={(e) => {
                  !makeApiCall && setMakeApiCall(true);
                  console.log(e);
                  setFieldValue("address", e.target.value);
                }}
                rows={4}
                error={touched.address && errors.address}
                placeholder="eg. Floor Number, building, area, nearest landmark, 
                city, pin code."
              />
            </div>

            <BtnTitleCenter
              loading={loading || editLoading}
              type="submit"
              title={"Save"}
            />
          </Form>
        )}
      />
    </div>
  );
}

export default EditContacts;
