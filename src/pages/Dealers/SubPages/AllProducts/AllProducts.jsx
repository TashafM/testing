import React, { useContext, useEffect, useState } from "react";
import "./allproducts.scss";
import TopBar from "../../Components/TopBar/TopBar";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { superItems } from "../../data";
import { API } from "../../../../helper/API";
import axios, { axiosInstance } from "../../../../helper/axios";
import abcImg from "../../../../assets/images/application.png";
import atlogo from "../../../../assets/images/atlogo.png";
import { GlobalContext } from "../../../../App";

const AllProducts = () => {
  const {loading,
    setLoading,
    msg,
    setMsg,} = useContext(GlobalContext)
  const dealersLogo = localStorage.getItem("dpURL");
  const accessToken = localStorage.getItem("accessToken");
  const principalCompanyUserCode = localStorage.getItem(
    "principalCompanyUserCode"
  );

  const navigate = useNavigate();

  const [category, setcategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchCategory = () => {
    return axiosInstance
      .post(
        API.VIEW_DEALER_PRODUCT_CATEGORY,
        { principalCompanyUserCode },
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((res) => {
        setcategory(res.result);
        setSelectedCategory(res.result[0].categoryId);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCategory();
  }, [dealersLogo]);

  //------------------------------------------------------------------------------------------SUB CATEGORY
  const [subCat, setSubCat] = useState([]);

  const subCategory = () => {
    axiosInstance
      .post(API.VIEW_DEALER_PRODUCT_SUBCATEGORY, {
        principalCompanyUserCode,
        categoryId: selectedCategory,
      })
      .then((res) => {
        setSubCat(res.result)
      })
  };

  const abc = (val) => {
    console.log(val);
    setSelectedCategory(val);
    subCategory();
  };

  return (
    <>
      <div className="allproducts">
        <TopBar title={"Print Heads"} />
        <div>
          <div className="img-category-main">
            <div className="catItems">
              {category.map((item, id) => (
                <div
                  className={`superCategory-div`}
                  style={{
                    backgroundImage: `url(${item.categoryImageURL? item.categoryImageURL : abcImg})`,
                    backgroundSize: "cover",
                  }}
                  onClick={() => abc(item.categoryId)}
                >
                  {item.categoryName}
                </div>
              ))}
            </div>
            <hr />

            <div>
              {subCat.map((item) => (
                <div className="sub-category-div">
                  <div className="image-div">
                    <img src={item.subCategoryImageURL} alt="" />
                  </div>
                  <div className="name">{item.subCategoryName}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
