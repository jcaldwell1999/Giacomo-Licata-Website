import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import footerLogo from '../assets/images/logo.png';
import facebookIcon from '../assets/images/facebookicon.svg';
import instagramIcon from '../assets/images/instagramiconwhite.svg';
import googleIcon from '../assets/images/googleiconwhite.svg';

const FooterContainer = styled.footer`
  background-color: #222325;
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid #d9d9d9;
  opacity: 0.9;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 800;

  &:hover {
    color: #996e52;
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Logo = styled.img`
  max-width: 200px;
  height: auto;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  & img {
    width: 24px;
    height: 24px;
  }
`;

const CreditText = styled.p`
  color: #aaa;
  font-size: 10px;
  text-align: center;
  margin: 10px 0;
`;

const Footer = () => {
  return (
    <>
      <CreditText>Background by rawpixel.com on Freepik</CreditText>
      <FooterContainer>
        <FooterSection>
          <Logo src={footerLogo} alt="Footer Logo" />
        </FooterSection>
        <FooterSection>
          <FooterNav>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/prices">Prices</FooterLink>
            <FooterLink to="/products">Products</FooterLink>
            <FooterLink to="/location">Location</FooterLink>
            <FooterLink to="/profiles">Profiles</FooterLink>
            <FooterLink to="/news">News</FooterLink>
          </FooterNav>
        </FooterSection>
        <FooterSection>
          <SocialIcons>
            <a href="https://facebook.com"><img src={facebookIcon} alt="Facebook" /></a>
            <a href="https://instagram.com"><img src={instagramIcon} alt="Instagram" /></a>
            <a href="https://www.google.com/search?q=giacomo+licata&rlz=1C1ASUC_enGB652GB652&oq=giacomo+licata&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDwyBggCEEUYPNIBCDI5MTBqMGo5qAIAsAIB&sourceid=chrome&ie=UTF-8#lrd=0x487191dd79204213:0xc3b41a8c31805052,1,,,,"><img src={googleIcon} alt="Google" /></a>
          </SocialIcons>
        </FooterSection>
      </FooterContainer>
    </>
  );
};

export default Footer;
