// Importez les bibliothèques nécessaires
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../utils/style/colors.tsx";
import fontSize from "../../utils/style/font-size.tsx";

// Définissez les styles pour le composant CardHeroSection
const CardHeroContainer = styled.div`
  background-color: ${colors.vert};
  min-width: 20rem;
  min-height: 30rem;
  border-radius: 45px 45px 20px 20px;
  box-shadow: 10px 10px 4px ${colors.noirOmbre};
  position: relative;
  opacity: 0.9;
  transition: opacity 0.25s ease-out;
  z-index: 2;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 550px) {
    min-height: 25rem;
  }
`;

const CardHeroInfosContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  min-height: 15rem;
  padding: 10% 1rem 10rem;
`;

const CardHeroInfosTexts = styled.div`
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
`;

const CardHeroTitre = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.txtBlanc};
  font-size: ${fontSize.titre}px;
`;

const CardHeroButton = styled.button`
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
  transition: background-color 0.25s ease-out;

  @media (max-width: 550px) {
    font-size: 24px;
    padding: 5%;
  }

  &:hover {
    background-color: ${colors.noirHover};
  }
`;

const CardHeroSousTitre = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: ${fontSize.sousTitre}px;
  padding-top: 1em;
`;

// Interface pour les propriétés du composant CardHeroSection
interface CardHeroSectionProps {
  titre: string;
  sousTitre: string;
  titreBtn: string;
  sectionId: string; // Nouvelle propriété pour stocker l'ID de la section
  scrollToSection: (sectionId: string) => void; // Nouvelle propriété pour déclencher le défilement
}

// Composant CardHeroSection
function CardHeroSection({
  titre,
  sousTitre,
  titreBtn,
  sectionId,
  scrollToSection,
}: CardHeroSectionProps) {
  return (
    <CardHeroContainer>
      <CardHeroInfosContainer>
        <CardHeroInfosTexts>
          <CardHeroTitre>{titre}</CardHeroTitre>
          <CardHeroSousTitre>{sousTitre}</CardHeroSousTitre>
        </CardHeroInfosTexts>
        {/* Utilisez un bouton au lieu d'un lien */}
        <CardHeroButton onClick={() => scrollToSection(sectionId)}>{titreBtn}</CardHeroButton>
      </CardHeroInfosContainer>
    </CardHeroContainer>
  );
}

export default CardHeroSection;
