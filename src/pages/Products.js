import React from 'react';
import styled from 'styled-components';
import Box from '../components/Box';
import ImageSlider from '../components/ImageSlider';
import sliderImage1 from '../assets/images/products/productsImage1.png'; // Add actual image paths
import sliderImage2 from '../assets/images/myphotos/edited/redone2-bckgroundremoved.png'; // Add actual image paths

import productImage1 from '../assets/images/products/shave-cream.jpg';
import productImage2 from '../assets/images/products/aftershave-cream.jpg';
import productImage3 from '../assets/images/products/pre-shave.jpg';
import productImage4 from '../assets/images/products/after-shave.jpg';
import productImage5 from '../assets/images/products/shaving-cream.jpg';
import productImage6 from '../assets/images/products/shaving-cream-jar.jpg';
import productImage7 from '../assets/images/products/brush-bowl.jpg';
import productImage8 from '../assets/images/products/brush-stand.jpg';
import productImage9 from '../assets/images/products/shaving-mug.jpg';
import productImage10 from '../assets/images/products/shave-stand.jpg';
import productImage11 from '../assets/images/products/metal-stand.jpg';
import productImage12 from '../assets/images/products/sweeny.jpg';
import productImage13 from '../assets/images/products/vent-brush.jpg';
import productImage14 from '../assets/images/products/BlackRedGreen.jpg';
import productImage15 from '../assets/images/products/BlackRedOrange.jpg';
import productImage16 from '../assets/images/products/BlackRedYellowResize.jpg';
import productImage17 from '../assets/images/products/RedOneBlueResize.jpg';
import productImage18 from '../assets/images/products/RedOneGreenResize.jpg';
import productImage19 from '../assets/images/products/RedOneRedResize.jpg';


const ProductsContainer = styled.div`
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

const SectionTitle = styled.h2`
  color: #fbf7f5;
  text-align: center;
  margin: 2rem 0;
`;

const GridGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryItem = styled.div`
  text-align: center;
  background-color: transparent; /* Changed to transparent */

  img {
    width: 100%;
    height: 250px;
    object-fit: crop;
    border-radius: 8px;
  }

  h3 {
    margin: 0.5rem 0 0;
    color: #fbf7f5; /* Ensure the text color contrasts with the background */
  }

  p {
    margin: 0;
    color: #fbf7f5; /* Ensure the text color contrasts with the background */
  }
`;

const Products = () => {
  const images = [
    { src: sliderImage1, alt: 'Proraso' },
    { src: sliderImage2, alt: 'Product 2' },
  ];

  const products = [
    { smallImage: productImage1, title: 'Pro Shaving Cream 100ml', price: '£9.50' },
    { smallImage: productImage2, title: 'After Shave Cream', price: '£11.50' },
    { smallImage: productImage3, title: 'Pre Shaving Cream', price: '£9.50' },
    { smallImage: productImage4, title: 'After Shave 100ml', price: '£11.50' },
    { smallImage: productImage5, title: 'Shaving Cream Tube', price: '£6.00' },
    { smallImage: productImage6, title: 'Shaving Cream Jars Sensitive', price: '£6.00' },
    { smallImage: productImage7, title: 'Omega Shaving Brush, Bowl, Stand Set', price: '£19.50' },
    { smallImage: productImage8, title: 'Omega Pure Bristle Brush with Stand', price: '£9.50' },
    { smallImage: productImage9, title: 'Shaving Mug (Red, Black, Blue)', price: '£28.50' },
    { smallImage: productImage10, title: 'Frank Shaving 3 Piece Set', price: '£29.50' },
    { smallImage: productImage11, title: 'Razor Metal Stand', price: '£10.50' },
    { smallImage: productImage12, title: 'Sweeney Todd Razor', price: '£29.50' },
    { smallImage: productImage13, title: 'Vent Brush', price: '£2.50' },
    { smallImage: productImage14, title: 'Hair Powder - Semi Matte', price: '£7.50' },
    { smallImage: productImage15, title: 'Hair Powder - Volumizing Matte', price: '£7.50' },
    { smallImage: productImage16, title: 'Hair Powder - Strong Touch', price: '£7.50' },
    { smallImage: productImage17, title: 'Hair Wax - Blue', price: '£10.00' },
    { smallImage: productImage18, title: 'Hair Wax - Green', price: '£10.00' },
    { smallImage: productImage19, title: 'Hair Wax - Red', price: '£10.00' },
    
  ];

  return (
    <ProductsContainer>
      <TopSection>
        <LeftBox title="Our Premium Products">
          <p>Explore our range of premium products including aftershaves, toiletries, and more. 
            Click on any product to learn more.</p>
        </LeftBox>
        <ImageSlider images={images} />
      </TopSection>

      <SectionTitle>OUR PRODUCTS</SectionTitle>
      <GridGallery>
        {products.map((product, index) => (
          <GalleryItem key={index}>
            <img src={product.smallImage} alt={`Product ${index + 1}`} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </GalleryItem>
        ))}
      </GridGallery>
    </ProductsContainer>
  );
};

export default Products;
