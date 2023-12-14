import {forfaitList, backgroundImage} from '../../services/service.tsx'
import HeroSection from "../../components/HeroSection/heroSection.tsx";
import styled from "styled-components";

const MainContainer = styled.div`

    padding-left: 15vw;
    padding-right: 15vw;

`
function Accueil() {

  return (
    <MainContainer>
      <HeroSection img={backgroundImage} forfaits={forfaitList}/>
    </MainContainer>
  )
}

export default Accueil
