import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import Snap from '../../assets/img/Snapchat.png';
import Insta from '../../assets/img/Instagram.png';
import { StyledLink } from '../../utils/style/Atoms';
import styled from 'styled-components';

const HomeLogo = styled.img`
  height: 45px;
`;


const PetitLogo = styled.img`
  height: 45px;
  margin-right : 50px;
  margin-left : 50px;
`;

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0f1411;
  height: 300;
`;

const NavContainerVert = styled.nav`
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0f1411;
  flex-direction: column;
  text-align: justify;  `


const MenuContainer = styled.div`
    position: fixed;
  bottom: 0;
  width: 100%
`

const NavImagePrincipale = styled.nav`
margin-top: -100px;

padding: 0 50px;
display: flex;
justify-content: space-between;
align-items: center;
background: #0f1411;
flex-direction: column;
`
const NavPetiteImage = styled.nav`
margin-top: -20px;
padding: 0 50px;
display: flex;
justify-content: space-between;
align-items: center;
background: #0f1411;

`

const BoutonContact = styled.div`
background-color: #1dc5b1;
  border-radius: 45px;
  height: 75px;
  position: fixed;
  width: 325px;
  margin-top : 50px;
    text-align: center;
    font-size: 29px;
    color : black;
    
    font-weight: bold;
    padding-top: 39px;
    `

const UnderlineText = styled.text`
font-family: "montserrat",sans-serif;
        margin: 0;
        padding: 0;
        text-decoration: underline;
        color: white;
        font-size: 26px;
        font-weight: bold;
        margin-bottom: 20px;

`

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`

function Footer() {
  
  return (
    <MenuContainer>
      <NavContainer>
        <Link to="/">
          <HomeLogo src={Logo} />
        </Link>

        <NavImagePrincipale>
            <NavPetiteImage>
                <PetitLogo src={Snap} />
                <PetitLogo src={Insta} />

            </NavPetiteImage>
            <BoutonContact> Contactez-nous </BoutonContact>
        </NavImagePrincipale>

        <NavContainerVert>
            <UnderlineText>Informations</UnderlineText>
          <StyledLink to="/">&gt; Acceuil</StyledLink>
          <StyledLink to="/permis">&gt; Qui sommes nous ?</StyledLink>
          <StyledLink to="/code">&gt; Permis</StyledLink>
          <StyledLink to="/histoire">&gt; Code</StyledLink>
        </NavContainerVert>

        <NavContainerVert>
        <UnderlineText>Coordonnées</UnderlineText>
          <StyledLink to="/code"> 20 rue Jean Lurcat, <br/> 76610 Le Havre</StyledLink>
          <StyledLink to="/histoire"> 02 78 34 10 63</StyledLink>
          <StyledLink to="/contact">sopermis76@gmail.com</StyledLink>
        </NavContainerVert>
      </NavContainer>
    </MenuContainer>
  );
}

export default Footer;