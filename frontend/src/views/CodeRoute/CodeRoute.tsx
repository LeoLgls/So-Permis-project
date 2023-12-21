import React from "react"
import HeroSection from "../../components/HeroSection/heroSection.tsx";
import {codeForfaitList, codeList, listAnnulationCode} from "../../services/service.tsx";
import {CardBackground, MainContainer, TitreSection} from "../../utils/style/elements.tsx";
import styled from "styled-components";
import Planning from "../../components/Tableau/planning.tsx";
import Card from "../../components/Card/card.tsx";
import {Transition} from "../../utils/style/transition.tsx";
import colors from "../../utils/style/colors.tsx";
import fontSize from "../../utils/style/font-size.tsx";
import imgBackgroundCodeRoute from "../../assets/img/code-de-la-route.jpeg";


const CodeSections = styled.section`
  background-color: ${colors.backgroundNoir};
  padding-top: 5rem;
  padding-bottom: 5rem;
`

const ForfaitContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  width: 100%;
  gap: 40px;
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
    gap: 2rem;
`
const LigneP = styled.p`
    color: ${colors.txtBlanc};
    font-size: ${fontSize.p}px;
    font-weight: bolder;
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 5rem;

`

const PlanningContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

function CodeRoute() {
  return (
    <React.StrictMode>
      <MainContainer theme={'noir'}>
      
        <HeroSection img={imgBackgroundCodeRoute} forfaits={codeList} transitionNoir={true}/>

        <CodeSections id="code">
          <TitreSection theme={'noir'}>Forfait Code</TitreSection>
          <ForfaitContainer>
            {codeForfaitList.map((forfait, index) => (
              <Card key={`${index}`} {...forfait}></Card>
            ))}
          </ForfaitContainer>
        </CodeSections>

        <HoraireSection id="horaires">
          <TitreSection theme={'noir'}>Horaire code en salle</TitreSection>
          <PlanningContainer>
            <Planning/>
          </PlanningContainer>
        </HoraireSection>

      </MainContainer>

      <Transition orientation={'0deg'} theme={'blanc'}/>

      <MainContainer theme={'blanc'}>
        <TitreSection id="annulation" theme={'blanc'}>Condition d'annulation de code</TitreSection>
        <CardContainer>
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
        </CardContainer>
      </MainContainer>

    </React.StrictMode>
  )
}

export default CodeRoute
