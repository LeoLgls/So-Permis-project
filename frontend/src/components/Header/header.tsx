import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import { StyledLink } from '../../utils/style/Atoms';
import styled from 'styled-components';

const HomeLogo = styled.img<{ onTop: boolean }>`
  transition : all 0.3s ease;
  height: ${({ onTop }) => (onTop ? '45px' : '35px')};  
`;

const NavContainer = styled.nav<{ onTop: boolean }>`
  transition : all 0.3s ease;
  padding: ${({ onTop }) => (onTop ? '0 50px;' : '0 30px')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0F1411;
  height: ${({ onTop }) => (onTop ? '150px;' : '100px')};
  
`;

const BarreVerte = styled.hr<{ onTop: boolean }>`
  border-top: 10px solid #1EC6B1;
  margin-top: -10px;
  opacity: ${({ onTop }) => (onTop ? '1' : '0')}; 
  transition: all 0.3s ease;
`;

const MenuContainer = styled.div`
  position: fixed;
  width: 100%
`

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`

function Header() {
  const [onTop, setOnTop] = useState(true);

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
      </NavContainer>
      <BarreVerte onTop={onTop}/>
    </MenuContainer>
  );
}

export default Header;