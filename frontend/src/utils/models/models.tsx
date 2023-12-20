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

export interface  Article {
  titre: string;
  date: Date;
  contenu: string;
  source: string;
}

export interface PageForfait {
  duree: string;
  theorique: string;
  pratique: string;
  horaire: string;
  tarif: string;
  indexForfait: number;
}