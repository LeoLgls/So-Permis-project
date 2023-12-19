import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import Snap from '../../assets/img/Snapchat.png';
import Insta from '../../assets/img/Instagram.png';
import { FooterStyledLink, MentionsLegalesLink } from '../../utils/style/Atoms';
import styled from 'styled-components';
import colors from '../../utils/style/colors'

const HomeLogo = styled.img`
  height: auto;
  width: 80%;
`

const PetitLogo = styled.img`
  height: auto;
  width: 70%;
`

const FooterContainer = styled.footer`
  padding: 2% 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.backgroundNoir};

  @media (max-width: 925px) {
    flex-direction: column;
  }

`

const LeftPart = styled.div`
  display: flex;
  height: 15vw;
  align-items: center;
  width: 45%;
  height: auto;

  @media (max-width: 925px) {
    width: 70%;
    padding: 5% 0%;
  }

  @media (max-width: 550px) {
    flex-direction: column;
  }

`

const LogoContainer = styled.div`
  width: 100%;
  height: auto;

  @media (max-width: 550px) {
    text-align: center;
    padding-bottom: 5%;
  }
`

const ContactContainer = styled.div`
  width: 100%;
  height: auto;
`

const BoutonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10%;
`

const BoutonContact = styled.div`
  background-color: ${colors.vert};
  border-radius: 45px;
  text-align: center;
  font-size: 20px;
  color : ${colors.noir};
  font-weight: 700;
  width: 70%;
  padding: 5%;
`

const ReseauContainer = styled.div`
  display: flex;
  align-items: center;
  background: #0f1411;

  a{
    width: 50%;
    height: auto;
    display: flex;
    justify-content: center;
    padding: 0% 15%;
  }
`





const RightPart = styled.div`
  display: flex;
  height: 15vw;
  align-items: center;
  width: 55%;
  justify-content: space-evenly;
  height: auto;

  @media (max-width: 925px) {
    width: 95%;
    padding: 5% 0%;
  }

  @media (max-width: 550px) {
    flex-direction: column;
  }
`

const InformationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-align: start;

  @media (max-width: 550px) {
    padding-bottom: 8%;
  }
`

const CoordonneesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: justify;  
`

const TextCoordonnees = styled.p`
  color: white;
  font-size: 18px;
  text-align: justify;
  font-weight : 800;
  padding-bottom: 6%;
  
  @media (max-width: 1090px) {
    font-size : 16px;
  }
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

  @media (max-width: 1090px) {
    font-size : 20px;
  }
`

const BottomPart = styled.div`
  background-color: ${colors.backgroundNoir};
  display: flex;
  justify-content: center;

  p{
    color: ${colors.blanc};
    padding: 0 1%;
  }

`


const linkScroll =() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}


function Footer() {
  
  return ( <>
    <FooterContainer>

      
      <LeftPart>
          <LogoContainer>
            <Link to="/">
              <HomeLogo src={Logo} onClick={linkScroll} />
            </Link>
          </LogoContainer>

          <ContactContainer>

              <ReseauContainer>
                  
                  <Link to="pornhub.com">
                    <PetitLogo src={Snap} />
                  </Link>

                  <Link to="https://instagram.com">
                    <PetitLogo src={Insta} />
                  </Link>

              </ReseauContainer>

              <BoutonContainer>
                  <BoutonContact> Contactez-nous </BoutonContact>
              </BoutonContainer>

          </ContactContainer>
      </LeftPart>

      <RightPart>
          <InformationContainer>
              <UnderlineText>Informations</UnderlineText>
              <FooterStyledLink to="/">&gt; Accueil</FooterStyledLink>
              <FooterStyledLink to="/histoire">&gt; Qui sommes nous ?</FooterStyledLink>
              <FooterStyledLink to="/permis">&gt; Permis</FooterStyledLink>
              <FooterStyledLink to="/code">&gt; Code</FooterStyledLink>
          </InformationContainer>

          <CoordonneesContainer>
              <UnderlineText>Coordonnées</UnderlineText>
              <TextCoordonnees> 20 rue Jean Lurcat, <br/> 76610 Le Havre </TextCoordonnees>
              <TextCoordonnees> 02 78 34 10 63 </TextCoordonnees>
              <TextCoordonnees> sopermis76@gmail.com </TextCoordonnees>
          </CoordonneesContainer>
      </RightPart>

    </FooterContainer>


    <BottomPart>

      <MentionsLegalesLink to="/mentionsLegales"> Mentions Légales </MentionsLegalesLink>
      <p>-</p>
      <MentionsLegalesLink to="cookies"> Cookies </MentionsLegalesLink>
      <p>-</p>
      <MentionsLegalesLink to="rgpd"> RGPD </MentionsLegalesLink>

    </BottomPart>


    </>

  );
}

export default Footer;