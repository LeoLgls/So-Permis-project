import {forfaitList, backgroundImage, txtHistoire} from '../../services/service.tsx'
import HeroSection from "../../components/HeroSection/heroSection.tsx";
import styled, {DefaultTheme} from "styled-components";
import colors from "../../utils/style/colors.tsx";
import photoImg from '../../assets/img/photo.png'
import fontSize from "../../utils/style/font-size.tsx";
import CardAvis from "../../components/Card/cardAvis.tsx";
import {avisList} from "../../services/service.tsx";
import Carousel from "../../components/Carousel/carousel.tsx";
import {carouselData} from "../../services/service.tsx";
import React from "react";
import {Transition} from "../../utils/style/transition.tsx";
import CeoImg from '../../assets/img/ceo-girl.jpg'
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

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const GridItemP = styled.p`
    color: ${colors.txtBlanc};
    font-size: ${fontSize.p};
    text-align: center;
`

const GridItemImg = styled.img`
    max-width: 20vw;
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

const SectionAvis = styled.section`
    display: flex;
    padding-bottom: 5rem;
    flex-direction: column;
`

const AvisContainer = styled.div`
    
    display: flex;
    gap: 8%;
    flex-direction: row;
    @media (max-width: 1090px) {
        flex-direction: column;
        gap: 2rem;
    }
`


const CarouselContainer = styled.div``
const SectionActus = styled.section``
const SectionPresentation = styled.section`
    padding-bottom: 5rem;
`
const CardHistoireContainer = styled.div`
    background-color: ${colors.vert};
    border-radius: 45px 45px 20px 20px;
    box-shadow: 10px 10px 4px ${colors.noirOmbre};
    position: relative;
    min-height: 20rem;
`

const TxtHistoire = styled.p`
    color: ${colors.txtBlanc};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;
    min-height: 20rem;
    padding: 1rem;
    font-size: ${fontSize.p}px;
`

const PresentationContainer = styled.div`
    display: flex;
    gap: 2rem;
`


const ImgCEO = styled.img`
    max-width: 25vw;
    border-radius: 25px;
    object-fit: cover;

    @media (max-width: 1090px) {
        display: none;
    }
`

function Accueil() {

  return (
    <React.StrictMode>
      <MainContainer theme={'noir'}>
        <HeroSection img={backgroundImage} forfaits={forfaitList} transitionNoir={true}/>
        <SectionInscription>
          <TitreSection theme={'noir'}>Comment s'inscrire chez So'Permis ?</TitreSection>
          <Grid3>
            <GridItem>
              <GridItemImg src={photoImg} alt={'photo'}/>
              <GridItemP>4 photos d'idendité numérique</GridItemP>
            </GridItem>
            <GridItem>
              <GridItemImg src={photoImg} alt={'photo'}/>
              <GridItemP>Carte d'idendité</GridItemP>
            </GridItem>
            <GridItem>
              <GridItemImg src={photoImg} alt={'photo'}/>
              <GridItemP>Justificatif de domicile de moins de 6 mois</GridItemP>
            </GridItem>
          </Grid3>

          <Grid2>
            <GridItem>
              <GridItemImg src={photoImg} alt={'photo'}/>
              <GridItemP>Né(e) à partir de 1988</GridItemP>
            </GridItem>
            <GridItem>
              <GridItemImg src={photoImg} alt={'photo'}/>
              <GridItemP>Pour les moins de 25 ans</GridItemP>
            </GridItem>
          </Grid2>
        </SectionInscription>

        <SectionAvis>
          <TitreSection theme={'noir'}>Avis</TitreSection>
          <AvisContainer>
            {avisList.map((avis, index) => (
              <CardAvis key={index} {...avis} />))}
          </AvisContainer>
        </SectionAvis>

        <SectionPresentation>
          <TitreSection theme={'noir'}>So'Permis - Votre auto-école locale de confiance !</TitreSection>
          <PresentationContainer>
            <ImgCEO src={CeoImg} alt={'CEO'}/>
            <CardHistoireContainer>
              <TxtHistoire>{txtHistoire}</TxtHistoire>
            </CardHistoireContainer>
          </PresentationContainer>
        </SectionPresentation>
      </MainContainer>

      <Transition theme={'blanc'} orientation={"0deg"}/>

      <MainContainer theme={'blanc'} >
        <SectionActus>
          <TitreSection theme={'blanc'}>Retrouvez nos dernières actus !</TitreSection>
          <CarouselContainer>
            <Carousel items={carouselData} />
          </CarouselContainer>
        </SectionActus>
      </MainContainer>

    </React.StrictMode>

  )

}

export default Accueil
