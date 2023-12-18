import {AnnulationCode, Article, Forfait} from "../utils/models/models.tsx";
import {Avis} from "../utils/models/models.tsx";
import {Image} from "../utils/models/models.tsx";
import {CarouselItem} from "../components/Carousel/carousel.tsx";
import img1 from "../assets/img/imgTest1.jpg";
import img2 from "../assets/img/imgTest2.jfif";
import img3 from "../assets/img/imgTest3.jpg";

export const articleList: Article[] = [
  {
    titre: "Premier article",
    date: new Date(),
    contenu: "Ceci est le contenu de mon premier article",
    source: "Les cheveux de zizou"
  },{
    titre: "Deuxième article",
    date: new Date(),
    contenu: "Ceci est le contenu de mon 2e article",
    source: "Les CDM à Haaland"
  },{
    titre: "3e article",
    date: new Date(),
    contenu: "ça fait bcp là",
    source: "Fortnite"
  },
]


export const forfaitList: Forfait[] = [
  {
    titre: "PERMIS DE CONDUIRE",
    sousTitre:"",
    titreBtn: "Nos forfaits permis de conduire",
    lien: '/permis'
  },
  {
    titre: "CONDUITE ACCOMPAGNÉE",
    sousTitre:"",
    titreBtn: "Nos forfaits conduite accompagnée",
    lien: '/permis#conduiteAccompagnee'
  },
  {
    titre: "CODE",
    sousTitre:"",
    titreBtn: "Nos forfaits code",
    lien: '/code'
  }
]

export const avisList: Avis[] = [
  {
    nom: "Jean",
    nbEtoile: 4,
    commentaire: "Je suis très satisfait de tout ça"
  },
  {
    nom: "Louanne",
    nbEtoile: 2,
    commentaire: "Je suis pas contente >:(",
  },
]

export const imgList: Image[] = [
  {
    src: "./src/assets/img/camera.svg",
    alt: "img1"
  },
  {
    src: "./src/assets/img/identity-card.svg",
    alt: "img2"
  },
  {
    src: "./src/assets/img/home.svg",
    alt: "img3"
  },
  {
    src: "./src/assets/img/ASSR.svg",
    alt: "img4"
  },
  {
    src: "./src/assets/img/JAPD.svg",
    alt: "img5"
  }
]

export const carouselData: CarouselItem[] = [
  { index: 1, src: img1, alt: 'Image 1', lien: '/article/1' },
  { index: 2, src: img2, alt: 'Image 2', lien: '/article/2' },
  { index: 3, src: img3, alt: 'Image 3', lien: '/article/3' },
]

export const typeDeForfaits: Forfait[] = [
  {
    titre: "PERMIS B",
    sousTitre:"",
    titreBtn: "Nos forfaits permis B",
    lien: '#Permis'
  },
  {
    titre: "PERMIS B EXPRESS",
    sousTitre:"",
    titreBtn: "Nos forfaits permis B express",
    lien: '/permis#PermisExpress'
  },
  {
    titre: "CONDUITE ACCOMPAGNÉE",
    sousTitre:"",
    titreBtn: "Nos forfaits conduite accompagnée",
    lien: '/permis#conduiteAccompagnee'
  }
]

export const permisList: Forfait[] = [
  {
    titre: "FORFAIT B COMPLET",
    sousTitre:"Code + 20 leçons de conduite",
    titreBtn: "990€",
    lien: '/forfait1'
  },
  {
    titre: "FORFAIT B",
    sousTitre:"20 leçons de conduite (sans code)",
    titreBtn: "890€",
    lien: '/forfait1'
  },
  {
    titre: "FORFAIT B COMPLET",
    sousTitre:"Code + 25 leçons de conduite",
    titreBtn: "1210€",
    lien: '/forfait1'
  },
  {
    titre: "FORFAIT B",
    sousTitre:"25 leçons de conduite (sans conduite)",
    titreBtn: "1110€",
    lien: '/forfait1'
  },
  {
    titre: "FORFAIT B COMPLET",
    sousTitre:"Code + 30 leçons de conduite",
    titreBtn: "1430€",
    lien: '/forfait1'
  },
  {
    titre: "FORFAIT B",
    sousTitre:"30 leçons de conduite (sans conduite)",
    titreBtn: "1330€",
    lien: '/forfait1'
  },
  {
    titre: "CONDUITE SUPERVISÉE",
    sousTitre:"",
    titreBtn: "1110€",
    lien: '/forfait1'
  }
]

export const backgroundImage : string = "https://static.vecteezy.com/system/resources/thumbnails/022/575/456/small/chamomile-flower-field-camomile-in-the-nature-field-of-camomiles-at-sunny-day-at-nature-camomile-daisy-flowers-in-summer-day-chamomile-flowers-field-wide-background-in-sun-light-generative-ai-photo.jpg"
export const backgroundImagePermis : string = "https://www.justifit.fr/wp-content/uploads/2021/04/le-permis-de-conduire-est-il-une-piece-d-identite.jpeg"

export const txtHistoire: string = "Chez So'Permis, nous redéfinissons l'expérience de l'auto-école au Havre. Notre engagement envers une formation de conduite personnalisée, proposée par des instructeurs dévoués, fait de nous le choix idéal. En tant qu'auto-école locale, nous comprenons les besoins spécifiques de nos élèves. Optez pour So'Permis et bénéficiez d'une formation efficace avec une approche moderne et des tarifs transparents."

export const codeList:Forfait[] = [
  {
    titre: "FORFAIT CODE",
    sousTitre:"",
    titreBtn: "Nos forfaits code",
    lien: '/permis'
  },
  {
    titre: "CODE EN SALLE",
    sousTitre:"",
    titreBtn: "Nos forfaits pour faire du code en salle",
    lien: '/permis'
  },
  {
    titre: "CONDITION ANNULATION",
    sousTitre:"",
    titreBtn: "Nos conditions d'annulation du code",
    lien: '/permis'
  },
]

export const codeForfaitList: Forfait[] = [
  {
    titre: "FORFAIT CODE SEUL",
    sousTitre:"",
    titreBtn: "1200€",
    lien: '/permis'
  },{
    titre: "FORFAIT CODE EXPRESS",
    sousTitre:"EN 4 JOURS",
    titreBtn: "1110€",
    lien: '/permis'
  },
]

export const  horairesMatin = ['Fermé', '9H-12H', '9H-12H', '9H-12H', '9H-12H', '9H-12H', 'Fermé'];
export const horairesAprem = ['14H-18H', '14H-18H', '14H-18H', '14H-18H', '14H-18H', 'Fermé', 'Fermé'];

export const listAnnulationCode: AnnulationCode[] = [
  {
    titre: "ANNULATION CODE",
    prix: 150,
  },{
    titre: "ANNULATION CODE EXPRESS EN 4 JOURS",
    prix: 250,
  },{
    titre: "ANNULATION CODE + CONDUITE",
    prix: 410,
  },{
    titre: "ANNULATION CODE + CONDUITE EXPRESS EN 15 JOURS",
    prix: 660,
  },
]

