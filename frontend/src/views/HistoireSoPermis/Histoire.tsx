import { MainContainer, SectionHero, TitreSection} from "../../utils/style/elements.tsx";
import {CardBackgroundCarre} from "../../utils/style/elements.tsx";
import React from "react";
import styled from "styled-components";
import {histoire1, histoire2, histoire3, histoire4, histoire5} from "../../services/service.tsx";
import colors from "../../utils/style/colors.tsx";
import fontSize from "../../utils/style/font-size.tsx";


const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    gap: 10px;
`

const TitreCard = styled.h1`
    color: ${colors.txtBlanc};
`

const PHistoire = styled.p`
    text-align: justify;
    padding-bottom: 2rem;
`
const Paragraphes = styled.div`
  padding-bottom: 2rem;
`

const IntituleHistoire = styled.p`
    text-align: center;
    color: ${colors.txtBlanc};
    font-size: ${fontSize.sousTitre};
`
function Histoire() {
  return(
    <React.StrictMode>
      <MainContainer theme={'blanc'}>
        <SectionHero>
          <CardBackgroundCarre>
            <CardContainer>
              <TitreCard>Qui sommes-nous ?</TitreCard>
              <IntituleHistoire>Découvrez qui se cache derrière So'Permis</IntituleHistoire>
            </CardContainer>
          </CardBackgroundCarre>
        </SectionHero>

        <TitreSection theme={'blanc'}>Qui sommes-nous ?</TitreSection>
        <Paragraphes>
          <PHistoire>{histoire1}</PHistoire>
          <PHistoire>{histoire2}</PHistoire>
          <PHistoire>{histoire3}</PHistoire>
          <PHistoire>{histoire4}</PHistoire>
          <PHistoire>{histoire5}</PHistoire>
        </Paragraphes>

      </MainContainer>
    </React.StrictMode>
  )

}

export default Histoire