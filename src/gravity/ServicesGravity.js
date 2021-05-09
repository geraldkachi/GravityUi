import React, { useState } from "react";
import { ReactComponent as ArrorR } from "./assets/Arrow right.svg";
import { ReactComponent as ArrowLL } from "./assets/Arrow left.svg";

import {
  Col,
  Row,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    id: 1,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    id: 2,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    id: 3,
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const ServicesGravity = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <CarouselCaption className="text-danger" />
      </CarouselItem>
    );
  });


  return (
    <div className="container">
      <Row className="justify-content-between align-items-center my-5">
        <Col md="6" className="my-3">
            <div>
                <div className="lead my-3">— Services</div>
                <div className="h1">We love work hard and explore new things that’s why we cover lot of things. Check our service list and view details</div>
            </div>
        </Col>
        <Col md="6" className="my-3">
                <div className="row justify-content-center">
                        <ul className="">
                          <li className="text-muted my-3 mx-3">Multimedia</li>
                          <li className="text-muted my-3 mx-3">Interactive design</li>
                          <li className="text-muted my-3 mx-3">Packaging</li>
                          <li className="text-muted my-3 mx-3">Branding</li>
                        </ul>
                        <ul>
                          <li className="text-muted my-3 mx-3">Creative Strategy</li>
                          <li className="text-muted my-3 mx-3">UI/UX </li>
                          <li className="text-muted my-3 mx-3 text-left">Coding</li>
                        </ul>
                </div>
        </Col>
      </Row>
      <Row>
        <Col className="">
          <div>
            <style>
              {`.custom-tag {
                max-width: 100%;
                width: 825px;
                height: 500px;
                background: black;
                }
                ul {
                  list-style: none;
                }`}
            </style>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
              <CarouselIndicators
                items={items}
                // activeIndex={activeIndex}
                // onClickHandler={goToIndex}
              />
              {slides}

              <div className="my-4">
              <ArrowLL />
              {' '}
              <ArrorR />
              </div>
              {/* <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              /> */}
            </Carousel>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ServicesGravity;

