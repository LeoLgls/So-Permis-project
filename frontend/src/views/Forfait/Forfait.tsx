import React from "react"
import {MainContainer, TitreSection} from "../../utils/style/elements.tsx";
import styled from "styled-components";
import colors from "../../utils/style/colors.tsx";
import fontSize from "../../utils/style/font-size.tsx";
import {getPageForfait, getPermis} from "../../services/service.tsx";
import {useParams} from "react-router-dom";
import {Forfait, PageForfait} from "../../utils/models/models.tsx";
import Img from '../../assets/img/femme-surprise.png'

const SectionHero = styled.section`
    padding-top: 12rem;
    display: flex;
    justify-content: center;
`
const SectionDuree = styled.section`

`
const TitreSection2 = styled.h1`
    color: ${colors.txtNoir};
    font-size: ${fontSize.p}px;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    font-weight: bolder;
`

const CardBackgroundForfait = styled.div`
    background-color: ${colors.vert};
    position: relative;
    min-height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 75%;
`

const Deroulement = styled.section`

`

const Horaire = styled.section`

`

const Tarif = styled.section`
    padding-bottom: 5rem;
`

const ForfaitP = styled.p`
    
`

const ImgForfait = styled.img`
    transform: scaleX(-1);
    object-fit: cover;
    height: 10rem;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
    
`

const Intitule = styled.div`
    font-size: ${fontSize.p}px;
    color: ${colors.txtBlanc};
`

function ForfaitView() {

  const {forfaitParam} = useParams()
  const forfaitPageNumber: number = Number(forfaitParam)

  const forfaitContenu:PageForfait = getPageForfait(forfaitPageNumber-1)
  const forfait: Forfait = getPermis(forfaitPageNumber-1)

  console.log(forfaitPageNumber)

  return (
    <React.StrictMode>
      <MainContainer theme={'blanc'}>
        <SectionHero>
          <CardBackgroundForfait>
            <TitreSection theme={'noir'}>{forfait.titre}</TitreSection>
            <Intitule>{forfait.sousTitre}</Intitule>
            <TitreSection theme={'noir'}>{forfait.titreBtn}</TitreSection>
            <ImgForfait src={Img} alt={"Etonné"}/>
          </CardBackgroundForfait>
        </SectionHero>
        <SectionDuree>
          <TitreSection theme={'blanc'}>Durée de la formation </TitreSection>
          <ForfaitP>{forfaitContenu.duree}</ForfaitP>
        </SectionDuree>
        <Deroulement>
          <TitreSection theme={'blanc'}>Déroulement de la formation</TitreSection>
          <TitreSection2>La partie théorique</TitreSection2>
          <ForfaitP>{forfaitContenu.theorique}</ForfaitP>
          <TitreSection2>La partie pratique</TitreSection2>
          <ForfaitP>{forfaitContenu.pratique}</ForfaitP>
        </Deroulement>
        <Horaire>
          <TitreSection theme={'blanc'}>Horaires des leçons </TitreSection>
          <ForfaitP>{forfaitContenu.horaire}</ForfaitP>
        </Horaire>
        <Tarif>
          <TitreSection theme={'blanc'}>Tarif</TitreSection>
          <ForfaitP>{forfaitContenu.tarif}</ForfaitP>
        </Tarif>
      </MainContainer>
    </React.StrictMode>
  )


}

export default ForfaitView
