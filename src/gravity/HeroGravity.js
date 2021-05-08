import React from 'react'
import {
    Card, 
    Col,Row,
    Input
  } from 'reactstrap';
  import { ReactComponent as ColIcon } from "./assets/Colholder.svg";
//   import img1 from "../images/smallchart.svg"


const HeroGravity = () => {
    return (
        <div className="mx-0 min-vh-100 mt-3 container d-flex align-items-center justify-content-center">
            <Col sm="6" className="px-0">
                <Card className="border-0 my-2 mx-0 container">
                   <div className="my-auto">
                        <div className="h2 text-left" style={{fontSize:"60px", fontWeight: 700}}>Work around you and your team</div>
                        <p className="text-lead">From ads that dance or sing to MTV-like commercials, online advertisers are now using a new type of technology “rich media” to attract consumers.</p>
                    </div>
                </Card>
            </Col>
            <Col sm="6" className="px-0 w-100 overflow-hidden">
                <ColIcon className="overflow-hidden" style={{ height:"840px"}} />
            </Col>
        </div>
    )
}

export default HeroGravity
