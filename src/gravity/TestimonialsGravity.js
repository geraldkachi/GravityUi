import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  // CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row,
  Col,
} from "reactstrap";
import woman from "./assets/woman.png";
import { ReactComponent as ArrorR } from "./assets/Arrow right.svg";
import { ReactComponent as ArrowLL } from "./assets/Arrow left.svg";

const items = [
  {
    src: woman,
    altText: "Slide 1",
    caption: "Slide 1",
  },
  {
    src: woman,
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src: woman,
    altText: "Slide 3",
    caption: "Slide 3",
  },
];
const itemstext = [
  {
    testimo: "— Testimonials",
    prof: "Professionals in their craft! All products were super great with strong attention to details, and overall vibe",
    pol: "Polina Kuzina",
    mang: "Manager at Craftwork",
  },
  {
    testimo: "— Testimonials test 1",
    prof: "Professionals in their craft! All products were super great with strong attention to details, and overall vibe",
    pol: "Polina Kuzina 1",
    mang: "Manager at Craftwork 1",
  },
  {
    testimo: "— Testimonials test 2",
    prof: "Professionals in their craft! All products were super great with strong attention to details, and overall vibe",
    pol: "Polina Kuzina 2",
    mang: "Manager at Craftwork 2",
  },
];

const TestimonialsGravity = () => {
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
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          // captionText={item.caption}
          // captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  const slidestext = itemstext.map((item) => {
    const { testimo, prof, pol, mang } = item;
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.testimo}
      >
        <div className="lead my-3">{testimo}</div>
        <div className="h1">{prof}</div>
        <div className="my-5">
          <div className="my-3">{pol}</div>
          <div className="my-3 text-muted">{mang}</div>
        </div>
      </CarouselItem>
    );
  });


  return (
    <div className="" style={{ backgroundColor: "#E5E5E5" }}>
      <div className="container">
        <Row className="justify-content-between align-items-center my-5">
          <Col md="6" className="my-3">
            <div className="px-2">
              <Carousel
                interval={false}
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                className="d-none"
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
                {slidestext}
              </Carousel>
              <div className="my-4" >
                <ArrowLL onClick={previous} />
                <ArrorR className="ml-3" onClick={next} />
              </div>
            </div>
          </Col>

          <Col md="6">
            <Carousel
              interval={false}
              activeIndex={activeIndex}
              next={next}
              previous={previous}
            >
              <CarouselIndicators
              className="d-none"
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {slides}
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
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TestimonialsGravity;

