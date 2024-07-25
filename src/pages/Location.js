import React from 'react';
import styled from 'styled-components';
import Box from '../components/Box';
import barberShopImage from '../assets/images/outside-shop.png'; // Update the path to your image

const LocationContainer = styled.div`
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

const AddressBox = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ImageBox = styled(Box)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

`;

const BarberImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 0;
  padding: 0;
  
`;

const MapSection = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 450px;
  border: 0;
  border-radius: 8px;
`;

const Location = () => {
  return (
    <LocationContainer>
      <TopSection>
        <AddressBox title="Address">
          <div>
            <p>374 Filton Avenue, Horfield, Bristol BS7 0BE</p>
            <p>Telephone: 0117 923 6663</p>
          </div>
          <div>
            <h2>Opening Times</h2>
            <p>Mon-Fri: 9am - 7pm</p>
            <p>Sat: 9am - 5pm</p>
            <p>Sun: Closed</p>
          </div>
        </AddressBox>
        <ImageBox style={{padding: 0}}>
          <BarberImage src={barberShopImage} alt="Barbershop" />
        </ImageBox>
      </TopSection>
      <MapSection>
        <h1 style={{color: "#fbf7f5"}}>FIND US ON MAPS</h1>
        <MapIframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.999317481905!2d-2.576987623075407!3d51.49488001161741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487191dd79204213%3A0xc3b41a8c31805052!2sGiacomo%20Licata!5e0!3m2!1sen!2suk!4v1720784502194!5m2!1sen!2suk"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></MapIframe>
      </MapSection>
    </LocationContainer>
  );
};

export default Location;
