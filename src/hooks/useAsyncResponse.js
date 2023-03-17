import { useState, useEffect, useCallback } from "react";
import instance from "../helper/axios";

export const useResponse = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const postData = useCallback(
    (body) => {
      setLoading(true);
      instance
        .post(url, { body })
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
          setError({ error: true, message: err.response.message });
          setLoading(false);
        });
    },
    [url]
  );

  return [postData, { data, error, loading }];
};
