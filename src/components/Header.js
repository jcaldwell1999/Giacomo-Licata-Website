import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import bannerLogo from '../assets/images/logo.png';

const HeaderContainer = styled.header`
  background-color: ${(props) => (props.scrolled ? '#242424' : 'transparent')};
  border-bottom: 1px solid #d9d9d9;
  padding: 10px 20px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
  
`;

const TopBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  max-width: 200px;
  height: auto;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 20px;

  @media (max-width: 768px) {
    align-items: center;
    gap: 10px;
    width: 100%;
    justify-content: center;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 800;

  &.active {
    color: #996e52;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  }
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <TopBanner>
        <Logo src={bannerLogo} alt="Giacomo Licata Logo" />
        <NavBar>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavLink>
          <NavLink to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</NavLink>
          <NavLink to="/prices" className={location.pathname === '/prices' ? 'active' : ''}>Prices</NavLink>
          <NavLink to="/products" className={location.pathname === '/products' ? 'active' : ''}>Products</NavLink>
          <NavLink to="/location" className={location.pathname === '/location' ? 'active' : ''}>Location</NavLink>
          <NavLink to="/profiles" className={location.pathname === '/profiles' ? 'active' : ''}>Profiles</NavLink>
          <NavLink to="/news" className={location.pathname === '/news' ? 'active' : ''}>News</NavLink>
        </NavBar>
      </TopBanner>
    </HeaderContainer>
  );
};

export default Header;
