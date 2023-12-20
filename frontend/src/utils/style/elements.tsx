import styled from "styled-components";
import {Theme} from "./transition.tsx";
import colors from "./colors.tsx";
import fontSize from "./font-size.tsx";

export const TitreSection = styled.h1<Theme>`
    color: ${ props => props.theme == 'blanc' ? colors.vert : colors.txtBlanc};
    padding-top: 5rem;
    padding-bottom: 2rem;
`

export const MainContainer = styled.main<Theme>`
    padding-left: 15vw;
    padding-right: 15vw;
    background-color: ${props => props.theme.toString() == 'blanc' ? colors.backgroundBlanc : colors.backgroundNoir};

    @media (max-width: 1090px) {
        padding-left: 5vw;
        padding-right: 5vw;
    }
`

export const SectionHero = styled.section`
    padding-top: 12rem;
    display: flex;
    justify-content: center;
`

export const CardBackground = styled.div`
    background-color: ${colors.vert};
    border-radius: 45px 45px 20px 20px;
    box-shadow: 10px 10px 4px ${colors.noirOmbre};
    position: relative;
    min-height: 20rem;
    max-width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const CardBackgroundCarre = styled.div`
    background-color: ${colors.vert};
    position: relative;
    min-height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 75%;
`

export const Intitule = styled.div`
    font-size: ${fontSize.p}px;
    color: ${colors.txtBlanc};
`
export const SectionsFooterLiens = styled.section`
    padding-bottom: 2rem;
`

export const TitreFooterLiens = styled.h2`
    padding-bottom: 1rem;
`

export const PFooterLiens = styled.p`
    text-align: justify;
`

export const ContainerFooterLiens = styled.div`
    padding-top: 150px;
    padding-bottom: 5rem;
`

export const UlList = styled.ul`
  padding-left: 2rem;
    padding-top: 1rem;
`

export const LiRow = styled.li`
  padding-bottom: 1rem;
`