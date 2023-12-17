import { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import styled, { css, ThemedBaseStyledProps } from 'styled-components';
import colors from "../../utils/style/colors.tsx";
import {Link} from "react-router-dom";

const CarouselWrapper = styled.div`
    position: relative;
    overflow: hidden;
    background-color: ${colors.backgroundNoir};
    border-radius: 25px;
    width: 100%;
    height: 80vh;
    @media (max-width: 1090px) {
        height: 50vh;
    }
`;

const CarouselItemWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;


    &.active {
        opacity: 1;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const CarouselControlPrev = styled.button`
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 0;
    border: none;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
    transform: translateY(-50%);
    background-color: ${colors.vert};
    height: 40px;
    width: 40px;
    border-radius: 50%;
`;

const CarouselControlNext = styled.button`
    background-color: ${colors.vert};
    height: 40px;
    width: 40px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 1;
    border: none;
    font-size: 1.5rem;
    color: #fff;
    cursor: pointer;
    transform: translateY(-50%);
`;

const ArticleText = styled.article`
    position: absolute;
    background: black;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.60) 70%, rgba(0,0,0,0) 100%);
    color: #fff;
    bottom: 0;
    width: 100%;
    height: 25px;
    padding-left: 25px;
    padding-bottom: 10px;
    padding-top: 20px;
`;

const CarouselDots = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 1rem;
`;

interface CarouselDotProps extends ThemedBaseStyledProps {
  active?: boolean;
}

const CarouselDot = styled.span<CarouselDotProps>`
    display: inline-block;
    width: 0.8rem;
    height: 0.8rem;
    margin: 0 0.5rem;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
    
    z-index: 1;

    ${props => props.active && css`
        background-color: ${colors.vert};
    `}
`;

const MainCarouselContainer = styled.div`
    
`
export interface CarouselItem {
  index: number;
  src: string;
  alt: string;
  lien: string;
}

export interface CarouselProps {
  items: CarouselItem[];
}


function Carousel({ items }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % items.length);
  };

  return (
    <MainCarouselContainer>
      <CarouselWrapper>
        {items.map((item, index: number) => (
          <CarouselItemWrapper key={index} className={index === activeIndex ? 'active' : ''}>
            <Link to={ items[activeIndex].lien }>
              <img src={item.src} alt={item.alt} onClick={() => setActiveIndex(index)}/>
            </Link>
            <ArticleText>Je suis un article</ArticleText>
          </CarouselItemWrapper>
        ))}
        <CarouselControlPrev onClick={handlePrev}>&#10094;</CarouselControlPrev>
        <CarouselControlNext onClick={handleNext}>&#10095;</CarouselControlNext>
      </CarouselWrapper>
      <CarouselDots>
        {items.map((_item, index) => (
          <CarouselDot className={index === activeIndex ? 'active' : ''}
                       key={index}
                       active={index === activeIndex}
                       onClick={() => setActiveIndex(index)}
          ></CarouselDot>
        ))}
      </CarouselDots>
    </MainCarouselContainer>

  );
}


export default Carousel;