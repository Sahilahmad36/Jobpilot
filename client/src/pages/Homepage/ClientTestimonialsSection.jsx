import React from "react";
import { Button } from "../../components/Button/Button";
import { Img } from "../../components/Img/Img";
import { Text } from "../../components/Text/Text";
import { RatingBar } from "../../components/RatingBar/index";
import { Slider } from "../../components/Slider/index";
import { Heading } from "../../components/Heading/Heading";
import "./TestimonialsSection.css";

export default function ClientTestimonialsSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="testimonials-section">
      <div className="container">
        <Heading as="h2" className="testimonials-heading">
          Clients Testimonial
        </Heading>
      </div>
      <div className="slider-container">
        <Button
          onClick={() => sliderRef?.current?.slidePrev()}
          className="arrow-button left-arrow"
        >
          <img src="images/left.png" alt="Left Arrow" />
        </Button>
        <div className="slider-wrapper">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            responsive={{
              0: { items: 1 },
              551: { items: 1 },
              1051: { items: 2 },
              1441: { items: 3 },
            }}
            disableDotsControls
            activeIndex={sliderState}
            onSlideChanged={(e) => setSliderState(e?.item)}
            ref={sliderRef}
            items={[...Array(9)].map((_, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-content">
                  <RatingBar value={1} isEditable={true} size={28} className="rating-bar" />
                  <Text className="testimonial-text" as="p">
                    "Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat
                    metus, in faucibus est."
                  </Text>
                </div>
                <div className="customer-info">
                  <Img
                    src="images/img1.png"
                    alt="Customer"
                    className="customer-image"
                  />
                  <div className="customer-details">
                    <Text as="p" className="customer-name">
                      Robert Fox
                    </Text>
                    <Text size="textxs" as="p" className="customer-role">
                      UI/UX Designer
                    </Text>
                  </div>
                  <Img src="images/Quote.png" alt="Quote" className="quote-icon" />
                </div>
              </div>
            ))}
          />
        </div>
        <Button
          onClick={() => sliderRef?.current?.slideNext()}
          className="arrow-button right-arrow"
        >
          <img src="images/right.png" alt="Right Arrow" />
        </Button>
      </div>
      <div className="pagination">
        <div className="pagination-dots">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              onClick={() => sliderRef?.current?.slideTo(i * sliderRef?.current?.state?.itemsInSlide)}
              className={`pagination-dot ${
                sliderState >= i * (sliderRef?.current?.state?.itemsInSlide || 1) &&
                sliderState < (i + 1) * (sliderRef?.current?.state?.itemsInSlide || 1)
                  ? 'active'
                  : ''
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
