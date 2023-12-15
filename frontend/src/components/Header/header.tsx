import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import { StyledLink } from '../../utils/style/Atoms';
import styled from 'styled-components';

const HomeLogo = styled.img<{ onTop: boolean }>`
  transition : all 0.3s ease;
  height: ${({ onTop }) => (onTop ? '45px' : '35px')};  
  z-index: 1000;
  position: relative;

  @media (max-width: 1090px) {
    height: 35px; 
  }
`;

const NavContainer = styled.nav<{ onTop: boolean }>`
  transition : all 0.3s ease;
  padding: ${({ onTop }) => (onTop ? '0 50px;' : '0 30px')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0F1411;
  height: ${({ onTop }) => (onTop ? '150px;' : '100px')};

  @media (max-width: 1090px) {
    padding: ${({ onTop }) => (onTop ? '0 40px' : '0 30px')};
  }
`;

const BarreVerte = styled.hr<{ onTop: boolean }>`
  border-top: ${({ onTop }) => (onTop ? '10px solid #1EC6B1' : '4px solid #1EC6B1')}; 
  margin-top: ${({ onTop }) => (onTop ? '-10px' : '-4px')}; 
  transition: all 0.3s ease;
  z-index: 100;
  position: sticky;
`;

const MenuContainer = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1090px) {
    display: none;
  }
`;

const HamburgerIconWrapper = styled.div`
  display: none;
  cursor: pointer;
  padding: 10px;

  @media (max-width: 1090px) {
    display: block;
    z-index: 10;
  }
`;



const HamburgerIcon = styled.div<{ isOpen: boolean }>`
  width: 30px;
  height: 3px;
  background: #fff;
  margin: 6px 0;
  transition: transform 0.3s ease;

  ${({ isOpen }) => isOpen && `
    transform: rotate(-45deg) translate(-5px, 6px);
  `}

  &:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }

  ${({ isOpen }) => isOpen && `
    &:nth-child(3) {
      transform: rotate(45deg) translate(-7px, -7px);
    }
  `}
`;



const MobileMenu = styled.div<{ isOpen: boolean, onTop: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background: #0F1411;
  width: 250px;
  flex-direction: column;
  padding-top: ${({ onTop }) => (onTop ? '170px' : '110px')};
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
  transition: all 0.3s ease;

  @media (max-width: 1090px) {
    display: flex;
  }

  @media (min-width: 1090px) {
    display: none;
  }
`;

const MobileMenuItem = styled(Link)`
  padding: 10px;
  text-align: center;
  color: #fff;
  text-decoration: none;
  transition: background 0.3s ease;
  &:hover {
    background: #1EC6B1;
  }
`;

function Header() {
  const [onTop, setOnTop] = useState(true);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop } = document.documentElement;
      setOnTop(scrollTop <= 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <MenuContainer>
      <NavContainer onTop={onTop}>
        
        <Link to="/">
          <HomeLogo src={Logo} onTop={onTop} />
        </Link>

        <LinkContainer>
          <StyledLink to="/">ACCUEIL</StyledLink>
          <StyledLink to="/permis">PERMIS DE CONDUIRE</StyledLink>
          <StyledLink to="/code">CODE DE LA ROUTE</StyledLink>
          <StyledLink to="/histoire">QUI SOMMES-NOUS ?</StyledLink>
          <StyledLink to="/contact">CONTACT</StyledLink>
        </LinkContainer>

        <HamburgerIconWrapper onClick={toggleMenu}>
          <HamburgerIcon isOpen={isMenuOpen} />
          <HamburgerIcon isOpen={isMenuOpen} />
          <HamburgerIcon isOpen={isMenuOpen} />
        </HamburgerIconWrapper>

      </NavContainer>

      <MobileMenu id="meny" onTop={onTop} isOpen={isMenuOpen}>
        <MobileMenuItem to="/" onClick={toggleMenu}>ACCUEIL</MobileMenuItem>
        <MobileMenuItem to="/permis" onClick={toggleMenu}>PERMIS DE CONDUIRE</MobileMenuItem>
        <MobileMenuItem to="/code" onClick={toggleMenu}>CODE DE LA ROUTE</MobileMenuItem>
        <MobileMenuItem to="/histoire" onClick={toggleMenu}>QUI SOMMES-NOUS ?</MobileMenuItem>
        <MobileMenuItem to="/contact" onClick={toggleMenu}>CONTACT</MobileMenuItem>
      </MobileMenu>
  
      <BarreVerte onTop={onTop}/>
    </MenuContainer>
  );
}

export default Header;
