import axios from "axios";
import { toast } from "react-toastify";

const principleCompanyInstance = axios.create({
  baseURL: "https://dev.elred.io/",
  // baseURL: "http://elredtest1-env.eba-ydsmdti3.ap-south-1.elasticbeanstalk.com/",

  // timeout: 5000, // milliseconds
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

//intercept request
principleCompanyInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  const principalCompanyUserCode = localStorage.getItem(
    "principalCompanyUserCode"
  );
  console.log(config);
  if (token) {
    //set default and body header

    config.headers.Authorization = `Bearer ${token}`;
    config.data = {
      principalCompanyUserCode: principalCompanyUserCode,
      ...config.data,
    };
  }

  return config;
});

//intercep response
principleCompanyInstance.interceptors.response.use(
  (response) => {
    //restun response
    return response.data;
  },
  function (error) {
    if (error?.response) {
      toast.error(error?.response?.data?.message);
    } else if (error?.request) {
      console.log(error?.request);
      toast.error(error?.response ?? "Something went wrong!!!");
    } else {
      console.log("Error", error?.message);
      toast.error(error?.message ?? "Something went wrong!!!");
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export { principleCompanyInstance };
