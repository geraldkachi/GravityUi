import React from "react";
import { Row, Col } from "reactstrap";
 import xiaomi from "./assets/xiaomi.svg"
 import tinder from "./assets/tinder.svg"
 import apple from "./assets/apple.svg"
 import nike from "./assets/nike.svg"
 import amd from "./assets/amd.svg"
 import FooterLogo from "./assets/footerLogo.svg"

 import {ReactComponent as Social} from "./assets/Social.svg"

const ClientsGravity = () => {

  
  return (
    <>  
      <div className="container my-5">  
        <Row className="mx-0">
          <Col md="6" className="overflow-hidden">
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
        <Row className="justify-content-between align-items-center my-5 mx-0 overflow-hidden">
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

       
        <Row className="mx-0" style={{backgroundColor:'#515151'}}>
       <div className="container">
              <div className="row justify-content-center align-items-center my-5">
                  <Col className="col-auto">
                    <img src={FooterLogo} style={{ color: "white" }} className="img-fluid" />
                  </Col>

                  <Col className="col-md-6 col-12 align-items-center overflow-hidden">
                  <div className="d-flex justify-content-between align-items-center mx-auto pt-3 col-sm-4 text-center">
                    <p className="mx-1 text-white">Travel</p>
                    <p className="mx-1 text-white">Explore</p>
                    <p className="mx-1 text-white">Works</p>
                    <p className="mx-1 text-white">About Us</p>
                    <p className="mx-1 text-white">Contacts</p>
                  </div>
                  </Col>


                <Col className="d-flex align-items-center col-auto overflow-hidden text-end">
                  <input type="text" placeholder="Your email" className='form-control px-4 py-1 border-1' style={{color:"#222222", backgroundColor:"#F5F4FF", width:'170px'}} />
                  <button className="btn btn-md mx-1 rounded-0 py-1 ml-3" style={{color:"#fff", backgroundColor:"#C6B393", width:'100px'}}>SEND</button>
                </Col>
              </div>
            <hr style={{borderColor:'#FFFFFF'}} />
      </div>
        </Row >

        <div style={{backgroundColor:'#515151'}} className='py-3'>
          <div  className="container">
            <Row className="row justify-content-between align-items-center">
            <div className='d-flex col mt-3 justify-content-center'>
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
