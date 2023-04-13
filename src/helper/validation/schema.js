import * as Yup from "yup";

const schema = {
  address: Yup.object({
    fullName: Yup.string().required("full name is required"),
    floorNumber: Yup.string().required(
      "House No.  / Building No. / Floor is required"
    ),
    // nearestLandmark: Yup.string().required("nearest landmark is required"),
    street: Yup.string().required("street is  required"),
    state: Yup.string().required("state is  required"),

    city: Yup.string().required("city is required"),
    country: Yup.string().required("country is required"),

    zipCode: Yup.string().required("zip code is required"),
  }),

  contacts: Yup.object({
    email: Yup.string().required("email is required"),
    title: Yup.string().required("title is required"),
    // contact: Yup.string().required("contact is reuired"),
  }),

  createBrand: Yup.object({
    brandName: Yup.string().required("brand name is require"),
    location: Yup.string().required("location is required"),
  }),
};

export default schema;
