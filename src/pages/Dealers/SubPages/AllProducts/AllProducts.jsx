import React from "react";
import "./allproducts.scss";
import TopBar from "../../Components/TopBar/TopBar";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const AllProducts = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="allproducts">
        <TopBar title={"Print Heads"} />
        <div>
          <div className="img-category-main">
            <Button onClick={() => navigate(`/dealers/all-products/products`)}>
              Click
            </Button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AllProducts;
