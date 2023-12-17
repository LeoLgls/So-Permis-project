import {permisList, backgroundImage2, typeDeForfaits} from '../../services/service.tsx'
import HeroSection from "../../components/HeroSection/heroSection.tsx";
import styled, {DefaultTheme} from "styled-components";
import colors from "../../utils/style/colors.tsx";
import photoImg from '../../assets/img/photo.png'
import fontSize from "../../utils/style/font-size.tsx";
import React from "react";
import {Transition} from "../../utils/style/transition.tsx";
import Card from "../../components/Card/card.tsx";



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

const MainContainerRoute = styled.main<Theme>`
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

const Image = styled.div`
  background-image: url("./src/assets/img/route.png");

  object-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 70rem;
  margin-top: -70rem;

  background-color: ${colors.backgroundBlanc}
`




function Permis() {


  return (
    <React.StrictMode>
      <MainContainer theme={'noir'}>

      <HeroSection img={backgroundImage2} forfaits={typeDeForfaits} transitionNoir={true}/>

        <SectionInscription>
          <TitreSection theme={'noir'}>Documents à fournir</TitreSection>
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

      </MainContainer>

      <Transition theme={'blanc'} orientation={"0deg"}/>





 
      <MainContainerRoute theme={'blanc'}>
       
        <SectionPermis>
            <TitreSection theme={'blanc'}>Permis B</TitreSection>

            <CardContainer className="card-container">
            {permisList.map((permisList, index) => (
            <Card key={index} {...permisList} />))}
            </CardContainer>
        </SectionPermis>


      </MainContainerRoute>
  
      <Image/>
      <TransitionRoute/>






      <MainContainer theme={'noir'}>

        <SectionPermisExpress>
            <TitreSection theme={'noir'}>Permis B Express</TitreSection>


        </SectionPermisExpress>

      </MainContainer>


    </React.StrictMode>

  )

}

export default Permis
