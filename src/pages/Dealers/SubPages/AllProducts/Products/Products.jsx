import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router";
import TopBar from "../../../Components/TopBar/TopBar";
import "./products.scss";
import product1 from "../../../../../assets/images/product1.png";
import product2 from "../../../../../assets/images/product2.png";
import product3 from "../../../../../assets/images/product3.png";
import product4 from "../../../../../assets/images/product4.png";
import product5 from "../../../../../assets/images/product5.png";
import product6 from "../../../../../assets/images/product6.png";

import { superItems } from "../../../data";

const Products = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentId, setCurrentId] = useState(location.state.id)
  console.log(location, "from products page");
  return (
    <>
      <div className="products">
        <TopBar title={"All Products"} goback={true}/>
        {/* <Button onClick={()=>navigate(`/dealers/all-products`)}>go back</Button> */}
        {/* <div className="products-container">
          <div
            className="img-category-main"
            style={{ backgroundImage: `url(${product1})` }}
          >
            <div>Konica Chrome</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing...</div>
          </div>
        </div> */}

        <Row className="products-row">
          {superItems.map((item) =>
            item.subItems.map((val) =>
              val.id == currentId
                ? val.products.map((itm) => (
                    <Col className="products-container">
                      <div
                        className="img-category-main"
                        style={{ backgroundImage: `url(${itm.image})` }}
                      >
                        <div>{itm.pname}</div>
                        <div>
                          {itm.desc}
                        </div>
                      </div>
                    </Col>
                  ))
                : ""
            )
          )}
        </Row>
      </div>
      <div className="bottom-strip">
        <div className="bottom-brands">
          {superItems.map((item)=>(
            item.subItems.map((subitem)=>(
              <div className="brand-div" onClick={()=>setCurrentId(subitem.id)}>
                <img src={subitem.subImg} />
              </div>
            ))
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
