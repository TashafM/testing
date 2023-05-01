import React, { useRef } from "react";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import TextInput from "../../../../components/Input/TextInput";
import "./styles.scss";
import { Formik, Form } from "formik";
import TextArea from "../../../../components/Input/TextArea";
import schema from "../../../../helper/validation/schema";
import { usePostAsyncResponse } from "../../../../hooks/usePostAsyncResponse";
import { useContextProvider } from "../../../../context";
import { usePatchAsyncReponse } from "../../../../hooks/usePatchAsyncReponse";
import { useState } from "react";
import { toast } from "react-toastify";
import { SUCCESS_MESSAGES } from "../../../../helper/messages";

function EditContacts() {
  const formRef = useRef();
  const { openDrawer, setOpenDrawer } = useContextProvider();
  const [makeApiCall, setMakeApiCall] = useState(false);

  const data = openDrawer.data;

  const submitHandler = async (values, action) => {
    console.log("values", data);
    if (makeApiCall) {
      if (openDrawer.type === "Edit Contact") {
        const contactUsId = data._id;
        const d = Object.assign({}, data);
        // const address = values.address;
        // delete values.address;
        delete d._id;

        const body = {
          ...d,
          contact: values.contact,
          email: values.email,
          title: values.title,
          address: {
            ...d.address,
            city: values.address,
          },
          contactUsId,
        };

        pathcData(body, (res) => {
          console.log({ res }, openDrawer.callback(d));
          try {
            const d = JSON.parse(JSON.stringify(openDrawer.completeData));
            d[0].contactUs[openDrawer.index] = { ...res[0] };
            openDrawer.callback(d);

            setOpenDrawer({
              type: "Contacts",
              title: "Contacts",
              open: true,
              data: d[0].contactUs,
              callback: openDrawer.callback,
              completeData: d,
            });
          } catch (error) {
            console.log(error);
          }
          toast.success(SUCCESS_MESSAGES.EDIT_CONTACT);
        });
      } else {
        const body = {
          ...values,
          address: {
            city: values.address,
            state: "Karnataka",
            latitude: "12.123",
            longitude: "12.123",
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
            type: "Contacts",
            title: "Contacts",
            open: true,
            data: d[0].contactUs,
            callback: openDrawer.callback,
            completeData: d,
          });

          toast.success(SUCCESS_MESSAGES.CONTACT);
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
          address: data?.address?.city,
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
                  // const reg = new RegExp("^[0-9]*$");
                  !makeApiCall && setMakeApiCall(true);

                  // if (e.target.value.match(reg) || e.target.value === "+") {
                  setFieldValue("contact", e.target.value);
                  // }
                }}
                error={touched.contact && errors.contact}
                label="Contact Number *"
                placeholder="eg. 8511591740"
              />
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
            {errors?.address ||
            errors?.email ||
            errors?.contact ||
            errors?.title ? (
              <p className="validation-error">
                Error: Invalid input parameters. Please check your input and try
                again.
              </p>
            ) : null}
            <BtnTitleCenter
              loading={loading || editLoading}
              disabled={loading || editLoading}
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
