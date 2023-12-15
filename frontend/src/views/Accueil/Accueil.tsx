import {forfaitList, backgroundImage} from '../../services/service.tsx'
import HeroSection from "../../components/HeroSection/heroSection.tsx";
import styled from "styled-components";
import colors from "../../utils/style/colors.tsx";
import photoImg from '../../assets/img/photo.png'
import fontSize from "../../utils/style/font-size.tsx";
import CardAvis from "../../components/Card/cardAvis.tsx";
import {avisList} from "../../services/service.tsx";

const MainContainer = styled.main`
    padding-left: 15vw;
    padding-right: 15vw;
    background-color: ${colors.backgroundNoir}
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
`
const Grid2 = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`

const TitreSection = styled.h1`
    color: ${colors.txtBlanc};
    padding-top: 5rem;
    padding-bottom: 2rem;
`

const SectionAvis = styled.section`
    display: flex;
    justify-content: center;
    gap: 8%;
    padding-bottom: 5rem;
`

const SectionHistoire = styled.section``

function Accueil() {

  return (
    <MainContainer>
      <HeroSection img={backgroundImage} forfaits={forfaitList} transitionNoir={true}/>
      <SectionInscription>
        <TitreSection>Comment s'inscrire chez So'Permis ?</TitreSection>
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
      <TitreSection>Avis</TitreSection>
      <SectionAvis>
        {avisList.map((avis, index) => (
          <CardAvis key={index} {...avis} />))}
      </SectionAvis>
      <SectionHistoire>

      </SectionHistoire>
    </MainContainer>
  )

}

export default Accueil
