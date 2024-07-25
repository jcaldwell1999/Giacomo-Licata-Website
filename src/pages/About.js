import React from 'react';
import styled from 'styled-components';
import Box from '../components/Box';
import ImageSlider from '../components/ImageSlider';
import YouTubeVideo from '../components/YouTubeVideo';
import image1 from '../assets/images/aboutimage1.jpg';
import image2 from '../assets/images/aboutimage2.jpg';
import helpImage from '../assets/images/hair-wash.jpg';
import customerImage from '../assets/images/helping-customer.jpg';
import stylesImage from '../assets/images/styles.jpg';

const AboutContainer = styled.div`
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

const OpeningTimesBox = styled(Box)`
  flex: 1;
  
`;

const SliderBox = styled(Box)`
  flex: 2;
  position: relative; /* Ensures it respects the container */
`;

const BottomSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContentBox = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  p {
    margin: 0.5rem 0; /* Add margin for paragraph spacing */
  }
`;

const VideoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;


const About = () => {
  const images = [
    { src: image1, alt: 'Slide 1' },
    { src: image2, alt: 'Slide 2' },
  ];

  return (
    <AboutContainer>
      <TopSection>
        <OpeningTimesBox title="Opening Times">
          <p>Open Six Days A Week Except For Bank Holidays</p>
          <p>Mon-Fri: 9am - 5:30pm</p>
          <p>Sat: 8am - 5pm</p>
          <p>Sun: Closed</p>
          <p>OAP Rates Monday to Thursday</p>
          <p>No Appointment Needed</p>
        </OpeningTimesBox>
          <ImageSlider images={images} />
      </TopSection>
      <BottomSection>
        <ContentBox title="Help us help you" image={helpImage}>
          <p>
            We do wash hair at Giacomos and there is a small extra price to pay. 
            Clean hair makes cutting and creating your style easier for us and gives
            you a better finish to your cut. If you do not want a wash we kindly 
            ask that you wash any gel, wax or spray from your hair before you visit 
            us.
          </p>
          <p>
            When washing the wax from your hair put the shampoo on your hair 
            before you get it wet, get a good lather and then wash as normal.  
          </p>
        </ContentBox>
        <ContentBox title="Helping the Customer" image={customerImage}>
          <p>
            If you need a particular job done we are full of useful 
            information. We talk to our clients and know their backgrounds, from 
            local tradesmen to financial advisors. That leaky pipe, decorating, 
            garden renovations… the list is endless. Just ask!
          </p>
        </ContentBox>
        <ContentBox title="Styles" image={stylesImage}>
          <p>
            It may be the traditional gents short back and sides, flat top, mohawk, 
            wedge, boston, spikey, shaved pattern, long layered cut, short layered 
            cut or something else unique to you, whatever your style we can be of 
            service! 
          </p>
        </ContentBox>
      </BottomSection>
      <VideoSection>
        <ContentBox title="I know what you did this summer">
        <YouTubeVideo
          videoId="_4s2QAaKvlo"
        />
        </ContentBox>
        <ContentBox title="Giacomo Licata Barber Shop Bristol">
        <YouTubeVideo
          videoId="8tXIz-b66aY"
        />
        </ContentBox>
      </VideoSection>
    </AboutContainer>
  );
};

export default About;
