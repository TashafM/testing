import * as Yup from "yup";

const schema = {
  address: Yup.object({
    fullName: Yup.string().required("full name is required"),
    floorNumber: Yup.string().required("office name is required"),
    block: Yup.string().required("location is rquire"),
    // nearestLandmark: Yup.string().required("nearest landmark is required"),
    street: Yup.string().required("town is  required"),
    city: Yup.string().required("city is required"),
    zipCode: Yup.string().required("zip code is required"),
  }),

  contacts: Yup.object({
    email: Yup.string().required("email is required"),
    title: Yup.string().required("title is required"),
    contact: Yup.string().required("contact is reuired"),
  }),

  createBrand: {
    brandName: Yup.string().required("brand name is require"),
    file: Yup.string().required("file is required"),
  },
};

export default schema;
