import React from 'react'
import { Col,Row } from 'reactstrap';
  import { ReactComponent as ColIcon } from "./assets/Colholder.svg";
  import img1 from "./assets/Video.svg"


const HeroGravity = () => {
    return (
        <>
            <div className="container pt-3 w-100">
            <style>
              {`@media screen and ( 567px ) {
                boom {
                    dispplay: 100%;
                    width: 825px;
                    height: 500px;
                    background: black;
                }
                }
               `}
            </style>
                <Row className="mx-auto justify-content-betweenr">
                    <Col sm="6" className="px-0 col-md-6 my-3">
                        <div className="pt-3" style={{position:''}}>
                                <div className="h2" style={{fontSize:"60px", fontWeight: 700}}>Work around you and your team</div>
                                <p className="lead text-left py-3" style={{fontFamily:'Fira Sans', color:'#222'}}>From ads that dance or sing to MTV-like commercials, online advertisers are now using a new type of technology “rich media” to attract consumers.</p>
                                <button className="btn rounded-0 btn-lg p-3 my-4" style={{backgroundColor:'#4737FF', color:"white", width: '189px'}}>Get Started</button>
                        </div>
                        <div className="d-flex justify-content-evenly align-items-center my-5"> 
                            <span>01</span> 
                                <div className="progress w-75 mt-5" style={{height: '2px'}}>
                                    <div className="progress-bar w-50 bg-dark"></div> 
                                </div>
                            <span>03</span>
                        </div>
                    </Col>
                    <Col sm="6" className="px-0 m-0 mt-3">
                        <ColIcon className="img-fluid" style={{ height:""}} />
                        <div className="d-none d-lg-block">
                            <img style={{position:'absolute', top: 180, left:-250}} src={img1} className="img-fluid" alt="videos" />
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default HeroGravity
