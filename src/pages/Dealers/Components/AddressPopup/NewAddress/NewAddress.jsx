import React from "react";
import { Formik, Form, Field } from "formik";
import { newAddressField } from "../data";
import SimpleInput from "../../SimpleInput/SimpleInput";
import "./newaddress.scss";
import { Button } from "react-bootstrap";
import * as Yup from "yup";

const newAddressSchema = Yup.object().shape({
  fullname: Yup.string().required("Full Name is required"),
  contact: Yup.string().matches(/^[0-9+\-()]*$/, "Invalid phone number"),
  house: Yup.string().required("House/Buiding/Floor No. is required"),
  block: Yup.string(),
  street: Yup.string().required("Street is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  zipcode: Yup.string().required("Zip Code is required"),
  googleplaces: Yup.string(),
});

const NewAddress = ({ setAddress, editMode, setFreshAddress }) => {
  return (
    <Formik
      initialValues={{
        addressType: "shipping",
        ...newAddressField.reduce(
          (acc, curr) => ({ ...acc, [curr.name]: "", touched: false }),
          {}
        ),
      }}
      onSubmit={(values) => {
        console.log(values);
        setAddress(true);
        console.log("clicked submit");
        setFreshAddress(values)
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
