import React, { useEffect, useState } from "react";
import "./category.scss";
import { API } from "../../../../../helper/API";
import { axiosInstance } from "../../../../../helper/axios";

const Category = ({ id }) => {
  const [category, setCategory] = useState([]);

  const fetchCategory = () => {
    const accessToken = localStorage.getItem("accessToken");
    const principalCompanyUserCode = localStorage.getItem(
      "principalCompanyUserCode"
    );
    axiosInstance
      .post(
        API.VIEW_DEALER_PRODUCT_CATEGORY,
        { principalCompanyUserCode, categoryId: id },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((res) => console.log(res,'fffffffffff'))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    id ?? fetchCategory();
  }, [id]);

  return (
    <div>
      Category: {id}
      {console.log(category)}
    </div>
  );
};

export default Category;
