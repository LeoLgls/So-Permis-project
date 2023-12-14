import {forfaitList, backgroundImage} from '../../services/service.tsx'
import HeroSection from "../../components/HeroSection/heroSection.tsx";
import styled from "styled-components";
import colors from "../../utils/style/colors.tsx";
import photoImg from '../../assets/img/photo.png'
import fontSize from "../../utils/style/font-size.tsx";

const MainContainer = styled.div`
    padding-left: 15vw;
    padding-right: 15vw;
    background-color: ${colors.backgroundNoir}
`

const SectionInscription = styled.div`
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

function Accueil() {

  return (
    <MainContainer>
      <HeroSection img={backgroundImage} forfaits={forfaitList} transitionNoir={true}/>
      <SectionInscription>

        <Grid3>
          <GridItem>
            <GridItemImg src={photoImg} alt={'photo'}/>
            <GridItemP>4 photos d'idendité numérique</GridItemP>
          </GridItem>
          <GridItem>
            <GridItemImg src={photoImg} alt={'photo'}/>
            <GridItemP>4 photos d'idendité numérique</GridItemP>
          </GridItem>
          <GridItem>
            <GridItemImg src={photoImg} alt={'photo'}/>
            <GridItemP>4 photos d'idendité numérique</GridItemP>
          </GridItem>
        </Grid3>

        <Grid2>
          <GridItem>
            <GridItemImg src={photoImg} alt={'photo'}/>
            <GridItemP>4 photos d'idendité numérique</GridItemP>
          </GridItem>
          <GridItem>
            <GridItemImg src={photoImg} alt={'photo'}/>
            <GridItemP>4 photos d'idendité numérique</GridItemP>
          </GridItem>
        </Grid2>

      </SectionInscription>
    </MainContainer>
  )
}

export default Accueil
