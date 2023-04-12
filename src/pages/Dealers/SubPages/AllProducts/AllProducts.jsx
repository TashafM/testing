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
  const principalCompanyUserCode = localStorage.getItem(
    "principalCompanyUserCode"
  );

  const navigate = useNavigate();

  const [categoryData, setcategoryData] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const [active, setActive] = useState(0);

  useEffect(() => {
    const principalCompanyUserCode = localStorage.getItem(
      "principalCompanyUserCode"
    );
    const fetchData = async () => {
      const api1 = await axiosInstance.post(API.VIEW_DEALER_PRODUCT_CATEGORY, {
        principalCompanyUserCode,
      });
      setcategoryData(api1.result);

      const api2 = await axiosInstance.post(
        API.VIEW_DEALER_PRODUCT_SUBCATEGORY,
        {
          principalCompanyUserCode,
          categoryId: api1.result[0].categoryId,
        }
      );
      setSubCategory(api2.result);
    };
    fetchData();
  }, []);

  const chng = async (id, idx) => {
    setActive(idx);
    const api2 = await axiosInstance.post(API.VIEW_DEALER_PRODUCT_SUBCATEGORY, {
      principalCompanyUserCode,
      categoryId: id,
    });
    setSubCategory(api2.result);
  };

  const seeProducts = (itm) => {
    const {categoryId, subCategoryId} = itm;
    navigate('/dealers/all-products/products', { state: { categoryId, subCategoryId } });
  };

  return (
    <>
      <div className="allproducts">
        <TopBar title={"Print Heads"} />
        <div>
          <div className="img-category-main">
            <div className="catItems">
              {categoryData.map((item, id) => (
                <div
                  className={
                    active == id
                      ? `superCategory-div activeBorder`
                      : `superCategory-div `
                  }
                  style={{
                    backgroundImage: `url(${
                      item.categoryImageURL ? item.categoryImageURL : abcImg
                    })`,
                    backgroundSize: "cover",
                  }}
                  onClick={() => chng(item.categoryId, id)}
                >
                  {item.categoryName}
                </div>
              ))}
            </div>

            <hr />

            <div>
              {subCategory.map((item,id) => (
                <div className="sub-category-div" onClick={()=>seeProducts(item)} key={id}>
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
