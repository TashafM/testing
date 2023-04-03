import React, { useState } from "react";
import "./allproducts.scss";
import TopBar from "../../Components/TopBar/TopBar";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { superItems } from "../../data";

const AllProducts = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const setCategory = (idx) => {
    setActiveCategory(idx);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="allproducts">
        <TopBar title={"Print Heads"} />
        <div>
          <div className="img-category-main">
            <div className="catItems">
              {superItems.map((item, id) => (
                <div
                  className={
                    item.index == activeCategory
                      ? `isActive superCategory-div`
                      : `superCategory-div`
                  }
                  style={{
                    backgroundImage: `url(${item.logo})`,
                    backgroundSize: "cover",
                  }}
                  onClick={() => setCategory(item.index)}
                >
                  {item.itemName}
                </div>
              ))}
            </div>
            <hr />
          </div>
          <div className="company-names">
            <Row className="category-row">
              {superItems.map((item) =>
                item.index == activeCategory ? (
                  <>
                    {item.subItems.map((abc) => (
                      <Col
                        className="catCol col-xl-4"
                        style={{ backgroundImage: `url(${abc.imgPath})` }}
                        onClick={() =>
                          navigate("/dealers/all-products/products", {
                            state: { id: abc.id },
                          })
                        }
                      >
                        {abc.name}
                      </Col>
                    ))}
                  </>
                ) : (
                  " "
                )
              )}
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
