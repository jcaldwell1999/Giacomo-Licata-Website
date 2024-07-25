import React, { useState } from 'react';
import styled from 'styled-components';
import Box from '../components/Box';
import YouTubeVideo from '../components/YouTubeVideo'; // Update with your actual image path

// Example image paths
import newsImage1 from '../assets/images/news/carm-lee-small.jpg';
import newsImage1Large from '../assets/images/news/carm-lee-large.jpg';
import newsImage2 from '../assets/images/news/james-small.jpg';
import newsImage2Large from '../assets/images/news/james-large.jpg';
import newsImage3 from '../assets/images/news/bet-small.jpg';
import newsImage3Large from '../assets/images/news/bet-large.jpg';
import newsImage4 from '../assets/images/news/30-sm.jpg';
import newsImage4Large from '../assets/images/news/30-sm.jpg';
import newsImage5 from '../assets/images/news/lee-small.jpg';
import newsImage5Large from '../assets/images/news/lee-large.jpg';
import newsImage6 from '../assets/images/news/25years.png';
import newsImage6Large from '../assets/images/news/25years-large.png';
import newsImage7 from '../assets/images/news/john-small.jpg';
import newsImage7Large from '../assets/images/news/john-large.jpg';
import newsImage8 from '../assets/images/news/ian-small.jpg';
import newsImage8Large from '../assets/images/news/ian-large.jpg';
import newsImage9 from '../assets/images/news/stone-small.jpg';
import newsImage9Large from '../assets/images/news/stone-large.jpg';
import newsImage10 from '../assets/images/news/frank-small.jpg';
import newsImage10Large from '../assets/images/news/frank-large.jpg';
import newsImage11 from '../assets/images/news/rovers-manager-small.jpg';
import newsImage11Large from '../assets/images/news/rovers-manager-large.jpg';
import newsImage12 from '../assets/images/news/kevin-maggs-small.jpg';
import newsImage12Large from '../assets/images/news/kevin-maggs-large.jpg';
import newsImage13 from '../assets/images/news/lee-haskins-small.jpg';
import newsImage13Large from '../assets/images/news/lee-haskins-large.jpg';
import newsImage14 from '../assets/images/news/8-small.png';
import newsImage14Large from '../assets/images/news/8-large.png';
import newsImage15 from '../assets/images/news/7-small.png';
import newsImage15Large from '../assets/images/news/7-large.png';
import newsImage16 from '../assets/images/news/6-small.png';
import newsImage16Large from '../assets/images/news/6-large.png';
import newsImage17 from '../assets/images/news/4-small.png';
import newsImage17Large from '../assets/images/news/4-large.png';
import newsImage18 from '../assets/images/news/2-small.png';
import newsImage18Large from '../assets/images/news/2-large.png';
import newsImage19 from '../assets/images/news/1-small.png';
import newsImage19Large from '../assets/images/news/1-large.png';
import newsImage20 from '../assets/images/news/1.png';
import newsImage20Large from '../assets/images/news/1-l.jpg';
import newsImage21 from '../assets/images/news/2.png';
import newsImage21Large from '../assets/images/news/2-l.jpg';
import newsImage22 from '../assets/images/news/3.jpg';
import newsImage22Large from '../assets/images/news/3-l.jpg';
import newsImage23 from '../assets/images/news/4.jpg';
import newsImage23Large from '../assets/images/news/4-l.jpg';
import newsImage24 from '../assets/images/news/5.jpg';
import newsImage24Large from '../assets/images/news/5-l.jpg';
import newsImage25 from '../assets/images/news/6.jpg';
import newsImage25Large from '../assets/images/news/6-l.jpg';
import newsImage26 from '../assets/images/news/7.jpg';
import newsImage26Large from '../assets/images/news/7-l.jpg';
import newsImage27 from '../assets/images/news/8.jpg';
import newsImage27Large from '../assets/images/news/8-l.jpg';
import newsImage28 from '../assets/images/news/9.jpg';
import newsImage28Large from '../assets/images/news/9-l.jpg';



import collection1 from '../assets/images/news/collection/collection1.jpg';
import collection2 from '../assets/images/news/collection/collection2.jpg';
import collection3 from '../assets/images/news/collection/collection3.jpg';
import collection4 from '../assets/images/news/collection/collection4.jpg';
import collection5 from '../assets/images/news/collection/collection5.jpg';
import collection6 from '../assets/images/news/collection/collection6.jpg';
import collection7 from '../assets/images/news/collection/collection7.jpg';
import collection8 from '../assets/images/news/collection/collection8.jpg';



const NewsContainer = styled.div`
  padding: 6rem 2rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
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
  font-size: 2rem;
`;

const YouTubeBox = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;

const SectionTitle = styled.h2`
  color: #fbf7f5;
  text-align: center;
  margin: 2rem 0;
`;

const GridGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
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

const GalleryOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fbf7f5;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s;
`;

const GalleryTitle = styled.h3`
  margin: 0;
  font-weight: bold;
`;

const ImageModal = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  max-width: 90%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
`;

const CloseButton = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #fbf7f5;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const News = () => {
  const [modalContent, setModalContent] = useState(null);

  const handleImageClick = (content) => {
    setModalContent(content);
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  const newsItems = [
    {
      smallImage: newsImage1,
      largeImage: newsImage1Large,
      title: 'Carm with World Champion Lee Haskins',
    },
    {
      smallImage: newsImage2,
      largeImage: newsImage2Large,
      title: `Double Champ James 'Lights Out' Lee`,
    },
    {
      smallImage: newsImage3,
      largeImage: newsImage3Large,
      title: 'Double or quits for return clash',
    },
    {
      smallImage: newsImage4,
      largeImage: newsImage4Large,
      title: 'Giacomo Licata Celebrates 30 Years',
    },
    {
      smallImage: newsImage5,
      largeImage: newsImage5Large,
      title: 'World Title Champion Lee Haskins',
    },
    {
      smallImage: newsImage6,
      largeImage: newsImage6Large,
      title: `Giacomo Licata 25 Years in Business`,
    },
    {
      smallImage: newsImage7,
      largeImage: newsImage7Large,
      title: 'News Title 7',
    },
    {
      smallImage: newsImage8,
      largeImage: newsImage8Large,
      title: 'News Title 8',
    },
    {
      smallImage: newsImage9,
      largeImage: newsImage9Large,
      title: 'Adrian Stone',
    },
    {
      smallImage: newsImage10,
      largeImage: newsImage10Large,
      title: 'Frank Bruno',
    },
    {
      smallImage: newsImage11,
      largeImage: newsImage11Large,
      title: 'News Title 11',
    },
    {
      smallImage: newsImage12,
      largeImage: newsImage12Large,
      title: 'Giacomo Licata & Kevin Maggs',
    },
    {
      smallImage: newsImage13,
      largeImage: newsImage13Large,
      title: 'Giacomo Licata & Lee Haskins with his belt',
    },
    {
      smallImage: newsImage14,
      largeImage: newsImage14Large,
      title: 'Giacomo Licata Fund-raiser',
    },
    {
      smallImage: newsImage15,
      largeImage: newsImage15Large,
      title: 'Giacomo Licata South Africa World Cup bet for charity',
    },
    {
      smallImage: newsImage16,
      largeImage: newsImage16Large,
      title: 'Bristol for World Cup host city',
    },
    {
      smallImage: newsImage17,
      largeImage: newsImage17Large,
      title: `Giac's Bet on new England manager`,
    },
    {
      smallImage: newsImage18,
      largeImage: newsImage18Large,
      title: 'Giac spray-painting heads',
    },
    {
      smallImage: newsImage19,
      largeImage: newsImage19Large,
      title: `England vs Italy`,
    },
    {
      smallImage: newsImage21,
      largeImage: newsImage21Large,
      title: 'St George flag painting',
    },
    {
      smallImage: newsImage22,
      largeImage: newsImage22Large,
      title: 'Glass of wine and a short back and sides',
    },
    {
      smallImage: newsImage23,
      largeImage: newsImage23Large,
      title: `Giacomo's flag fiesta`,
    },
    {
      smallImage: newsImage24,
      largeImage: newsImage24Large,
      title: 'Can Junior cut it at Rovers?',
    },
    {
      smallImage: newsImage25,
      largeImage: newsImage25Large,
      title: 'Red nose day',
    },
    {
      smallImage: newsImage26,
      largeImage: newsImage26Large,
      title: 'Midweek Misery',
    },
    {
      smallImage: newsImage27,
      largeImage: newsImage27Large,
      title: `Rivals' bet carries a lifetime penalty`,
    },
    {
      smallImage: newsImage28,
      largeImage: newsImage28Large,
      title: 'Giacomo Licata, Lee Haskins &',
    },
  ];

  const collectionItems = [
    {
      smallImage: collection1,
      largeImage: collection1,
      title: `Giacomo's Collection`,
    },
    {
      smallImage: collection2,
      largeImage: collection2,
      title: 'Shirt signed by the Scottish Rugby Team',
    },
    {
      smallImage: collection3,
      largeImage: collection3,
      title: 'Shirt signed by the Irish Rugby Team',
    },
    {
      smallImage: collection4,
      largeImage: collection4,
      title: 'Shirt signed by the English Rugby Team',
    },
    {
      smallImage: collection5,
      largeImage: collection5,
      title: 'Shirt signed by the Italian Rugby Team',
    },
    {
      smallImage: collection6,
      largeImage: collection6,
      title: 'Shirt signed by the Welsh Rugby Team',
    },
    {
      smallImage: collection7,
      largeImage: collection7,
      title: 'Giac & Lee Haskins with his belt',
    },
    
  ];

  return (
    <NewsContainer>
      <TopSection>
        <LeftBox title="GIACOMO LICATA SETS WORLD RECORD FOR HIGHEST HAIRCUT">
          {/* Additional content can go here */}
        </LeftBox>
        <YouTubeBox>
          <YouTubeVideo videoId="4bVZKPoG5Fc"/>
        </YouTubeBox>
      </TopSection>

      <SectionTitle>IN THE NEWS</SectionTitle>
      <GridGallery>
        {newsItems.map((item, index) => (
          <GalleryItem key={index} onClick={() => handleImageClick(item.largeImage)}>
            <img src={item.smallImage} alt={`News ${index + 1}`} />
            <GalleryOverlay>
              <GalleryTitle>{item.title}</GalleryTitle>
            </GalleryOverlay>
          </GalleryItem>
        ))}
      </GridGallery>

      <SectionTitle>GIAC'S COLLECTION</SectionTitle>
      <GridGallery>
        {collectionItems.map((item, index) => (
          <GalleryItem key={index} onClick={() => handleImageClick(item.largeImage)}>
            <img src={item.smallImage} alt={`Collection ${index + 1}`} />
            <GalleryOverlay>
              <GalleryTitle>{item.title}</GalleryTitle>
            </GalleryOverlay>
          </GalleryItem>
        ))}
      </GridGallery>

      <ImageModal show={modalContent !== null} onClick={handleCloseModal}>
        {modalContent && (
          <ModalContent>
            <ModalImage src={modalContent} alt="Enlarged" />
            <CloseButton onClick={handleCloseModal}>Close</CloseButton>
          </ModalContent>
        )}
      </ImageModal>
    </NewsContainer>
  );
};

export default News;
