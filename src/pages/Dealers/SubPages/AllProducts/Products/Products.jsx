import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router";
import TopBar from "../../../Components/TopBar/TopBar";
import "./products.scss";
import { superItems } from "../../../data";
import SidePanel from "../../../Components/SidePanel/SidePanel";
import { AddProducts, GlobalSidePanel } from "../../../Dealers";
import wishList from "../../../../../assets/images/wishlist.svg";
import img300 from "../../../../../assets/images/300x300pix(300dpi).png";
import img500 from "../../../../../assets/images/500x500pix(300dpi).png";
import img600 from "../../../../../assets/images/600x600pix(300dpi).png";
import img1000 from "../../../../../assets/images/1000x1000pix(300dpi).png";
import noImage from "../../../../../assets/images/noImage.png";

import { API } from "../../../../../helper/API";
import { axiosInstance } from "../../../../../helper/axios";
import Category from "../Category/Category";
import { GlobalContext } from "../../../../../App";
import TriggerExample from "../../../../../components/ToolTip/ToolTip";
import Tippy from "@tippyjs/react";

const Products = () => {
  const { showPanel, setShowPanel } = useContext(GlobalSidePanel);
  const { setLoading, setMsg, loading } = useContext(GlobalContext);
  const { setCartOpen, bottomId, setBottomId } = useContext(AddProducts);
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [noProducts, setNoProducts] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(location,'location')
  // const [data, setData] = useState([])
  // const [currentId, setCurrentId] = useState(location.state.id);

  const switchSubCategory = (value, idx) => {
    setBottomId(idx);
    setIsLoading(true);
    const dataStringify = JSON.stringify(value);
    localStorage.setItem("subCategory", dataStringify);
    const parseData = localStorage.getItem("subCategory");
    const data = JSON.parse(parseData);
    const principalCompanyUserCode = localStorage.getItem(
      "principalCompanyUserCode"
    );

    axiosInstance
      .post(API.VIEW_DEALER_PRODUCTS, {
        principalCompanyUserCode,
        categoryId: data.categoryId,
        subCategoryId: data.subCategoryId,
      })
      .then((res) => {
        setIsLoading(false);
        setProducts(res.result);
      })
      .catch((err) => setIsLoading(false));
  };

  console.log(bottomId, "bottom id");
  useEffect(() => {
    // const { categoryId, subCategoryId } = location.state;
    const principalCompanyUserCode = localStorage.getItem(
      "principalCompanyUserCode"
    );
    const data = localStorage.getItem("subCategory");
    const parseData = JSON.parse(data);
    // console.log(categoryId, subCategoryId, principalCompanyUserCode, 'tashaf')

    const fetchProducts = async () => {
      setLoading(true);
      setMsg("All Products Loading...");
      // setLoading(true)
      const api1 = await axiosInstance.post(API.VIEW_DEALER_PRODUCTS, {
        principalCompanyUserCode,
        categoryId: parseData.categoryId,
        subCategoryId: parseData.subCategoryId,
      });
      setProducts(api1.result);
      if (api1.result.length == 0) {
        setNoProducts(true);
      }
      setLoading(false);
      // localStorage.setItem("currencySymbol", api1.result[0].currency.symbol);
      // localStorage.setItem("currencyType", api1.result[0].currency.type);
    };
    fetchProducts();
  }, []);

  console.log(loading,'loader status')

  const callFunc = (val, idx) => {
    console.log(idx, "call func");
    // setData(val)
    const popup = JSON.parse(localStorage.getItem("popupItems"));
    // console.log(popup,'popup')
    setShowPanel(true);
    setCartOpen(true);
    const productData = JSON.stringify(val);
    localStorage.setItem("initialProductData", productData);
  };

  return (
    <>
      <div className="products">
        <TopBar title={"All Products"} goback={true} />

        <Row className="products-row">
          {noProducts ? (
            <div className="noProductsmsg">No products added yet</div>
          ) : (
            <>
              {isLoading ? (
                <div className="loader-products-bottom">
                  <Spinner animation="border" variant="danger" />
                </div>
              ) : (
                <>
                  {products.map((itm, id) => (
                    <Col className="products-container col-lg-4">
                      {/* <div
                        className="img-category-main"
                        onClick={() => callFunc(itm, id)}
                      > */}
                      <div
                        className="img-category-main"
                        onClick={(e) => {
                          e.preventDefault();
                          callFunc(itm, id);
                        }}
                      >
                        <Tippy content="Feature Coming Soon" trigger="click">
                          <div
                            className="wish-list-icon"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <img src={wishList} alt="" />
                          </div>
                        </Tippy>
                        <div className="product-img">
                          {/* <img src={itm.productImages[0]} alt="" /> */}
                          <img
                            src={
                              itm.productImages.length > 0
                                ? itm.productImages[0]
                                : noImage
                            }
                            alt=""
                          />
                        </div>
                        {/* {console.log(itm,'from products fro image')} */}
                        <div className="title">{itm.itemDescription}</div>
                        <div className="description">{itm.itemDescription}</div>
                      </div>
                    </Col>
                  ))}
                </>
              )}
            </>
          )}
        </Row>
        {showPanel && <SidePanel noHover />}

        {/* <Category/> */}
      </div>
      <div className="bottom-strip">
        <div className="bottom-brands">
          {location.state.subCategory.map((item, id) => (
            <div
              key={id}
              className={
                bottomId == id ? "bottom-logos-active" : "bottom-logos"
              }
              onClick={() => switchSubCategory(item, id)}
            >
              <img
                src={
                  item.subCategoryImageURL != ""
                    ? item.subCategoryImageURL
                    : noImage
                }
                alt=""
                width={70}
              />
              <div className="titleName">{item.subCategoryName}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
