import { useState, useEffect, useCallback } from "react";
import instance from "../helper/axios";

export const useGetResponse = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  console.log(url);

  const getData = useCallback(() => {
    setLoading(true);
    instance
      .get(url)
      .then((res) => {
        console.log({ res });
        if (res.success) {
          setData(res.result);
          setError({ error: false, message: "" });
        } else {
          setError({ error: true, message: res.message });
        }
        setLoading(false);
      })
      .catch((err) => {
        setError({ error: true, message: "something went wrong" });
        setLoading(false);
      });
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return {
    data,
    error,
    setData,
    loading,
    getData,
  };
};
