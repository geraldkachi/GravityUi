import React from "react";
import { Row, Col } from "reactstrap";
 import xiaomi from "./assets/xiaomi.svg"
 import tinder from "./assets/tinder.svg"
 import apple from "./assets/apple.svg"
 import nike from "./assets/nike.svg"
 import amd from "./assets/amd.svg"

 import {ReactComponent as Social} from "./assets/Social.svg"

const ClientsGravity = () => {

  
  return (
    <>  
      <div className="container my-3">  
        <Row className="mx-0">
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
        <Row className="justify-content-between align-items-center my-5 mx-0">
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
        <Row className="mx-0 d-flex justify-content-center align-items-center" style={{backgroundColor:'#515151'}}>
          <div className="container d-flex justify-content-between align-items-center text-center m-5">
              <h3 style={{ color: "white" }} >Gravity</h3>
              <div className="d-flex justify-content-between align-items-center mx-auto col-md">
                <p className="mx-3 text-white">Travel</p>
                <p className="mx-3 text-white">Explore</p>
                <p className="mx-3 text-white">Works</p>
                <p className="mx-3 text-white">About Us</p>
                <p className="mx-3 text-white">Contacts</p>
              </div>
              <div className="d-flex align-items-center col-md-6" >
                <input type="text" placeholder="Your email" className='px-4 py-1' style={{color:"#222222", backgroundColor:"#F5F4FF", width:'170px'}} />
                <button className="btn btn-md mx-1 rounded-0 py-1 ml-3" style={{color:"#fff", backgroundColor:"#C6B393", width:'100px'}}>SEND</button>
              </div>
          </div>
          <hr />
        </Row>
        <div style={{backgroundColor:'#515151'}} className='py-3'>
          <div  className="container d-flex justify-content-center">
            <Row className="row justify-content-between align-items-center text-center">
            <div className='d-flex col mt-3 justify-content-center text-center'>
              <p className='text-muted mx-2'>Terms</p>
              <p className='text-muted mx-2'>Promo</p>
              <p className='text-muted mx-2'>Download</p>
              <p className='text-muted mx-2'>News</p>
            </div>
            <div className='col text-center'>
                <Social />
            </div>
            </Row>
          </div>
        </div>
    </>
  )
}

export default ClientsGravity;
