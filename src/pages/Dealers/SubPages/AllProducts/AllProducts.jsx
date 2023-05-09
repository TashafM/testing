import React, { useContext, useEffect, useState } from "react";
import "./allproducts.scss";
import TopBar from "../../Components/TopBar/TopBar";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router";
import { superItems } from "../../data";
import { API } from "../../../../helper/API";
import axios, { axiosInstance } from "../../../../helper/axios";
import abcImg from "../../../../assets/images/application.png";
import noImage from "../../../../assets/images/noImage.png";

import atlogo from "../../../../assets/images/atlogo.png";
import { GlobalContext } from "../../../../App";
import SidePanel from "../../Components/SidePanel/SidePanel";
import { GlobalSidePanel } from "../../Dealers";
import { AddProducts } from "../../Dealers";

const AllProducts = () => {
  const { isEmpty, setIsEmpty,setBottomId } = useContext(AddProducts);
  const { setLoading, setMsg, loading } = useContext(GlobalContext);
  const principalCompanyUserCode = localStorage.getItem(
    "principalCompanyUserCode"
  );

  const navigate = useNavigate();
  const [noData, setNoData] = useState(false);
  const [categoryData, setcategoryData] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [active, setActive] = useState(0);

  const { showPanel } = useContext(GlobalSidePanel);

  useEffect(() => {
    
    const principalCompanyUserCode = localStorage.getItem(
      "principalCompanyUserCode"
    );
    const fetchData = async () => {
      const api1 = await axiosInstance.post(API.VIEW_DEALER_PRODUCT_CATEGORY, {
        principalCompanyUserCode,
      });
      setcategoryData(api1.result);
      if (api1.result.length == 0) {
        setNoData(true);
      } else {
        const api2 = await axiosInstance.post(
          API.VIEW_DEALER_PRODUCT_SUBCATEGORY,
          {
            principalCompanyUserCode,
            categoryId: api1.result[0].categoryId,
          }
        );
        setSubCategory(api2.result);
      }
    };

    const viewCart = () => {
      setLoading(true);
      axiosInstance
        .post(API.VIEW_DEALER_CART, {
          principalCompanyUserCode,
        })
        .then((res) => {
          const cart = res.result[0].cart.cartItems;
          const popupItems = res.result[0].popUpDisplayItems;
          if (res.totalCartItemCount == 0) {
            setIsEmpty(true);
            setLoading(false);
            const parseData = JSON.stringify(cart);
            localStorage.setItem("cart", parseData);
            const popupData = JSON.stringify(popupItems);
            localStorage.setItem("popupItems", popupData);
          } else {
            setIsEmpty(false);
            const parseData = JSON.stringify(cart);
            localStorage.setItem("cart", parseData);
            const popupData = JSON.stringify(popupItems);
            localStorage.setItem("popupItems", popupData);
            const product = res.result[0].cart.cartItems[0];
            const nicy = res.result[0].popUpDisplayItems.filter(
              (item) => item.itemNumber == product.itemNumber
            );
            const productData = JSON.stringify(nicy);
            localStorage.setItem("initialProductData", productData);
          }
        })
        .catch((err) => setLoading(false));
    };

    fetchData();
    viewCart();
  }, []);

  const chng = async (id, idx) => {
    setIsLoading(true);
    setActive(idx);
    const api2 = await axiosInstance.post(API.VIEW_DEALER_PRODUCT_SUBCATEGORY, {
      principalCompanyUserCode,
      categoryId: id,
    });
    setSubCategory(api2.result);
    setIsLoading(false);
  };

  const seeProducts = (itm,idx) => {
    setBottomId(idx)
    const parseItm = JSON.stringify(itm);
    localStorage.setItem("subCategory", parseItm);
    const { categoryId, subCategoryId } = itm;
    navigate("/dealers/all-products/products", {
      state: { subCategory },
    });
    // navigate('/dealers/all-products/products')
  };

  return (
    <>
      <div className="allproducts">
        <TopBar title={!noData ? "Print Heads" : null} />
        {noData ? (
          <div className="nodata">No categories added yet</div>
        ) : (
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
              {showPanel && <SidePanel />}
              <hr />

              <div>
                {subCategory.length == 0 ? (
                  <div className="noSubcategory">
                    No sub categories added yet
                  </div>
                ) : (
                  <>
                    {isLoading ? (
                      <div className="loader-div-subcategory">
                        <Spinner animation="border" variant="danger" />
                      </div>
                    ) : (
                      <Row xs={1} sm={2} md={4} xxl={4}>
                        {subCategory.map((item, id) => (
                          <Col xs={12} sm={6} md={4} xxl={3} key={id}>
                            <div
                              className="sub-category-div"
                              onClick={() => seeProducts(item,id)}
                            >
                              <div className="image-div">
                                <img
                                  src={
                                    item.subCategoryImageURL
                                      ? item.subCategoryImageURL
                                      : noImage
                                  }
                                  alt=""
                                />
                              </div>
                              <div className="name">{item.subCategoryName}</div>
                            </div>
                          </Col>
                        ))}
                      </Row>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AllProducts;
