import React from "react";
import { Row, Col } from "reactstrap";
import woman from "./assets/woman.png";
import { ReactComponent as ArrorR } from "./assets/Arrow right.svg";
import { ReactComponent as ArrowLL } from "./assets/Arrow left.svg";

const TestimonialsGravity = () => {
  return (
    <div className="" style={{backgroundColor:"#E5E5E5"}}>
    <div className="container">
      <Row className="justify-content-between align-items-center my-5">
        <Col md="6" className="my-3">
          <div className="px-2">
            <div className="lead my-3">— Testimonials</div>
            <div className="h1">
              "Professionals in their craft! All products were super great with
              strong attention to details, and overall vibe"
            </div>
            <div className="my-5">
                <div className="my-3">Polina Kuzina</div>
                <div className="my-3 text-muted">Manager at Craftwork</div>
            </div>

            <div className="my-4">
              <ArrowLL />
              <ArrorR className="ml-3" />
            </div>
          </div>
        </Col>
        <Col md="6">
          <div>
            <img src={woman} alt="woman" className="img-fluid" />
          </div>
        </Col>
      </Row>
    </div>
    </div>
  );
};

export default TestimonialsGravity;
