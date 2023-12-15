import styled from "styled-components";
import colors from "../../utils/style/colors.tsx";
import fontSize from "../../utils/style/font-size.tsx";

//CSS
const CardContainer = styled.div`
    background-color: ${colors.vert};
    width: 50%;
    min-height: 20rem;
    border-radius: 45px 45px 20px 20px;
    box-shadow: 10px 10px 4px ${colors.noirOmbre};
    position: relative;
    opacity: 0.9;
    transition: opacity 0.25s ease-out;
    
    &:hover {
        opacity: 1;
    }
`

const CardInfosContainer = styled.div`
    justify-content: left;
    display: flex;
    flex-direction: column;
    height: auto;
    min-height: 15rem;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 10%;
`


const CardNom = styled.p`
    display: flex;
    color: ${colors.txtNoir};
    font-size: ${fontSize.nom}px;
    padding-top: 1rem;
    padding-bottom: 2%;
`

const CardNbEtoile = styled.p`
    font-size: ${fontSize.etoile}px;
    text-decoration: none;
    color: yellow;
    padding-bottom: 10%;
`

const CardCommentaire = styled.div`
    display: flex;
    color: ${colors.txtBlanc};
    font-size: ${fontSize.p}px;
    overflow: hidden;
    padding-bottom: 10%;
`
interface CardProps {
  nom: string;
  nbEtoile: number;
  commentaire: string;
}

//Composant Card
function CardAvis({nom, nbEtoile, commentaire}:CardProps) {

  const fullStars = Math.floor(nbEtoile);
  const halfStars = nbEtoile % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return(
    <CardContainer>
      <CardInfosContainer>
          <CardNom>{nom}</CardNom>
          <CardNbEtoile>
            {[...Array(fullStars)].map((_, i) => <span key={i}>★</span>)}
            {[...Array(halfStars)].map((_, i) => <span key={i}>☆</span>)}
            {[...Array(emptyStars)].map((_, i) => <span key={i}>☆</span>)}
          </CardNbEtoile>
        <CardCommentaire>{'" '+commentaire+' "'}</CardCommentaire>
      </CardInfosContainer>
    </CardContainer>
  )
}

export default CardAvis