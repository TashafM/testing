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
  editData,
  defaultShipping,
}) => {
  return (
    <Formik
      initialValues={
        editMode
          ? editData
          : {
              addressType: "shipping",
              ...newAddressField.reduce(
                (acc, curr) => ({ ...acc, [curr.name]: "", selected: false }),
                {}
              ),
            }
      }
      onSubmit={(values) => {
        setAddress(true);
        if (values.addressType == "shipping") {
          console.log('if block')
          const blankAddress = {
            city: "",
            country: "",
            fullAddress: "",
            latitude: "",
            longitude: "",
            state: "",
          };
          const { googleplaces,addressType, ...restdata } = values;
          const currentDate = new Date();
          const id = currentDate.getTime().toString();
          const shippingArray = [
            ...shippingAddress,
            { ...restdata, ...{ address: blankAddress }, _id: id, type: 'shipping'},
          ];
          console.log(shippingArray);
          setShipping(shippingArray);
        } else if (values.addressType == "billing") {
          console.log('else block')
          const blankAddress = {
            city: "",
            country: "",
            fullAddress: "",
            latitude: "",
            longitude: "",
            state: "",
          };
          const { googleplaces,addressType, ...restdata } = values;
          const currentDate = new Date();
          const id = currentDate.getTime().toString();
          console.log("executed");
          const billingArray = [
            ...billingAddress,
            { ...restdata, ...{ address: blankAddress }, _id: id, type: 'billing' },
          ];
          console.log(billingArray);
          setBilling(billingArray);
        }else{

          console.log(values,'--------------------------------------')
            if(values.type=='shipping'){
              console.log(values,'shippin values')
              const updated = shippingAddress.map((item)=>{
                if(item._id== values._id){
                  return {...item, ...values};
                }
                return item
              })
              setShipping(updated)
            }else if(values.type=='billing'){
              console.log(values,'billin values')
              const updated = billingAddress.map((item)=>{
                if(item._id== values._id){
                  return {...item, ...values};
                }
                return item
              })
              setBilling(updated)
            }
          

            if(shippingAddress){
              const updated = shippingAddress.map((item)=>{
                if(item._id== values._id){
                  return {...item, ...values};
                }
                return item
              })
              console.log(updated,'jjjjjjjjjjjjjjjjjj', values._id,'kkkkkkkkkkkkkkk')
            }

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
          {newAddressField.map((item,id) => (
            <SimpleInput
              key={id}
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
