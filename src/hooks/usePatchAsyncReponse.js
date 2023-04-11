import { useState, useCallback } from "react";
import instance from "../helper/axios";

export const usePatchAsyncReponse = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState({ error: false, message: "" });
  const [loading, setLoading] = useState(false);

  const patchData = useCallback(
    (body, onUpdate = () => {}) => {
      setLoading(true);

      console.log({ body });
      instance
        .patch(url, body)
        .then((res) => {
          if (res.success) {
            setData(res.result);
            setError({ error: false, message: "" });
          } else {
            setError({ error: true, message: res.message });
          }
          setLoading(false);
          onUpdate(res.result);
        })
        .catch((err) => {
          setError({ error: true, message: err?.response?.message ?? "" });
          setLoading(false);
        });
    },
    [url]
  );

  return [patchData, { data, error, loading }];
};
