import React from "react";
import { Formik, Form, Field } from "formik";
import { newAddressField } from "../data";
import SimpleInput from "../../SimpleInput/SimpleInput";
import "./newaddress.scss";
import { Button } from "react-bootstrap";
import * as Yup from "yup";

const newAddressSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  contactNumber: Yup.string().matches(/^[0-9+\-()]*$/, "Invalid phone number"),
  floorNumber: Yup.string().required("House/Buiding/Floor No. is required"),
  block: Yup.string(),
  street: Yup.string().required("Street is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  zipCode: Yup.number().required("Zip Code is required"),
  googleplaces: Yup.string(),
});

const NewAddress = ({
  setAddress,
  editMode,
  setShipping,
  setBilling,
  billingAddress,
  shippingAddress,
}) => {
  console.log(billingAddress, "billing array");
  console.log(shippingAddress, "shipping array");

  return (
    <Formik
      initialValues={{
        addressType: "shipping",
        ...newAddressField.reduce(
          (acc, curr) => ({ ...acc, [curr.name]: "", selected: false }),
          {}
        ),
      }}
      onSubmit={(values) => {
        console.log(values);
        setAddress(true);
        console.log("clicked submit");

        if (values.addressType == "shipping") {
          const blankAddress = {
            city: "",
            country: "",
            fullAddress: "",
            latitude: "",
            longitude: "",
            state: "",
          };
          const { googleplaces, addressType, ...restdata } = values;
          console.log("executed");
          const shippingArray = [
            ...shippingAddress,
            { ...restdata, ...{ address: blankAddress } },
          ];
          console.log(shippingArray);
          setShipping(shippingArray);
        } else {
          const blankAddress = {
            city: "",
            country: "",
            fullAddress: "",
            latitude: "",
            longitude: "",
            state: "",
          };
          const { googleplaces, addressType, ...restdata } = values;
          console.log("executed");
          const billingArray = [
            ...billingAddress,
            { ...restdata, ...{ address: blankAddress } },
          ];
          console.log(billingArray);
          setBilling(billingArray);
        }
      }}
      validationSchema={newAddressSchema}
    >
      {/* {({ handleChange, values }) => ( */}
      {({ handleChange, values, errors, touched }) => (
        <Form className="new-address">
          {editMode ? null : (
            <>
              <div className="shipping-billing">This address is :</div>
              <div className="radio-div">
                <div className="shipping">
                  <Field
                    type="radio"
                    name="addressType"
                    id="shipping"
                    value="shipping"
                  />
                  <label htmlFor="shipping">Shipping address</label>
                </div>
                <div className="billing">
                  <Field
                    type="radio"
                    name="addressType"
                    id="billing"
                    value="billing"
                  />
                  <label htmlFor="billing">Billing address</label>
                </div>
              </div>
            </>
          )}

          {newAddressField.map((item) => (
            <SimpleInput
              key={item.name}
              title={item.title}
              placeholder={item.placeholderText}
              value={values[item.name]}
              onChange={handleChange}
              name={item.name}
              error={touched[item.name] && errors[item.name]} // display error if field has been touched and has an error message
            />
          ))}

          <div className="button-div">
            <Button className="save-btn" type="submit">
              Save
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NewAddress;
