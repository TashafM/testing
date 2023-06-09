import { useState, useCallback } from "react";
import instance from "../helper/axios";

export const useDeleteAsyncResponse = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const deleteData = useCallback(
    (body, onUpdate = () => {}) => {
      setLoading(true);

      console.log({ body });
      instance
        .delete(url, body)
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

  return [deleteData, { data, error, loading }];
};
