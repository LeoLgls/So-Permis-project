import {permisList, typeDeForfaits, imgList, permisExpressList, txtPermisExpress, txtPermisExpress2, conduiteAccompagneeList} from '../../services/service.tsx'
import HeroSection from "../../components/HeroSection/heroSection.tsx";
import styled, {DefaultTheme} from "styled-components";
import colors from "../../utils/style/colors.tsx";
import fontSize from "../../utils/style/font-size.tsx";
import React from "react";
import {Transition} from "../../utils/style/transition.tsx";
import Card from "../../components/Card/card.tsx";
import CardEpress from "../../components/Card/cardExpress.tsx";
import VoitureImg from '../../assets/img/c3.png'
import imgBackgroundPermis from "../../assets/img/permis.png";




interface Theme extends DefaultTheme {
  theme: string;
}

const MainContainer = styled.main<Theme>`
    padding-left: 15vw;
    padding-right: 15vw;
    background-color: ${props => props.theme.toString() == 'blanc' ? colors.backgroundBlanc : colors.backgroundNoir};

    @media (max-width: 1090px) {
        padding-left: 5vw;
        padding-right: 5vw;
    }

`

const SectionInscription = styled.section`
  background-color: ${colors.backgroundNoir};
    padding-top: 5rem;
    padding-bottom: 5rem;
`

const SectionPermis = styled.section`
    background-color: rgba(0, 0, 0, 0);
    padding-bottom: 10rem;
`

const SectionPermisExpress = styled.section`
    background-color: ${colors.backgroundNoir};
    padding-top: 5rem;
    padding-bottom: 5rem;
`

const SectionConduiteAcc = styled.section`
  background-color: ${colors.backgroundNoir};
  padding-top: 5rem;
  padding-bottom: 5rem;
`



const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5%;
`

const GridItemP = styled.p`
    color: ${colors.txtBlanc};
    font-size: ${fontSize.p}px;
    text-align: center;
    font-weight: 600;

    @media (max-width: 550px) {
      padding: 0% 10%;
    }
`

const GridItemImg = styled.img`
    max-width: 16vw;
    width:70%;
    max-height: 8vw;
    padding: 5%;
    
    @media (max-width: 1090px) {
      max-width: 20vw;
      max-height: 20vh;
    }

    @media (max-width: 550px) {
      min-height: 4vh;
      min-width: 20vw;
    }
`

const Grid3 = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;

    @media (max-width: 1090px) {
        grid-template-columns: repeat(1, minmax(100px, 1fr));
    }
`
const Grid2 = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

    @media (max-width: 1090px) {
        grid-template-columns: repeat(1, minmax(100px, 1fr));
    }   
`

const TitreSection = styled.h1<Theme>`
    color: ${ props => props.theme == 'blanc' ? colors.vert : colors.txtBlanc};
    padding-top: 5rem;
    padding-bottom: 2rem;
`

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    width: 100%;
    gap: 40px;
`

const TransitionRoute = styled.div`
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, #0F1411 100%);
  width: 100%;
  height: 5rem;
  pointer-events: none;
  margin-top: -5rem;
`

const ImageRoute = styled.div`
  background-image: url("./src/assets/img/route.png");

  object-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 70rem;
  margin-top: -70rem;

  background-color: ${colors.backgroundBlanc};

  @media (max-width: 550px) {
    height: 19rem;
    margin-top: -19rem;
  }
 
`


const ContainerImageVoiture = styled.div`
  width: 100%;
  background-color: ${colors.backgroundNoir};
  display: flex;
  justify-content: end;
  margin-top: -35vh;

  @media (max-width: 750px) {
    margin-top: -15vh;
  }
`

const ImageVoiture = styled.img`
  width: 60%;
`



const ContainerPermisExpress = styled.div`
  display: grid;
  grid-template-columns : 1fr 1fr;
  margin-left: -15vw;
  margin-right: -15vw;

  @media (max-width: 1090px) {
    margin-left: -5vw;
    margin-right: -5vw;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`

const CardContainerExpress = styled.div`
  justify-content: center;
  display: flex;
  gap: 2rem;
  flex-direction: row;

  @media (max-width: 1090px) {
      flex-direction: column;
      gap: 2rem;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5%;
`

const TxtPresentation = styled.p`
  color: ${colors.txtBlanc};
  display: flex;
  align-items: center;
  text-align: justify;
  padding: 1rem;
  font-size: 28px;
  font-weight: 700;

  @media (max-width: 1090px) {
    font-size: 20px;
  }
`



function Permis() {
  

  return (
    <React.StrictMode>
      <MainContainer theme={'noir'}>

      <HeroSection img={imgBackgroundPermis} forfaits={typeDeForfaits} transitionNoir={true}/>

        <SectionInscription>
          <TitreSection theme={'noir'}>Documents à fournir</TitreSection>
          <Grid3>
            <GridItem>
              <GridItemImg src={imgList[0].src} alt={imgList[0].alt}/>
              <GridItemP>4 photos d'idendité numérique</GridItemP>
            </GridItem>
            <GridItem>
              <GridItemImg src={imgList[1].src} alt={imgList[1].alt}/>
              <GridItemP>Carte d'idendité</GridItemP>
            </GridItem>
            <GridItem>
              <GridItemImg src={imgList[2].src} alt={imgList[2].alt}/>
              <GridItemP>Justificatif de domicile de moins de 6 mois</GridItemP>
            </GridItem>
          </Grid3>

          <Grid2>
            <GridItem>
              <GridItemImg src={imgList[3].src} alt={imgList[3].alt}/>
              <GridItemP>Né(e) à partir de 1988</GridItemP>
            </GridItem>
            <GridItem>
              <GridItemImg className="test" src={imgList[4].src} alt={imgList[4].alt}/>
              <GridItemP>Pour les moins de 25 ans</GridItemP>
            </GridItem>
          </Grid2>
        </SectionInscription>

      </MainContainer>

      <Transition theme={'blanc'} orientation={"0deg"}/>

      <MainContainer theme={'blanc'}>
        <SectionPermis id="Permis">
            <TitreSection theme={'blanc'}>Permis B</TitreSection>

            <CardContainer className="card-container">
            {permisList.map((permisList, index) => (
            <Card key={index} {...permisList} />))}
            </CardContainer>
        </SectionPermis>
      </MainContainer>
      <ImageRoute/>
      <TransitionRoute/>


      <MainContainer theme={'noir'}>
        <SectionPermisExpress>
            <TitreSection theme={'noir'}>Permis B Express, c'est quoi ?</TitreSection>
            <ContainerPermisExpress>
                <CardContainerExpress>  
                  {permisExpressList.map((permisExpressList) => (
                  <CardEpress {...permisExpressList} />))}
                </CardContainerExpress>
                <TextContainer>
                  <TxtPresentation>{txtPermisExpress}</TxtPresentation>
                  <TxtPresentation>{txtPermisExpress2}</TxtPresentation>
                </TextContainer>
            </ContainerPermisExpress>
        </SectionPermisExpress>



        <SectionConduiteAcc id="conduiteAccompagnee">
            <TitreSection theme={'noir'}>Conduite accompagnée</TitreSection>
            <CardContainer>  
              {conduiteAccompagneeList.map((conduiteAccompagneeList) => (
              <Card {...conduiteAccompagneeList} />))}
            </CardContainer>

            
        </SectionConduiteAcc>

      </MainContainer>
      <ContainerImageVoiture>
        <ImageVoiture src={VoitureImg}/>
      </ContainerImageVoiture>

    </React.StrictMode>

  )

}

export default Permis
