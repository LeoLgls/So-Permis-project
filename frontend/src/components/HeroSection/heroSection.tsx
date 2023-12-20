import { useEffect, useState } from "react";
import Card from "../Card/card.tsx";
import styled from "styled-components";
import {Forfait} from "../../utils/models/models.tsx";
import colors from "../../utils/style/colors.tsx";

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
          <Card key={index} {...forfait} />))}
      </CardContainer>

    </HeroSectionContainer>
  );
}

export default HeroSection;