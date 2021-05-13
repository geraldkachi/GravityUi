import React from "react";
import { ReactComponent as ArrorR } from "./assets/Arrow right.svg";
import { ReactComponent as ArrowLL } from "./assets/Arrow left.svg";
import Slider1  from "./assets/slideone.png";
import Slide2  from "./assets/slide2.png";

import { Col, Row } from "reactstrap";

const ServicesGravity = () => {


  return (
    <div className="container">
      <Row className="justify-content-between align-items-center my-5">
        <Col md="6" className="my-3">
            <div>
                <div className="lead my-3">— Services</div>
                <div className="h1">We love work hard and explore new things that’s why we cover lot of things. Check our service list and view details</div>
            </div>
        </Col>
        <Col md="6" className="my-3">
                <div className="row justify-content-start">
                        <ul className="">
                          <li className="text-muted my-3 mx-3">Multimedia</li>
                          <li className="text-muted my-3 mx-3">Interactive design</li>
                          <li className="text-muted my-3 mx-3">Packaging</li>
                          <li className="text-muted my-3 mx-3">Branding</li>
                        </ul>
                        <ul>
                          <li className="text-muted my-3 mx-3">Creative Strategy</li>
                          <li className="text-muted my-3 mx-3">UI/UX </li>
                          <li className="text-muted my-3 mx-3 text-left">Coding</li>
                        </ul>
                </div>
        </Col>
      </Row>
      <Row>
        <Col className="">
          <div>
            <style>
              {`.custom-tag {
                max-width: 100%;
                width: 825px;
                height: 500px;
                background: black;
                }
                ul {
                  list-style: none;
                }`}
            </style>
                <div className="container">
                  <div className="d-flex justify-content-center">
                    <img className="img-fluid mr-5 overflow-hidden" src={Slider1} alt="slide" />
                    <img className="img-fluid overflow-hidden" src={Slide2} alt="slide" />
                  </div>
                </div>
              <div className="my-5">
                    <ArrowLL  className="ml-3"/>
                    
                    <ArrorR className="ml-3" />
              </div>
        
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ServicesGravity;

