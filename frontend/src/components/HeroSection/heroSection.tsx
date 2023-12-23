/**
 * Composant : HeroSection
 * 
 * Ce composant React représente une section héroïque avec une image de fond, des forfaits affichés sous forme de cartes,
 * et une transition de couleur en fonction d'une propriété. Il utilise des styled-components pour le style et inclut
 * des fonctionnalités de transition dynamique de hauteur d'image en fonction de la hauteur des cartes affichées.
 * 
 * Styles :
 * - HeroSectionContainer : Un conteneur stylisé pour la section héroïque avec alignement centré, espacement interne,
 *                          et ajustement dynamique de la marge supérieure sur les écrans plus petits.
 * - HeroImg : Une image stylisée en position absolue, en couvrant la largeur et la hauteur du conteneur avec une position
 *             fixe au-dessus du contenu.
 * - CardContainer : Un conteneur de cartes stylisé en utilisant une disposition de grille pour s'adapter automatiquement
 *                   à la taille de l'écran avec un espacement entre les cartes.
 * - Transition : Une transition de couleur en fonction d'une propriété, utilisée comme fond pour créer un effet de transition
 *                en dégradé.
 * - HeroImgDiv : Un conteneur pour l'image héroïque avec une position absolue pour couvrir la largeur de son parent.
 * 
 * Propriétés :
 * - img : L'URL de l'image de fond pour la section héroïque.
 * - forfaits : Un tableau d'objets de type Forfait, représentant les données des forfaits à afficher.
 * - transitionNoir : Un booléen indiquant si la transition de couleur doit être vers le noir.
 * 
 * État :
 * - heroImgHeight : Une variable d'état pour stocker dynamiquement la hauteur de l'image héroïque en fonction de la hauteur
 *                   des cartes affichées.
 * 
 * Effets :
 * - useEffect : Met à jour dynamiquement la hauteur de l'image héroïque en fonction de la hauteur des cartes affichées.
 * 
 */


import { useEffect, useState } from "react";
import Card from "../Card/card.tsx";
import styled from "styled-components";
import {Forfait} from "../../utils/models/models.tsx";
import colors from "../../utils/style/colors.tsx";
import CardHeroSection from "../Card/cardHeroSection.tsx";

const heightTransition = 80;

const HeroSectionContainer = styled.div`
    text-align: center;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    object-fit: cover;
    padding-top: 100px;

    @media (max-width: 1299px) {
      padding-top: 0px;
    }
`;

const HeroImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 100px;
`;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    width: 80vw;
    gap: 40px;

    
    @media (max-width: 550px) {
      width: unset;
    }

`;

interface HeroSectionProps {
  img: string;
  forfaits: Forfait[];
  transitionNoir: boolean
}

function HeroSection({ img, forfaits, transitionNoir }: HeroSectionProps) {
  const [heroImgHeight, setHeroImgHeight] = useState<string>("100%");

  //Couleur de la transition
  let couleurTransition: string;

  if (!transitionNoir) {
    couleurTransition = `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${colors.backgroundBlanc} 100%);`
  } else {
    couleurTransition = `linear-gradient(180deg, rgba(0,0,0,0) 0%, ${colors.backgroundNoir} 100%);`
  }

  const Transition = styled.div`
    background: ${couleurTransition};
    width: 100%;
    height: ${heightTransition}px;
    left: 0;
    top: 0;
    position: absolute;
    pointer-events: none;
  `

  const HeroImgDiv = styled.div`
    position: absolute;
    width: 100%;
    top : 0;
  `


  useEffect(() => {
    const updateHeroImgHeight = () => {
      const cardContainer = document.querySelector(".card-container") as HTMLElement;
      const newHeight = `${cardContainer.clientHeight * 1.4}px`; // Changez 1.5 selon votre préférence
      setHeroImgHeight(newHeight);
    };

    updateHeroImgHeight();
    window.addEventListener("resize", updateHeroImgHeight);

    return () => {
      window.removeEventListener("resize", updateHeroImgHeight);
    };
  }, []);

  return (
    <HeroSectionContainer style={{ height: heroImgHeight }}>
      <HeroImgDiv>
        <HeroImg src={img} alt={"heroImg"} style={{ height: heroImgHeight }} />
        <Transition style={{top: (parseInt(heroImgHeight) - heightTransition + 100), background: couleurTransition}}/>
      </HeroImgDiv>
      <CardContainer className="card-container">
        {forfaits.map((forfait, index) => (
          <CardHeroSection key={index} {...forfait} />))}
      </CardContainer>

    </HeroSectionContainer>
  );
}

export default HeroSection;