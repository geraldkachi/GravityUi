import React from "react";
import { Row, Col } from "reactstrap";
 import xiaomi from "./assets/xiaomi.svg"
 import tinder from "./assets/tinder.svg"
 import apple from "./assets/apple.svg"
 import nike from "./assets/nike.svg"
 import amd from "./assets/amd.svg"

const ClientsGravity = () => {

  
  return (
    <>
      <div className="container my-3">  
        <Row>
          <Col md="6">
              <div>
                  <h1>Our Clients</h1>
              </div>
          </Col>
          <Col md="6">
            <div className="px-2">
                <h6 className="lead my-3">— We worked with</h6>
                <p className="lead">
                    Our favorite brands are our friends! We help them to achieve their goals, they help us to stay sharp.
                </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-between align-items-center my-5">
          <Col>
            <img src={xiaomi} className="img-fluid my-3" />
          </Col>
          <Col>
            <img src={tinder} className="img-fluid mx-2 my-3" />
          </Col>
          <Col>
            <img src={apple} className="img-fluid mx-2 my-3" />
          </Col>
          <Col>
            <img src={nike} className="img-fluid mx-2 my-3" />
          </Col>
          <Col>
            <img src={amd} className="img-fluid mx-2 my-3" />
          </Col>
        </Row>
      </div>
        <Row style={{backgroundColor:'#515151'}}>
        <div className="container d-flex justify-content-between align-items-center tesxt-center">
            {/* <div style={{ color: "#222222", fontWeight: '74.31px' }} >Gravity</div> */}
            <div className="d-flex justify-content-between align-items-center mx-auto">
              <p className="text-white">Travel</p>
              <p className="text-white">Explore</p>
              <p className="text-white">Works</p>
              <p className="text-white">About Us</p>
              <p className="text-white">Contacts</p>
            </div>
            <div className="d-inline">
              <input type="text" placeholder="Your email" style={{color:"#222222", backgroundColor:"#F5F4FF"}} />
              <button className="btn btn-md mx-1">SEND</button>
            </div>
        </div>
        </Row>
    </>
  )
}

export default ClientsGravity;
