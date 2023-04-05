import React, { useContext, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router";
import TopBar from "../../../Components/TopBar/TopBar";
import "./products.scss";
import { superItems } from "../../../data";
import SidePanel from "../../../Components/SidePanel/SidePanel";
import { GlobalSidePanel } from "../../../Dealers";

const Products = () => {
  const {showPanel, setShowPanel} = useContext(GlobalSidePanel)
  const location = useLocation();
  const [currentId, setCurrentId] = useState(location.state.id)

  return (
    <>
      <div className="products">
        <TopBar title={"All Products"} goback={true}/>

        <Row className="products-row">
          {superItems.map((item) =>
            item.subItems.map((val) =>
              val.id == currentId
                ? val.products.map((itm) => (
                    <Col className="products-container">
                      <div
                        className="img-category-main"
                        style={{ backgroundImage: `url(${itm.image})` }}
                        onClick={()=>setShowPanel(true)}
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
        <SidePanel show={showPanel} setShowPanel={setShowPanel}/>
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
