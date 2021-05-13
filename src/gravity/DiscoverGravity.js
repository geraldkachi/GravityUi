import React from 'react'
import { Col, Row } from "reactstrap";

import discover1 from "./assets/discover1.png"
import discover2 from "./assets/discover2.png"
import discover3 from "./assets/Placeholder.png"
import discover4 from "./assets/discover4.png"
import discover5 from "./assets/discover5.png"
import discover6 from "./assets/discover6.png"
import discover31 from "./assets/discover3.png"


const DiscoverGravity = () => {
    return (
        <div className="container">
        <Row className="justify-content-between my-5">
          <Col md="6" className="my-3">
                  <div className="lead my-3">— our works</div>
                  <div className="h1">Discover our Work</div>
          </Col>
          <Col md="6" className="my-3 w-100 d-flex justify-content-center align-items-end">
                  <div className="row justify-content-center align-items-center text-center">
                     <p className="mx-2" style={{color:'#1434E1'}}>All</p>
                     <p className="mx-2 text-mute">Branding</p>
                     <p className="mx-2 text-mute">Web</p>
                     <p className="mx-2 text-mute">Development</p>
                     <p className="mx-2 text-mute">Films</p>
                  </div>
          </Col>
        </Row>
            <Row className="d-flex justify-content-center align-items-center text-center">
                    <div className="col-md-4"><img src={discover1} alt="discover1" className="my-3 img-fluid" /></div>
                    <div className="col-md-4"><img src={discover2} alt="discover2" className="my-3 img-fluid" /></div>
                    <div className="col-md-4"> 
                        <div>
                            <img src={discover3} className="img-fluid"  alt="1" /> 
                        </div>
                        <img src={discover31} className="img-fluid position-absolute text-center" style={{top: 150, left: 180, }} alt="31" /> 
                    </div>
            </Row>
            <Row  className="justify-content-center align-items-center text-center my-3" >
                    <div className="col-md-4"><img src={discover4} alt="discover4" className="my-3 img-fluid" /></div>
                    <div className="col-md-4"><img src={discover5} alt="discover5" className="my-3 img-fluid" /></div>
                    <div className="col-md-4"><img src={discover6} alt="discover6" className="my-3 img-fluid" /></div>
            </Row>
            <Row  className="justify-content-between my-5">
                <Col md="8" className="my-3">
                    <p className="lead">It picks up the words on the page and displays ads that are similar to those words. Then when someone either performs an action or clicks on your page you will get paid.</p>
                </Col>
                <Col md="4" className="justify-content-end d-flex my-3">
                    <button className="btn-lg btn rounded-0" style={{backgroundColor:' #4737FF', color: 'white', width:'222px', height:"50px"}}>see our works</button>
                </Col>
            </Row>
        </div>
    )
}

export default DiscoverGravity
