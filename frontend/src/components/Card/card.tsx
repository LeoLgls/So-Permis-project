import styled from "styled-components";
import Forfait from "../../utils/models/models.tsx";
import {Link} from "react-router-dom";
import colors from "../../utils/style/colors.tsx";

//CSS
const CardContainer = styled.div`
    background-color: ${colors.vert};
    min-width: 25rem;
    min-height: 30rem;
    border-radius: 45px 45px 20px 20px;
    box-shadow: 10px 10px 4px ${colors.noirOmbre};
    position: relative;
    width: 25rem;
`

const CardInfosContainer = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    min-height: 15rem;
    padding-bottom: 10rem;
    padding-top: 10%;
`

const CardInfosTexts = styled.div`
    text-align: center;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
`

const CardTitre = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 40px;
    padding-top: 1px;
`

const CardButton = styled(Link)`
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
    font-size: 20px;
    text-align: center;
    padding: 1em;
    text-decoration: none;
    transition: background-color 0.25s ease-out; /* Ajout de la transition pour la couleur de fond */
    
    &:hover {
        background-color: ${colors.noirHover};
    }
`

const CardSousTitre = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 25px;
    padding-top: 1em;
`


//Composant Card
function Card({titre, sousTitre, titreBtn, lien}:Forfait) {
    return(
      <CardContainer>
        <CardInfosContainer>
          <CardInfosTexts>
            <CardTitre>{titre}</CardTitre>
            <CardSousTitre>{sousTitre}</CardSousTitre>
          </CardInfosTexts>
          <CardButton to={lien}>{titreBtn}</CardButton>
        </CardInfosContainer>
      </CardContainer>
    )

}

export default Card