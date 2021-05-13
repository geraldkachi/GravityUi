import React from "react";
import { Col, Row } from "reactstrap";
import img1 from "./assets/Ellipse.png";
import Placeholder from "./assets/solveImg.png";


const SolveGravity = () => {
  return (
    <div className="container" >
      <Row>
        <Col md="6" className="mt-5">
          <div className="my-5">
            <img src={Placeholder} className="img-fluid" alt="Placeholder" />
          </div>
        </Col>
        <Col md="6" className="my-5">
            <h2 style={{color:'#22222'}} className="my-5">We solve digital problems with an outstanding creative flare</h2>
            <p className="text-muted my-3" style={{fontSize:'18px'}}>The best time to view the moon, obviously, is at night when there are few clouds and the weather is accommodating for a long and lasting study.</p>
            <p className="text-muted my-3" style={{fontSize:'18px'}}>For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens.</p>
            <div className="my-3">
                <div className="row my-5 ml-1 align-items-center">
                  <div className="mb-3">
                    <img src={img1} alt="hmm" className="img-fluid" />
                  </div>
                  <div className="ml-4 my-5">
                      <h6 style={{fontSize:'16px'}}>Denis Shepovalov</h6>
                      <p className="lead" style={{fontSize:'16px'}}>Co-Founder & CEO</p>
                  </div>
                </div>
            </div>
        </Col>
      </Row>
    </div>
  );
};

export default SolveGravity;
