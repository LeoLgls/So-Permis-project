import { useEffect, useState } from "react";
import Card from "../Card/card.tsx";
import styled from "styled-components";
import Forfait from "../../utils/models/models.tsx";

const HeroSectionContainer = styled.div`
    text-align: center;
    color: #fff; /* Couleur du texte, changez selon vos besoins */
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 25vh;
    gap: 15px;
    object-fit: cover;

`;

const HeroImg = styled.img`
    width: 100%;
    height: 100%; /* Utilisez 100vh pour couvrir la hauteur de la fenêtre */
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
`;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    width: 80vw;
    gap: 40px;

`;

interface HeroSectionProps {
  img: string;
  forfaits: Forfait[];
}

function HeroSection({ img, forfaits }: HeroSectionProps) {
  const [heroImgHeight, setHeroImgHeight] = useState<string>("100%");

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
    <HeroSectionContainer>
      <HeroImg src={img} alt={"heroImg"} style={{ height: heroImgHeight }} />

      <CardContainer className="card-container">
        {forfaits.map((forfait, index) => (
          <Card key={index} {...forfait} />))}
      </CardContainer>
    </HeroSectionContainer>
  );
}

export default HeroSection;