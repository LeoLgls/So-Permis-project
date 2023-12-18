import React from "react"
import HeroSection from "../../components/HeroSection/heroSection.tsx";
import ImgTest from "../../assets/img/route.png"
import {codeForfaitList, codeList, listAnnulationCode} from "../../services/service.tsx";
import {CardBackground, MainContainer, TitreSection} from "../../utils/style/elements.tsx";
import styled from "styled-components";
import Planning from "../../components/Tableau/planning.tsx";
import Card from "../../components/Card/card.tsx";
import {Transition} from "../../utils/style/transition.tsx";
import colors from "../../utils/style/colors.tsx";
import fontSize from "../../utils/style/font-size.tsx";

const CodeSections = styled.section`

`

const ForfaitContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex: 1;
`

const HoraireSection = styled.section`
    padding-bottom: 5rem;
`

const LayoutAnnulation = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
`

const LigneTab = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
`
const LigneP = styled.p`
    color: ${colors.txtBlanc};
    font-size: ${fontSize.p}px;
    font-weight: bolder;
`


function CodeRoute() {
  return (
    <React.StrictMode>
      <HeroSection img={ImgTest} forfaits={codeList} transitionNoir={true}/>
      <MainContainer theme={'noir'}>
        <CodeSections>
          <TitreSection theme={'noir'}>Forfait Code</TitreSection>
          <ForfaitContainer>
            {codeForfaitList.map((forfait, index) => (
              <Card key={`${index}`} {...forfait}></Card>
            ))}
          </ForfaitContainer>
        </CodeSections>
        <HoraireSection>
          <TitreSection theme={'noir'}>Horaire code en salle</TitreSection>
          <Planning/>
        </HoraireSection>
      </MainContainer>
      <Transition orientation={'0deg'} theme={'blanc'}/>
      <MainContainer theme={'blanc'}>
        <TitreSection theme={'blanc'}>Condition d'annulation de code</TitreSection>
        <CardBackground>
          <LayoutAnnulation>
            {listAnnulationCode.map((annulation, index) => (
              <React.StrictMode>
                <LigneTab>
                  <LigneP key={index}>{annulation.titre}</LigneP>
                  <LigneP>{annulation.prix +'€'}</LigneP>
                </LigneTab>
              </React.StrictMode>
            ))}
          </LayoutAnnulation>
        </CardBackground>
      </MainContainer>
    </React.StrictMode>
  )
}

export default CodeRoute
