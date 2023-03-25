import React, { useCallback, useEffect, useState } from "react";
import { axiosInstance } from "../../../../helper/axios";

function usePostBrand(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const postData = useCallback(
    (body, onUpdate) => {
      setLoading(true);
      axiosInstance
        .post(url, body)
        .then((res) => {
          console.log({ res });
          if (res.success) {
            setData(res.result);
            setError({ error: false, message: "" });
          } else {
            setError({ error: true, message: res.message });
          }
          onUpdate(res.result[0]);
          setLoading(false);
        })
        .catch((err) => {
          setError({ error: true, message: "something went wrong" });
          setLoading(false);
        });
    },
    [url]
  );

  return {
    data,
    error,
    loading,
    postData,
  };
}

export default usePostBrand;
