import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  background: #333; /* Dark background */
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #444; /* Subtle border */
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const BoxTitle = styled.h2`
  margin-bottom: 1rem;
  color: #e6e6e6; /* Light text color */
  border-bottom: 2px solid #555; /* Subtle underline */
  padding-bottom: 0.5rem;
`;

const BoxImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  display: block;
  margin: 0;
`;

const BoxContent = styled.div`
  color: #ccc; /* Light text color */
`;

const Box = ({ title, children, image }) => {
  return (
    <StyledBox>
      {image && <BoxImage src={image} alt={title} className="box-image" />}
      {title && <BoxTitle>{title}</BoxTitle>}
      <BoxContent>
        {children}
      </BoxContent>
    </StyledBox>
  );
};

export default Box;
