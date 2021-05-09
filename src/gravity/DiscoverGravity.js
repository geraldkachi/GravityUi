import React from 'react'
import { Col, Row } from "reactstrap";

import discover1 from "./assets/discover1.png"
import discover2 from "./assets/discover2.png"
import discover3 from "./assets/discover3.png"
import discover4 from "./assets/discover4.png"
import discover5 from "./assets/discover5.png"
import discover6 from "./assets/discover6.png"

const DiscoverGravity = () => {
    return (
        <div className="container">
        <Row className="justify-content-between align-items-center my-5">
          <Col md="6" className="my-3">
              <div>
                  <div className="lead my-3">— our works</div>
                  <div className="h1">Discover our Work</div>
              </div>
          </Col>
          <Col md="6" className="my-3">
                  <div className="row justify-content-center align-items-center">
                     <p className="mx-2" style={{color:'#1434E1'}}>All</p>
                     <p className="mx-2 text-mute">Branding</p>
                     <p className="mx-2 text-mute">Web</p>
                     <p className="mx-2 text-mute">Development</p>
                     <p className="mx-2 text-mute">Films</p>
                  </div>
          </Col>
        </Row>
        <Row>
            <Col md="3" sm="6">
                <div><img src={discover1} alt="discover1" className="my-3 img-fluid" /></div>
                <div><img src={discover2} alt="discover2" className="my-3 img-fluid" /></div>
                <div><img src={discover3} alt="discover3" className="my-3 img-fluid" /></div>
                <div><img src={discover4} alt="discover4" className="my-3 img-fluid" /></div>
                <div><img src={discover5} alt="discover5" className="my-3 img-fluid" /></div>
                <div><img src={discover5} alt="discover5" className="my-3 img-fluid" /></div>
            </Col>
        </Row>
        </div>
    )
}

export default DiscoverGravity
