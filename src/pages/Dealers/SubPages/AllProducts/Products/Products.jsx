import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router";
import TopBar from "../../../Components/TopBar/TopBar";
import "./products.scss";
import { superItems } from "../../../data";
import SidePanel from "../../../Components/SidePanel/SidePanel";
import { GlobalSidePanel } from "../../../Dealers";
import wishList from "../../../../../assets/images/wishlist.svg";
import img300 from "../../../../../assets/images/300x300pix(300dpi).png";
import img500 from "../../../../../assets/images/500x500pix(300dpi).png";
import img600 from "../../../../../assets/images/600x600pix(300dpi).png";
import img1000 from "../../../../../assets/images/1000x1000pix(300dpi).png";


import { API } from "../../../../../helper/API";
import { axiosInstance } from "../../../../../helper/axios";
import Category from "../Category/Category";

const Products = () => {
  const { showPanel, setShowPanel } = useContext(GlobalSidePanel);
  const location = useLocation();
  const [products, setProducts] = useState([]);
  // const [data, setData] = useState([])
  // const [currentId, setCurrentId] = useState(location.state.id);

  useEffect(() => {
    const { categoryId, subCategoryId } = location.state;
    const principalCompanyUserCode = localStorage.getItem(
      "principalCompanyUserCode"
    );
    // console.log(categoryId, subCategoryId, principalCompanyUserCode, 'tashaf')

    const fetchProducts = async () => {
      const api1 = await axiosInstance.post(API.VIEW_DEALER_PRODUCTS, {
        principalCompanyUserCode,
        categoryId,
        subCategoryId,
      });
      setProducts(api1.result);
      localStorage.setItem('currencySymbol', api1.result[0].currency.symbol);
      localStorage.setItem('currencyType', api1.result[0].currency.type)
    };
    fetchProducts();
  }, []);


  const callFunc = (val) => {
    // setData(val)
    console.log('open it')
    setShowPanel(true)
    const productData = JSON.stringify(val);
    localStorage.setItem('initialProductData', productData)
  }

  return (
    <>
      <div className="products">
        <TopBar title={"All Products"} goback={true} />

        <Row className="products-row">
          {products.map((itm, id) => (
            <Col className="products-container col-lg-4">
              <div
                className="img-category-main"
                onClick={() => callFunc(itm)}
              >
                <div className="wish-list-icon">
                  <img src={wishList} alt="" />
                </div>
                <div className="product-img">
                  {/* <img src={itm.productImages[0]} alt="" /> */}
                  <img src={img600} alt="" />

                </div>
                <div className="title">{itm.itemDescription}</div>
                <div className="description">{itm.itemDescription}</div>
              </div>
            </Col>
          ))}
        </Row>
        {showPanel && <SidePanel />}

        {/* <Category/> */}
      </div>
      <div className="bottom-strip">
        <div className="bottom-brands">
          {superItems.map((item) =>
            item.subItems.map((subitem) => (
              <div
                // className={
                //   currentId == subitem.id ? "brand-div active-div" : "brand-div"
                // }
                // onClick={() => setCurrentId(subitem.id)}
                className={"brand-div"}
              >
                <img src={subitem.subImg} />
              </div>
            ))
          )}

        </div>
      </div>
    </>
  );
};

export default Products;
