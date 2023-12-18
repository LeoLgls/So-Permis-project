import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import Snap from '../../assets/img/Snapchat.png';
import Insta from '../../assets/img/Instagram.png';
import { FooterStyledLink } from '../../utils/style/Atoms';
import styled from 'styled-components';
import colors from '../../utils/style/colors'

const HomeLogo = styled.img`
  height: 45px;
`

const PetitLogo = styled.img`
  height: 45px;
  margin-right : 50px;
  margin-left : 50px;
`

const FooterContainer = styled.footer`
  padding: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.backgroundNoir};
`

const MainContainer = styled.div`
  bottom: 0;
  width: 100%
`
const LeftPart = styled.div`
  display: flex;
  height: 15vw;
  align-items: center;
`

const LogoContainer = styled.div`
  width: 100%;
  height: auto;
`

const ContactContainer = styled.div`
  width: 100%;
  height: auto;
`
const BoutonContact = styled.div`
  background-color: ${colors.vert};
  border-radius: 45px;
  text-align: center;
  font-size: 28px;
  color : ${colors.noir};
  
  font-weight: 700;
`

const ReseauContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0f1411;
`





const RightPart = styled.div`
  display: flex;
  height: 15vw;
  align-items: center;
`

const InformationContainer = styled.div`
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.backgroundNoir};
  flex-direction: column;
  text-align: center;  
`

const UnderlineText = styled.p`
  font-family: "montserrat",sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: underline;
  color: white;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
`

const CoordonneesContainer = styled.div`
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.backgroundNoir};
  flex-direction: column;
  text-align: justify;  
`

const TextCoordonnees = styled.p`
  margin: 10px 25px;
  color: white;
  text-decoration: none;
  font-size: 18px;
  text-align: justify;
  font-weight : 800;
`



function Footer() {
  
  return (

    <FooterContainer>

      <LeftPart>
          <LogoContainer>
            <Link to="/">
              <HomeLogo src={Logo} />
            </Link>
          </LogoContainer>

          <ContactContainer>

              <ReseauContainer>
                  <PetitLogo src={Snap} />
                  <PetitLogo src={Insta} />
              </ReseauContainer>
              <BoutonContact> Contactez-nous </BoutonContact>

          </ContactContainer>
      </LeftPart>

      <RightPart>
          <InformationContainer>
              <UnderlineText>Informations</UnderlineText>
              <FooterStyledLink to="/">&gt; Acceuil</FooterStyledLink>
              <FooterStyledLink to="/permis">&gt; Qui sommes nous ?</FooterStyledLink>
              <FooterStyledLink to="/code">&gt; Permis</FooterStyledLink>
              <FooterStyledLink to="/histoire">&gt; Code</FooterStyledLink>
          </InformationContainer>

          <CoordonneesContainer>
              <UnderlineText>Coordonnées</UnderlineText>
              <TextCoordonnees> 20 rue Jean Lurcat, <br/> 76610 Le Havre </TextCoordonnees>
              <TextCoordonnees> 02 78 34 10 63 </TextCoordonnees>
              <TextCoordonnees> sopermis76@gmail.com </TextCoordonnees>
          </CoordonneesContainer>
      </RightPart>

    </FooterContainer>

  );
}

export default Footer;