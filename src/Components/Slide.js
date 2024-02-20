import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "reactstrap";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";

const baseurl = "https://veganessentials.onrender.com/api/v1/banner";

function Slide(args) {
  const [bannerItems, setBannerItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseurl}/get`)
      .then((res) => {
        if (res.data.success) {
          setBannerItems(res.data.data);
        } else {
          console.error("Failed to retrieve banner data");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === bannerItems.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? bannerItems.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = bannerItems.map((item, index) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={index}
    >
      <img src={item.imageUrl} alt={item.metaTitle} style={{ width: "100%" }} />
    </CarouselItem>
  ));

  return (
    <>
      <div style={{ height: "50px" }}></div>
      <Container>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          {...args}
        >
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </Container>
    </>
  );
}

export default Slide;
