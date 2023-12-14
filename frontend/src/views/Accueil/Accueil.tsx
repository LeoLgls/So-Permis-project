import {forfaitList, backgroundImage} from '../../services/service.tsx'
import HeroSection from "../../components/HeroSection/heroSection.tsx";
import styled from "styled-components";
import colors from "../../utils/style/colors.tsx";
import photoImg from '../../assets/img/photo.png'

const MainContainer = styled.div`
    padding-left: 15vw;
    padding-right: 15vw;
    background-color: ${colors.backgroundNoir}
`

const SectionInscription = styled.div`
  background-color: ${colors.backgroundNoir};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-template-rows: auto;
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`

const GridItem = styled.div`
    display: flex;
    flex-direction: column;
`

function Accueil() {

  return (
    <MainContainer>
      <HeroSection img={backgroundImage} forfaits={forfaitList} transitionNoir={true}/>
      <SectionInscription>
        <GridItem>
          <img src={photoImg} alt={'photo'}/>
          <p>4 photos d'idendité numérique</p>
        </GridItem>
        <GridItem>
          <img src={photoImg} alt={'photo'}/>
          <p>4 photos d'idendité numérique</p>
        </GridItem>
        <GridItem>
          <img src={photoImg} alt={'photo'}/>
          <p>4 photos d'idendité numérique</p>
        </GridItem>
        <GridItem>
          <img src={photoImg} alt={'photo'}/>
          <p>4 photos d'idendité numérique</p>
        </GridItem>
        <GridItem>
          <img src={photoImg} alt={'photo'}/>
          <p>4 photos d'idendité numérique</p>
        </GridItem>
      </SectionInscription>
    </MainContainer>
  )
}

export default Accueil
