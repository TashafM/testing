import { useState, useEffect, useCallback } from "react";
import instance from "../helper/axios";

export const useResponse = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  console.log(url);

  const getData = useCallback(() => {
    setLoading(true);
    instance
      .post(url)
      .then((res) => {
        if (res.success) {
          setData(res.result);
          setError({ error: false, message: "" });
        } else {
          setError({ error: true, message: res.message });
        }
        setLoading(false);
      })
      .catch((err) => {
        setError({ error: true, message: "somethun" });
        setLoading(false);
      });
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    data,
    error,
    loading,
    getData,
  };
};
