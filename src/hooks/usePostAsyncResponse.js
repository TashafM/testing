import { useState, useCallback } from "react";
import instance from "../helper/axios";

export const usePostAsyncResponse = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const postData = useCallback(
    (body) => {
      setLoading(true);

      console.log(body);
      instance
        .post(url, body)
        // .patch(url, { params: { body } })
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
