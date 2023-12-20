import styled from "styled-components";
import colors from "../../utils/style/colors.tsx";
import fontSize from "../../utils/style/font-size.tsx";

//CSS
const CardContainer = styled.div`
    background-color: ${colors.vert};
    width: 50%;
    min-height: 20rem;
    box-shadow: 10px 10px 4px ${colors.noirOmbre};
    position: relative;
    opacity: 0.9;
    transition: opacity 0.25s ease-out;
    clip-path: polygon(5% 0%, 95% 0%, 100% 5%, 100% 80%, 95% 85%, 85% 85%, 85% 100%, 70% 85%, 5% 85%, 0% 80%, 0% 5%);

    @media (max-width: 1090px) {
        width: 70%;
    }

    @media (max-width: 550px) {
      width: 90%;
    }
    
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
    padding: 10%;
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