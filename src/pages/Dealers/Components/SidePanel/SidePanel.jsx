import React from "react";
import "./sidepanel.scss";
import { Button, Offcanvas } from "react-bootstrap";
import LeftSide from "../LeftSide/LeftSide";
import RightSide from "../RightSide/RightSide";

const SidePanel = ({ show, setShowPanel }) => {
  return (
    <div className="sidepanel">
      <Offcanvas
        show={show}
        onHide={()=>setShowPanel(false)}
        placement="end"
        className="dm"
      >
        {/* <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header> */}
        <Offcanvas.Body>
          {/* Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc. */}
          <div className="divided-div">
            <div className="div-1">
                <LeftSide/>
            </div>
            <div className="vertical-line"></div>
            <div className="div-2">
              <RightSide setShowPanel={setShowPanel}/>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default SidePanel;
