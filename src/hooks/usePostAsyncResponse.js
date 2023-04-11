import { useState, useCallback } from "react";
import instance from "../helper/axios";

export const usePostAsyncResponse = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState({ error: false, message: "" });
  const [loading, setLoading] = useState(false);

  const postData = useCallback(
    (body, onUpdate = () => {}) => {
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
          // alert(2);
          onUpdate(res.result);
          setLoading(false);
        })
        .catch((err) => {
          setError({
            error: true,
            message: err?.response?.message ?? "something went wrong",
          });

          // alert(2);
          setLoading(false);
        });
    },
    [url]
  );

  return [postData, { data, error, loading }];
};
