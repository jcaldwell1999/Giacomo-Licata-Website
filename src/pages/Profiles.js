import React from 'react';
import styled from 'styled-components';
import Box from '../components/Box';
import ImageSlider from '../components/ImageSlider';
import image1 from '../assets/images/profiles/profileImage1.png';
import image2 from '../assets/images/profiles/profileImage2.png';
import giacomo from '../assets/images/giacomo-sm.png';
import carmelo from '../assets/images/carmelo-sm.png';
import domenico from '../assets/images/domenico-sm.png';
import alec from '../assets/images/alec-sm.png';
import gavin from '../assets/images/gavin_sm.png';
import sean from '../assets/images/sean-sm.jpg';

const ProfilesContainer = styled.div`
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

const MeetTheTeam = styled.h1`
  color: #fbf7f5;
  text-align: center;
  margin-bottom: 2rem;
`;

const ProfilesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0;

  
`;

const ProfileItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0;
  &:nth-child(1) {
    border-top-left-radius: 8px;
  }
  &:nth-child(3) {
    border-top-right-radius: 8px;
  }
  &:nth-child(4) {
    border-bottom-left-radius: 8px;
  }
  &:nth-child(6) {
    border-bottom-right-radius: 8px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
  }

  &:hover div {
    opacity: 1;
  }
`;

const ProfileOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fbf7f5;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s;
`;

const ProfileTitle = styled.h3`
  margin: 0;
  font-weight: bold;
`;

const ProfileName = styled.p`
  margin: 0;
`;

const Profiles = () => {
  const staff = [
    { name: 'Giacomo', jobTitle: 'Owner/Barber', image: giacomo },
    { name: 'Carmelo', jobTitle: 'Barber', image: carmelo },
    { name: 'Domenico', jobTitle: 'Barber', image: domenico },
    { name: 'Alec', jobTitle: 'Barber', image: alec },
    { name: 'Gavin', jobTitle: 'Barber', image: gavin },
    { name: 'Sean', jobTitle: 'Barber', image: sean },
  ];

  const images = [
    { src: image1, alt: 'Slide 1' },
    { src: image2, alt: 'Slide 2' },
  ];

  return (
    <ProfilesContainer>
      <TopSection>
        <LeftBox title="Aftershave & Toiletries">
          <p>We now stock a wide range of Proraso Aftershave & Toiletries. Please click here for more information.</p>
        </LeftBox>
          <ImageSlider images={images} />
      </TopSection>
      <MeetTheTeam>MEET THE TEAM</MeetTheTeam>
      <ProfilesGrid>
        {staff.map((member, index) => (
          <ProfileItem key={index}>
            <img src={member.image} alt={member.name} />
            <ProfileOverlay>
              <ProfileTitle>{member.jobTitle}</ProfileTitle>
              <ProfileName>{member.name}</ProfileName>
            </ProfileOverlay>
          </ProfileItem>
        ))}
      </ProfilesGrid>
    </ProfilesContainer>
  );
};

export default Profiles;
