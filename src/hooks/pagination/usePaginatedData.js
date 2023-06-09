import { useState } from "react";
import { principleCompanyInstance } from "./principleCompanyInstance";
import instance from "../../helper/axios";

export const usePaginatedData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const getData = (url, page, onUpdate = () => {}, body = {}) => {
    if (page === 1) {
      setLoading(true);
    }

    principleCompanyInstance
      .post(url, body)
      .then((res) => {
        console.log({ res });
        if (res.success) {
          onUpdate(res);
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
  };

  return {
    data,
    error,
    setData,
    loading,
    getData,
  };
};

export const usePaginatedCompanyData = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const getData = (url, page, onUpdate = () => {}, body = {}) => {
    if (page === 1) {
      setLoading(true);
    }

    instance
      .post(url, body)
      .then((res) => {
        console.log({ res });
        if (res.success) {
          onUpdate(res);
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
  };

  return {
    data,
    error,
    setData,
    loading,
    getData,
  };
};
