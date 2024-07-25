import React from 'react';
import styled from 'styled-components';
import stockbarberimage from '../assets/images/stockbarberimage.jpg';

const HomeContainer = styled.div`

  background-image: url(${stockbarberimage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Slogan = styled.div`
  font-size: 36px;
  font-weight: 800;
  text-shadow: 3px 4px 4.5px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
`;

const Title = styled.div`
  font-size: 128px;
  font-weight: 800;
  text-shadow: 3px 4px 4.5px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 64px;
    text-align: center;
  }
`;

const SubTitle = styled.div`
  font-size: 64px;
  font-weight: 800;
  text-shadow: 3px 4px 4.5px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
  }
`;

const Address = styled.div`
  font-size: 36px;
  font-weight: 800;
  text-shadow: 3px 4px 4.5px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Slogan>WHERE TRADITION MEETS TREND</Slogan>
      <Title>GIACOMO LICATA</Title>
      <SubTitle>Est. 1986</SubTitle>
      <Address>374 FILTON AVENUE, HORFIELD, BRISTOL, BS7 0BE</Address>
      <Address>0117 823 6663</Address>
    </HomeContainer>
  );
};

export default Home;
