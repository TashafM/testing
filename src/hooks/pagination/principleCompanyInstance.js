import axios from "axios";

const instance = axios.create({
  baseURL: "https://dev.elred.io/",
  // baseURL: "http://elredtest1-env.eba-ydsmdti3.ap-south-1.elasticbeanstalk.com/",

  // timeout: 5000, // milliseconds
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

//intercept request
instance.interceptors.request.use((config) => {
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
instance.interceptors.response.use(
  (response) => {
    //restun response
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export { instance };
