import React from "react";
import { Col, Row } from "reactstrap";
import { ReactComponent as Fold } from "./assets/Bag icon.svg";
import { ReactComponent as Hund } from "./assets/100 icon.svg";
 import Superimg from "./assets/Superimg.png"
 import SuperRed from "./assets/SuperRed.png"

const SuperGravity = () => {
  return (
    <div className="my-5">
      <div className="container">
        <Row>
          <Col sm="6">
              <img className="img-fluid" src={Superimg} alt="Superimg" />
              <img className="img-fluid position-absolute" style={{top: 70, left: 100}} src={SuperRed} alt="SuperRed" />
          </Col>
          <Col sm="6" className="p-5 d-flexjustify-content-center align-items-center">
              <h3 className="my-3">Well thought with super easy to use</h3>
              <p className="my-3">As we approached the palace I could see through the great windows of the first floor the brilliantly illuminated audience chamber of Than Kosis. The immense hall was crowded with nobles and their women.</p>
              <div className="my-5">
                    <div className="my-3">
                        <Fold  />
                        <p className="d-inline ml-3">Ultimate Result</p>
                    </div>
                    <div className="my-3">
                        <Hund />
                        <p className="d-inline ml-3">Minimal Design</p>
                    </div>
              </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SuperGravity;
