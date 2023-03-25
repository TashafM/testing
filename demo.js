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
import { Offcanvas } from "react-bootstrap";

function EditContacts({
  show,
  handleClose,
  data,
  title,
  onUpdate,
  completeData,
}) {
  const formRef = useRef();

  const submitHandler = async (values, action) => {
    console.log("values", values);

    if (title === "Edit Contact") {
      const contactUsId = data._id;
      delete values.address;
      delete data._id;

      const body = {
        ...data,
        ...values,
        contactUsId,
      };
      pathcData(body);
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

      postData(body, onUpdate);
    }
  };

  const [postData, { loading }] = usePostAsyncResponse(
    "/portalPostCompanyContactUsDetails"
  );

  const [pathcData, { loading: editLoading }] = usePatchAsyncReponse(
    "/portalPatchCompanyContactUsDetails"
  );
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      className="teamMember-add"
    >
      <div className="content">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="team-member-add">{title}</div>
          </Offcanvas.Title>
        </Offcanvas.Header>
      </div>
      <Offcanvas.Body>
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
                    name="title"
                    value={values.title}
                    onChange={(e) => setFieldValue("title", e.target.value)}
                    error={touched.title && errors.title}
                    placeholder="eg. Sales Team"
                    label="Title"
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="email"
                    value={values.email}
                    onChange={(e) => setFieldValue("email", e.target.value)}
                    error={touched.email && errors.email}
                    label="Email ID"
                    placeholder="eg. salesteam@br.in"
                  />
                </div>
                <div className="input-wrapper">
                  <PhoneNumber
                    name="contact"
                    value={values.contact}
                    onChange={(e) => setFieldValue("contact", e)}
                    error={touched.contact && errors.contact}
                    label="Contact Number"
                    placeholder="eg. 8511591740"
                  />
                </div>

                <div className="container-text-area">
                  <TextArea
                    label="Address"
                    name="address"
                    value={values.address}
                    onChange={(e) => {
                      console.log(e);
                      setFieldValue("address", e.target.value);
                    }}
                    error={touched.address && errors.address}
                    placeholder="eg. Floor Number, building, area, nearest landmark, 
                city, pin code."
                  />
                </div>

                <BtnTitleCenter
                  loading={loading}
                  type="submit"
                  title={"SAVE"}
                />
              </Form>
            )}
          />
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default EditContacts;
