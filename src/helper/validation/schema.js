import * as Yup from "yup";

const schema = {
  address: Yup.object({
    fullName: Yup.string().required("full name is required"),
    officeName: Yup.string().required("office name is required"),
    locality: Yup.string().required("location is rquire"),
    // nearestLandmark: Yup.string().required("nearest landmark is required"),
    town: Yup.string().required("town is  required"),
    city: Yup.string().required("city is required"),
    pincode: Yup.string().required("pincode is required"),
  }),

  contacts: Yup.object({
    email: Yup.string().required("email is requird"),
    title: Yup.string().required("title is required"),
    contactNumber: Yup.number().required("contact number is required"),
  }),

  createBrand: {
    brandName: Yup.string().required("brand name is require"),
    file: Yup.string().required("file is required"),
  },
};

export default schema;
