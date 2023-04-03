import React, { useRef } from "react";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import TextInput from "../../../../components/Input/TextInput";
import { Formik, Form } from "formik";
import schema from "../../../../helper/validation/schema";
import { usePatchAsyncReponse } from "../../../../hooks/usePatchAsyncReponse";
import { Offcanvas } from "react-bootstrap";
import DrawerHead from "./DrawerHead";

function EditAddress({ show, handleClose, data, onUpdate, completeData }) {
  const formRef = useRef();

  const submitHandler = async (values) => {
    delete values.googlePlace;
    const body = {
      ...values,
      address: {
        city: "",
        state: "",
        country: "",
        latitude: "",
        longitude: "",
        fullAddress: "",
      },
    };
    patchData(body, (res) => {
      const arr = JSON.parse(JSON.stringify(completeData));
      arr[0].registeredAddress = { ...res[0] };
      onUpdate(arr);
      handleClose();
    });
  };

  const [patchData, { loading }] = usePatchAsyncReponse(
    "/portalPatchCompanyRegisteredAddress"
  );

  const initialValues = {
    fullName: data?.fullName ?? "",
    floorNumber: data?.floorNumber ?? "",
    block: data?.block ?? "",
    street: data?.street ?? "",
    city: data?.city ?? "",
    state: data?.state ?? "",
    zipCode: data?.zipCode ?? "",
    googlePlace: "",
    country: data.country ?? "",
  };

  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="end"
      className="teamMember-add"
    >
      <div className="content">
        <DrawerHead
          title="Other info"
          handleClose={handleClose}
          description="Add Address"
        />
        {/* <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="team-member-add">Add Address</div>
          </Offcanvas.Title>
        </Offcanvas.Header> */}
        {/* <Offcanvas.Body> */}
        <div>
          <Formik
            initialValues={{ ...initialValues }}
            innerRef={formRef}
            onSubmit={submitHandler}
            validationSchema={schema.address}
            render={({
              handleSubmit,
              errors,
              values,
              setFieldValue,
              touched,
            }) => (
              <Form className="">
                {console.log(errors)}
                <div className="input-wrapper">
                  <TextInput
                    name="fullName"
                    value={values.fullName}
                    onChange={(e) => setFieldValue("fullName", e.target.value)}
                    placeholder="Enter your full name"
                    label={"Full Name*"}
                    error={touched.fullName && errors.fullName}
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="officeName"
                    value={values.floorNumber}
                    onChange={(e) =>
                      setFieldValue("floorNumber", e.target.value)
                    }
                    placeholder="Enter your Floor Number / Block no / Office Name"
                    label={"Floor Number / Block no / Office Name*"}
                    error={touched.floorNumber && errors.floorNumber}
                  />
                </div>

                <div className="input-wrapper">
                  <TextInput
                    name="block"
                    value={values.block}
                    onChange={(e) => setFieldValue("block", e.target.value)}
                    placeholder="Enter your Area / block"
                    label={"Area / block*"}
                    error={touched.block && errors.block}
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="street"
                    value={values.street}
                    onChange={(e) => setFieldValue("street", e.target.value)}
                    placeholder="Enter your street / City"
                    label={"Block (optional)"}
                    error={touched.street && errors.street}
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="city"
                    value={values.city}
                    onChange={(e) => setFieldValue("city", e.target.value)}
                    error={touched.city && errors.city}
                    placeholder="Enter your City"
                    label={"City*"}
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="state"
                    value={values.state}
                    onChange={(e) => setFieldValue("state", e.target.value)}
                    error={touched.state && errors.state}
                    placeholder="Enter your state"
                    label={"State*"}
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="country"
                    value={values.country}
                    onChange={(e) => setFieldValue("country", e.target.value)}
                    error={touched.country && errors.country}
                    placeholder="Enter your country"
                    label={"Country*"}
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="zipCode"
                    value={values.zipCode}
                    onChange={(e) => setFieldValue("zipCode", e.target.value)}
                    error={touched.zipCode && errors.zipCode}
                    placeholder="Enter your Zip Code*"
                    label={"Zip Code*"}
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="Google Places Location"
                    value={values.googlePlace}
                    onChange={(e) =>
                      setFieldValue("Google Places Location", e.target.value)
                    }
                    error={touched.googlePlace && errors.googlePlace}
                    placeholder="Enter your Google Places Location"
                    label={"Google Places Location"}
                  />
                </div>
                <BtnTitleCenter
                  type="submit"
                  title={"SAVE"}
                  loading={loading}
                />
              </Form>
            )}
          />
        </div>
        {/* </Offcanvas.Body> */}
      </div>
    </Offcanvas>
  );
}

export default EditAddress;
