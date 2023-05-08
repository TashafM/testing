import React, { useRef, useState } from "react";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import TextInput from "../../../../components/Input/TextInput";
import { Formik, Form } from "formik";
import schema from "../../../../helper/validation/schema";
import { usePatchAsyncReponse } from "../../../../hooks/usePatchAsyncReponse";
import { Offcanvas } from "react-bootstrap";
import "./styles.scss";
import DrawerHead from "./DrawerHead";
import { toast } from "react-toastify";
import { SUCCESS_MESSAGES } from "../../../../helper/messages";

function EditAddress({ show, handleClose, data, onUpdate, completeData }) {
  const formRef = useRef();
  const [makeApiCall, setMakeApiCall] = useState(false);

  const submitHandler = async (values) => {
    if (makeApiCall) {
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
        toast.success(SUCCESS_MESSAGES.EDIT_ADDRESS);
      });
    } else {
      handleClose();
    }
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
      <div className="content edit-address-wrap">
        <DrawerHead title="Edit Address" handleClose={handleClose} />
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
                    onChange={(e) => {
                      !makeApiCall && setMakeApiCall(true);
                      setFieldValue("fullName", e.target.value);
                    }}
                    required={true}
                    placeholder="Enter your full name"
                    label={"Full Name"}
                    error={touched.fullName && errors.fullName}
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="floorNumber"
                    value={values.floorNumber}
                    onChange={(e) => {
                      !makeApiCall && setMakeApiCall(true);
                      setFieldValue("floorNumber", e.target.value);
                    }}
                    required={true}
                    placeholder="House No.  / Building No. / Floor"
                    label={"House No.  / Building No. / Floor"}
                    error={touched.floorNumber && errors.floorNumber}
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="block"
                    value={values.block}
                    onChange={(e) => {
                      !makeApiCall && setMakeApiCall(true);
                      setFieldValue("block", e.target.value);
                    }}
                    placeholder="Enter your Area / block"
                    label={"Block (Optional)"}
                    error={touched.block && errors.block}
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="street"
                    value={values.street}
                    onChange={(e) => {
                      !makeApiCall && setMakeApiCall(true);
                      setFieldValue("street", e.target.value);
                    }}
                    placeholder="Enter your street"
                    required={true}
                    label={"Street"}
                    error={touched.street && errors.street}
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="city"
                    value={values.city}
                    onChange={(e) => {
                      !makeApiCall && setMakeApiCall(true);
                      setFieldValue("city", e.target.value);
                    }}
                    error={touched.city && errors.city}
                    placeholder="Enter your City"
                    required={true}
                    label={"City"}
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="state"
                    value={values.state}
                    onChange={(e) => {
                      !makeApiCall && setMakeApiCall(true);
                      setFieldValue("state", e.target.value);
                    }}
                    error={touched.state && errors.state}
                    placeholder="Enter your state"
                    required={true}
                    label={"State"}
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="country"
                    value={values.country}
                    onChange={(e) => {
                      !makeApiCall && setMakeApiCall(true);
                      setFieldValue("country", e.target.value);
                    }}
                    error={touched.country && errors.country}
                    placeholder="Enter your country"
                    required={true}
                    label={"Country"}
                  />
                </div>
                <div className="input-wrapper">
                  <TextInput
                    name="zipCode"
                    value={values.zipCode}
                    onChange={(e) => {
                      !makeApiCall && setMakeApiCall(true);
                      setFieldValue("zipCode", e.target.value);
                    }}
                    error={touched.zipCode && errors.zipCode}
                    placeholder="Enter your Zip Code"
                    required={true}
                    label={"Zip Code"}
                  />
                </div>
                {(touched.fullName && errors?.fullName) ||
                (touched.floorNumber && errors?.floorNumber) ||
                (touched.street && errors?.street) ||
                (touched.city && errors?.city) ||
                (touched.state && errors?.state) ||
                (touched.zipCode && errors?.zipCode) ||
                (touched.country && errors?.country) ? (
                  <p className="validation-error">
                    Error: Invalid input parameters. Please check your input and
                    try again.
                  </p>
                ) : null}
                <BtnTitleCenter
                  type="submit"
                  title={"Save"}
                  loading={loading}
                  disabled={loading}
                />
              </Form>
            )}
          />
        </div>
      </div>
    </Offcanvas>
  );
}

export default EditAddress;
