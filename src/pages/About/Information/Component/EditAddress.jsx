import React, { useRef } from "react";
import BtnTitleCenter from "../../../../components/Button/BtnTitleCenter";
import TextInput from "../../../../components/Input/TextInput";
import { Formik, Form } from "formik";
import schema from "../../../../helper/validation/schema";

function EditAddress() {
  const formRef = useRef();

  const submitHandler = async (values, action) => {
    console.log("values", values);
  };

  return (
    <div>
      <Formik
        initialValues={{
          fullname: "",
          officeName: "",
          locality: "",
          town: "",
          city: "",
          pincode: "",
          googlePlace: "",
          country: "",
        }}
        innerRef={formRef}
        onSubmit={submitHandler}
        validationSchema={schema.address}
        render={({ handleSubmit, errors, values, setFieldValue, touched }) => (
          <Form className="">
            {console.log(errors)}
            <div className="input-wrapper">
              <TextInput
                name="fullname"
                value={values.fullname}
                onChange={(e) => setFieldValue("fullname", e.target.value)}
                placeholder="Enter your full name"
                label={"Full Name*"}
                error={touched.fullname && errors.fullname}
              />
            </div>
            <div className="input-wrapper">
              <TextInput
                name="officeName"
                value={values.officeName}
                onChange={(e) => setFieldValue("officeName", e.target.value)}
                placeholder="Enter your Floor Number / Block no / Office Name"
                label={"Floor Number / Block no / Office Name*"}
                error={touched.officeName && errors.officeName}
              />
            </div>

            <div className="input-wrapper">
              <TextInput
                name="locality"
                value={values.locality}
                onChange={(e) => setFieldValue("locality", e.target.value)}
                placeholder="Enter your Area / Locality"
                label={"Area / Locality*"}
                error={touched.locality && errors.locality}
              />
            </div>
            {/* <div className="input-wrapper">
              <TextInput
                name="nearestLandmark"
                value={values.nearestLandmark}
                onChange={(e) =>
                  setFieldValue("nearestLandmark", e.target.value)
                }
                placeholder="Enter your Nearest Landmark"
                label={"Nearest Landmark*"}
                error={touched.nearestLandmark && errors.nearestLandmark}
              />
            </div> */}
            <div className="input-wrapper">
              <TextInput
                name="town"
                value={values.town}
                onChange={(e) => setFieldValue("town", e.target.value)}
                placeholder="Enter your Town / City"
                label={"Block (optional)"}
                error={touched.town && errors.town}
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
                name="Country"
                value={values.country}
                onChange={(e) => setFieldValue("Country", e.target.value)}
                error={touched.country && errors.country}
                placeholder="Enter your Country"
                label={"Country*"}
              />
            </div>
            <div className="input-wrapper">
              <TextInput
                name="pincode"
                value={values.pincode}
                onChange={(e) => setFieldValue("pincode", e.target.value)}
                error={touched.pincode && errors.pincode}
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
            <BtnTitleCenter type="submit" title={"SAVE"} />
          </Form>
        )}
      />
    </div>
  );
}

export default EditAddress;
