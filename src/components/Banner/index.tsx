import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { NextPage } from "next";

const banner1 = '/icons/banner1.png';
const banner2 = '/icons/banner2.png';
const banner3 = '/icons/banner3.png';
const banner4 = '/icons/banner4.png';

const banners = [banner3, banner2, banner4, banner1];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner: NextPage = () => {
  const [loadImage, setLoadImage] = useState(true);

  useEffect(() => {
    if (!loadImage) {
      const loadImageHandler = setTimeout(() => setLoadImage(true), 5000);
      return () => clearTimeout(loadImageHandler);
    }
  }, [loadImage]);

  return (
    <div className="banner">
      <Carousel
        responsive={responsive}
        showDots={false}
        infinite={true}
        ssr={true}
        autoPlay={false}
      >
        {banners.map((data, i) => (
          <div className="banner-wrapper" key={i}>
            <Image
              className="banner-image"
              src={data}
              alt="banner image"
              layout="fill"
              objectFit="contain"
              onLoad={() => setLoadImage(true)}
              priority
              placeholder="blur"
              blurDataURL={data}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;