import {DefaultTheme} from "styled-components";

export interface Forfait {
  titre: string
  sousTitre: string
  titreBtn: string
  lien: string
}

export interface Theme extends DefaultTheme {
  theme: string;
}

export interface Avis {
  nom: string
  nbEtoile: number
  commentaire: string
}

export interface Image {
  src: string;
  alt: string;
}

export interface AnnulationCode {
  titre: string;
  prix: number;
}