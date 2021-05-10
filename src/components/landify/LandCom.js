import React from "react";

import { ReactComponent as Airbnb } from "../../assest/images/AirbnbLogo.svg";
import { ReactComponent as Hubspot } from "../../assest/images/HubspotLogo.svg";
import { ReactComponent as Microsoft } from "../../assest/images/MicrosoftLogo.svg";
import { ReactComponent as Walmart } from "../../assest/images/WalmartLogo.svg";
import { ReactComponent as Google } from "../../assest/images/GoogleLogo.svg";
import { ReactComponent as FedEx } from "../../assest/images/FedExLogo.svg";

import { Container, Row, Col } from "reactstrap";

const LandCom = () => {
  return (
    <>
      <Container className="text-center mx-auto my-5">
        <hr className="w-75" />
        <Row>
          <Col sm="2">
            <Airbnb className="img-fluid my-3" />
          </Col>
          <Col sm="2">
            <Hubspot className="img-fluid mx-2 my-3" />
          </Col>
          <Col>
            <Google className="img-fluid mx-2 my-3" />
          </Col>
          <Col sm="2">
            <Microsoft className="img-fluid mx-2 my-3" />
          </Col>
          <Col sm="2">
            <Walmart className="img-fluid mx-2 my-3" />
          </Col>
          <Col sm="2">
            <FedEx className="img-fluid mx-2 my-3" />
          </Col>
        </Row>
        <hr className="w-75" />
      </Container>
    </>
  );
};

export default LandCom;
