import React from 'react';
import styled from 'styled-components';
import Box from '../components/Box';
import ImageSlider from '../components/ImageSlider';
import image1 from '../assets/images/prices/pricesImage1.png';
import image2 from '../assets/images/prices/pricesImage2.png';
import image3 from '../assets/images/myphotos/blackred1.jpg';

const PricesContainer = styled.div`
  padding: 6rem 2rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 7rem 2rem 1rem;
  }
`;

const TopSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftBox = styled(Box)`
  flex: 1;
`;

const SliderBox = styled.div`
  flex: 2;
  position: relative;
`;

const BottomSection = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PricesBox = styled(Box)`
  flex: 2;
  justify-content: center;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  height: auto;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

const ServicesBox = styled(Box)`
  flex: 1;
`;

const SpecialOccasionsBox = styled(Box)`
  flex: 1;
`;

const Prices = () => {
  const images = [
    { src: image1, alt: 'Slide 1' },
    { src: image2, alt: 'Slide 2' },
  ];

  return (
    <PricesContainer>
      <TopSection>
        <LeftBox title="Aftershave & Toiletries">
          <p>We now stock a wide range of Proraso Aftershare & Toiletries, please click here for more information</p>
        </LeftBox>
          <ImageSlider images={images} />
      </TopSection>
      <BottomSection>
        <PricesBox title="Prices">
          <div>
            <p>Men's Haircut - £14.00</p>
            <p>Skin-Fade - £16.50</p>
            <p>Boys (under 11) - £13.00</p>
            <p>W-C-B - £13.50</p>
            <p>O.A.P - £9.50</p>
            <p>O.A.P (WCB)</p>
            <p>Flattop - £15.00</p>
            <p>Shave - £16.50</p>
            <p>Restyling - £16.50</p>
            <p>Beard Trim - £6.00</p>
            <p style={{fontWeight: "bold"}}>Ear Piercing</p>
            <p>1 Ear - £20.00</p>
            <p>2 Ears - £35.00</p>
            <p style={{fontWeight: "bold"}}>CASH ONLY</p>
            <p>All prices are subject to change depending on length & style required</p>
            <p>*OAP haircuts Mon - Thurs</p>
            <p>**Cut throat shaves are by appointment only please</p>
          </div>
        </PricesBox>
        <ServicesContainer>
          <ServicesBox title="Services">
            <p>
              As well as gentlemen's haircuts we are pleased to offer ear piercing for
              men and women, or when England play football why not have St Georges 
              cross painted on your head, but don't worry, it will wash off!
            </p>
            <p>
              A wide range of products are available including studs for your ears,
              and if something's not in stock don't be afraid to ask, we may be able 
              to order it in for you or tell you where you can purchase it.
            </p>
            <p>
              Come and see us for yourself, enjoy our warm & friendly atmosphere and tell a friend!
            </p>
          </ServicesBox>
          <SpecialOccasionsBox title="Special Occasions">
            <p>
              Special bookings can be made for weddings, stag do's, birthday's and 
              special occassions. For more information contact Giacomo on 0117 923 
              6663.
            </p>
          </SpecialOccasionsBox>
        </ServicesContainer>
      </BottomSection>
    </PricesContainer>
  );
};

export default Prices;
