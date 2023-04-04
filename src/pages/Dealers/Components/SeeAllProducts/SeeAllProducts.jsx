import React from 'react';
import './seeallproducts.scss'
import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';

const SeeAllProducts = ({show, handleClose}) => {
    return (
        <div className="sidepanel">
          <Offcanvas
            show={show}
            onHide={handleClose}
            placement="end"
            className="seeAll"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>All Products</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {/* Some text as placeholder. In real life you can have the elements you
              have chosen. Like, text, images, lists, etc. */}              
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      );
}

export default SeeAllProducts