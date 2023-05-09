import * as Yup from "yup";

const re =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

const atlestOneChar = /^(?=.*[a-zA-Z])/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const schema = {
  address: Yup.object({
    fullName: Yup.string()
      .matches(atlestOneChar, "atlead one character is required")
      .max(30)
      .required("full name is required"),
    floorNumber: Yup.string().required(
      "House No.  / Building No. / Floor is required"
    ),
    // nearestLandmark: Yup.string().required("nearest landmark is required"),
    street: Yup.string()
      .matches(atlestOneChar, "atlead one character is required")
      .max(30)
      .required("street is  required"),
    state: Yup.string()
      .matches(atlestOneChar, "atlead one character is required")
      .required("state is  required"),

    city: Yup.string()
      .matches(atlestOneChar, "atlead one character is required")
      .required("city is required"),
    country: Yup.string()
      .matches(atlestOneChar, "atlead one character is required")
      .required("country is required"),

    zipCode: Yup.number()
      .required("zip code is required")
      .typeError("zipcode must be a number"),
  }),

  social: Yup.object({
    instagram: Yup.string().matches(re, "URL is not valid"),
    facebook: Yup.string().matches(re, "URL is not valid"),
    twitter: Yup.string().matches(re, "URL is not valid"),
    website: Yup.string().matches(re, "URL is not valid"),
  }),

  contacts: Yup.object({
    email: Yup.string()
      .email("invalid email id")
      .matches(emailRegex, "invalid email id")
      .required("email is required"),
    title: Yup.string().required("title is required"),
    contact: Yup.number()
      .required("contact is required")
      .typeError("contact must be a number"),
    // address: Yup.string().required("address is required"),
  }),

  createBrand: Yup.object({
    brandName: Yup.string().max(30).required("brand name is required"),
    location: Yup.string().required("location is required"),
    email: Yup.string()
      .email("invalid email id")
      .matches(emailRegex, "invalid email id"),
  }),
};

export default schema;
