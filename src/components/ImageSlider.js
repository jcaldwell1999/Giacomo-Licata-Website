import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

const SliderContainer = styled.div`
  width: 66%;
  max-width: 100%;
  flex: 1;
  .slick-slide img {
    display: block;
    width: 100%;
    height: auto;
    margin: auto;
    border-radius: 8px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledSlider = styled(Slider)`
  width: 100%;

  .slick-prev, .slick-next {
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }

  .slick-dots {
    bottom: 20px;
  }
  
`;

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    pauseOnHover: true,
  };

  return (
    <SliderContainer>
      <StyledSlider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </StyledSlider>
    </SliderContainer>
  );
};

export default ImageSlider;
