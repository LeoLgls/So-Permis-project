import styled from "styled-components";
import {Link} from "react-router-dom";
import colors from "../../utils/style/colors.tsx";
import fontSize from "../../utils/style/font-size.tsx";

//CSS
const CardContainer = styled.div`
    background-color: ${colors.vert};
    min-width: 20rem;
    min-height: 30rem;
    border-radius: 45px 45px 20px 20px;
    box-shadow: 10px 10px 4px ${colors.noirOmbre};
    position: relative;
    opacity: 0.9; /* Opacité par défaut pour la carte */
    transition: opacity 0.25s ease-out;
    z-index: 2;

    &:hover {
        opacity: 1; /* Opacité au survol pour la carte */
    }

    
    @media (max-width: 550px) {
      min-height: 25rem;
    }
`

const CardInfosContainer = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    min-height: 15rem;
    padding: 10% 1rem 10rem;
`

const CardInfosTexts = styled.div`
    text-align: center;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;

    @media (max-width: 550px) {
      width: 100%;
    }
`

const CardTitre = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.txtBlanc};
    font-size: ${fontSize.titre}px;
`

const CardButton = styled.a`
    background-color: ${colors.noir};
    border-radius: 30px;
    color: white;
    width: 80%;
    min-height: 3rem;
    justify-content: center;
    align-items: center;
    display: flex;
    bottom: 3rem;
    position: absolute;
    font-size: ${fontSize.button}px;
    text-align: center;
    padding: 1em;
    text-decoration: none;
    transition: background-color 0.25s ease-out; /* Ajout de la transition pour la couleur de fond */   

    @media (max-width: 550px) {
      font-size: 24px;
      padding: 5%;
    }
    
    &:hover {
        background-color: ${colors.noirHover};
    }
`

const CardSousTitre = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: ${fontSize.sousTitre}px;
    padding-top: 1em;
`
interface CardProps {
  titre: string;
  sousTitre: string;
  titreBtn: string;
  lien: string;
}

//Composant Card
function CardHeroSection({titre, sousTitre, titreBtn, lien}:CardProps) {
    return(
      <CardContainer>
        <CardInfosContainer>
          <CardInfosTexts>
            <CardTitre>{titre}</CardTitre>
            <CardSousTitre>{sousTitre}</CardSousTitre>
          </CardInfosTexts>
          <CardButton href={lien}>{titreBtn}</CardButton>
        </CardInfosContainer>
      </CardContainer>
    )
}

export default CardHeroSection