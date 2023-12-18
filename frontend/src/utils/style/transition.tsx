import styled, { DefaultTheme } from "styled-components";
import colors from "./colors.tsx";

// Interface pour définir les propriétés du thème
export interface Theme extends DefaultTheme {
  theme: string,
}

// Interface pour définir les propriétés de la transition
export interface ThemeTransition extends Theme {
  orientation: string;
}

// Composant Transition avec les propriétés du thème et d'orientation
export const Transition = styled.div<ThemeTransition>`
  background: ${props => (
  props.theme === 'blanc'
    ? `linear-gradient(${props.orientation}, ${colors.backgroundBlanc} 0%, ${colors.backgroundNoir} 100%);`
    : `linear-gradient(${props.orientation}, ${colors.backgroundNoir} 0%, ${colors.backgroundBlanc} 100%);`
)};
  width: 100%;
  height: 5rem;
  pointer-events: none;
`;
