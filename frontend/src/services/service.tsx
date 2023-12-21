import {AnnulationCode, Article, DataForfait, Forfait, PageForfait} from "../utils/models/models.tsx";
import {Avis} from "../utils/models/models.tsx";
import {Image} from "../utils/models/models.tsx";
import {CarouselItem} from "../components/Carousel/carousel.tsx";
import img1 from "../assets/img/imgTest1.jpg";
import img2 from "../assets/img/imgTest2.jfif";
import img3 from "../assets/img/imgTest3.jpg";
import {generateTableData} from "../views/Admin/ForfaitInterface.tsx";
import {Tab} from "../components/Tabs/tab.tsx";

import axios from 'axios';


//ARTICLES

const responseArticle = await axios.get('http://localhost:3333/articles');
export const listArticle: [] = responseArticle.data;

export const articleList: Article[] = []
// for each in 

for (let i = 0; i < listArticle.length; i++) {
  const element = listArticle[i];
  const article: Article = {
    titre: element["titre"],
    date: element["date"],
    contenu: element["texte"],
    source: element["sources"],
  }
  articleList.push(article)
  
}




//IMAGES

const responseImg = await axios.get('http://localhost:3333/images');
export const imgList: Image[] = responseImg.data;


//CATEGORIES

const responseCattegories = await axios.get('http://localhost:3333/categories');
export const categoriesList: Forfait[] = responseCattegories.data;

const Permis : Forfait = categoriesList.find(Forfait => Forfait.titre === "PERMIS DE CONDUIRE")|| { titre: "", sousTitre: "", titreBtn: "", lien: "" }
const ConduiteAccomp : Forfait = categoriesList.find(Forfait => Forfait.titre === "CONDUITE ACCOMPAGNÉE")|| { titre: "", sousTitre: "", titreBtn: "caca", lien: "" }
const Code : Forfait = categoriesList.find(Forfait => Forfait.titre === "CODE") || { titre: "", sousTitre: "", titreBtn: "", lien: "" }

const PermisB : Forfait = categoriesList.find(Forfait => Forfait.titre === "PERMIS B") || { titre: "", sousTitre: "", titreBtn: "", lien: "" }
const PermisBExpress : Forfait = categoriesList.find(Forfait => Forfait.titre === "PERMIS B EXPRESS") || { titre: "", sousTitre: "", titreBtn: "", lien: "" }

const ForfaitCode : Forfait = categoriesList.find(Forfait => Forfait.titre === "FORFAIT CODE") || { titre: "", sousTitre: "", titreBtn: "", lien: "" }
const CodeEnSalle : Forfait = categoriesList.find(Forfait => Forfait.titre === "CODE EN SALLE") || { titre: "", sousTitre: "", titreBtn: "", lien: "" }
const ConditionAnnul : Forfait = categoriesList.find(Forfait => Forfait.titre === "CONDITION D'ANNULATION") || { titre: "", sousTitre: "", titreBtn: "", lien: "" }


console.log(categoriesList)

export const forfaitList: Forfait[] = [
  Permis,ConduiteAccomp,Code
]

export const typeDeForfaits: Forfait[] = [
  PermisB, PermisBExpress, ConduiteAccomp
]

export const codeList:Forfait[] = [
  ForfaitCode, CodeEnSalle, ConditionAnnul
]

export function getForfait(index: number): Forfait {
  return forfaitList[index]
}

export function getArticle(index: number): Article {
  return articleList[index]
}

//AVIS

//nom
//nbEtoile
//commentaire

//note


const responseAvis = await axios.get('http://localhost:3333/avis');
export const avisListRequette: [] = responseAvis.data;
export const avisList: Avis[] = [
]
for (let i = 0; i < avisListRequette.length; i++) {
  const element = avisListRequette[i];
  const avis: Avis = {
    nom: element["nom"],
    nbEtoile: element["note"],
    commentaire: element["commentaire"],
  }
  avisList.push(avis)
  
}
const reponseCarrousel = await axios.get('http://localhost:3333/articles/last');
export const carouselList: [] = reponseCarrousel.data;

export const carouselData: CarouselItem[] = []

for (let i = 0; i < carouselList.length; i++) {
  const element = carouselList[i];
  const carousel: CarouselItem = {
    index: i,
    src: element["idImage"],
    alt: element["titre"],
    lien: "/article/" + element["id"],
  }
  carouselData.push(carousel)
  
}

// export const carouselData: CarouselItem[] = [
//   { index: 1, src: img1, alt: 'Image 1', lien: '/article/1' },
//   { index: 2, src: img2, alt: 'Image 2', lien: '/article/2' },
//   { index: 3, src: img3, alt: 'Image 3', lien: '/article/3' },
// ]

const responseForfait = await axios.get('http://localhost:3333/forfaits');
export const permisList: Forfait[] = responseForfait.data;

export function getPermis(index: number) {return permisList[index]}

//FORFAIT B EXPRESS
const ForfaitBExpress : Forfait = permisList.find(Forfait => Forfait.titre === "FORFAIT B EXPRESS") || { titre: "", sousTitre: "", titreBtn: "", lien: "" }
export const permisExpressList: Forfait[] = [
  ForfaitBExpress
]

//FORFAIT CONDUITE ACCOMPAGNÉE CODE + 20 LEÇONS + CODE / FORFAIT CONDUITE ACCOMPAGNÉE + 20 LEÇONS
const ConduiteAcc20LeconCode : Forfait = permisList.find(Forfait => Forfait.titre === "FORFAIT CONDUITE ACCOMPAGNÉE CODE + 20 LEÇONS + CODE") || { titre: "", sousTitre: "", titreBtn: "", lien: "" }
const ConduiteAcc20Lecon : Forfait = permisList.find(Forfait => Forfait.titre === "FORFAIT CONDUITE ACCOMPAGNÉE + 20 LEÇONS") || { titre: "", sousTitre: "", titreBtn: "", lien: "" }

export const conduiteAccompagneeList: Forfait[] = [
  ConduiteAcc20LeconCode, ConduiteAcc20Lecon
]

//FORFAIT CODE SEUL  / FORFAIT CODE EXPRESS
const ForfaitCodeSeul : Forfait = permisList.find(Forfait => Forfait.titre === "FORFAIT CODE SEUL") || { titre: "", sousTitre: "", titreBtn: "", lien: "" }
const ForfaitCodeExpress : Forfait = permisList.find(Forfait => Forfait.titre === "FORFAIT CODE EXPRESS") || { titre: "", sousTitre: "", titreBtn: "", lien: "" }
export const codeForfaitList: Forfait[] = [
  ForfaitCodeSeul, ForfaitCodeExpress
]

const responseHistoire = await axios.get('http://localhost:3333/histoires');
export const histoireList: [] = responseHistoire.data;





export const txtHistoire: string = "Chez So'Permis, nous redéfinissons l'expérience de l'auto-école au Havre. Notre engagement envers une formation de conduite personnalisée, proposée par des instructeurs dévoués, fait de nous le choix idéal. En tant qu'auto-école locale, nous comprenons les besoins spécifiques de nos élèves. Optez pour So'Permis et bénéficiez d'une formation efficace avec une approche moderne et des tarifs transparents."

export const txtPermisExpress: string = "Le permis B en 1 mois, c'est comme un marathon. C'est un challenge qui demande de la motivation, de la concentration et de la persévérance. Mais c'est aussi une expérience fun et enrichissante. En 7 semaines, tu apprendras à conduire en sécurité, mais aussi à t'adapter à des situations de conduite variées."
export const txtPermisExpress2: string = "Alors, si tu es prêt à relever le défi, lance-toi !"






export const  horairesMatin = ['Fermé', '9H-12H', '9H-12H', '9H-12H', '9H-12H', '9H-12H', 'Fermé'];
export const horairesAprem = ['14H-18H', '14H-18H', '14H-18H', '14H-18H', '14H-18H', 'Fermé', 'Fermé'];

//intitule

const reponseAnnulation = await axios.get('http://localhost:3333/annulation');
export const annulationListRequette: [] = reponseAnnulation.data;
export const listAnnulationCode: AnnulationCode[] = [
]
for (let i = 0; i < annulationListRequette.length; i++) {
  const element = annulationListRequette[i];
  const annulation: AnnulationCode = {
    titre: element["intitule"],
    prix: element["prix"],
  }
  listAnnulationCode.push(annulation)
  
}

export const listForfaitPage: PageForfait[] = [
  {
    duree: "La formation dure 1 mois",
    theorique: "Le code de la route tu vois",
    pratique: "Tokyo Drift TMTC",
    horaire: "Toute la journéé t'es un fois",
    tarif: "Autant de thune qu'Oussamma Amar a sur son compte en banque",
    indexForfait: 4,
  },{
    duree: "La formation dure 2 mois",
    theorique: "Le code de la route tu vois",
    pratique: "Tokyo Drift TMTC",
    horaire: "Toute la journéé t'es un fois",
    tarif: "Autant de thune qu'Oussamma Amar a sur son compte en banque",
    indexForfait: 1,

  },{
    duree: "La formation dure 3 mois",
    theorique: "Le code de la route tu vois",
    pratique: "Tokyo Drift TMTC",
    horaire: "Toute la journéé t'es un fois",
    tarif: "Autant de thune qu'Oussamma Amar a sur son compte en banque",
    indexForfait: 2,

  },{
    duree: "La formation dure 4 mois",
    theorique: "Le code de la route tu vois",
    pratique: "Tokyo Drift TMTC",
    horaire: "Toute la journéé t'es un fois",
    tarif: "Autant de thune qu'Oussamma Amar a sur son compte en banque",
    indexForfait: 4,

  },{
    duree: "La formation dure 5 mois",
    theorique: "Le code de la route tu vois",
    pratique: "Tokyo Drift TMTC",
    horaire: "Toute la journéé t'es un fois",
    tarif: "Autant de thune qu'Oussamma Amar a sur son compte en banque",
    indexForfait: 4,

  },{
    duree: "La formation dure 6 mois",
    theorique: "Le code de la route tu vois",
    pratique: "Tokyo Drift TMTC",
    horaire: "Toute la journéé t'es un fois",
    tarif: "Autant de thune qu'Oussamma Amar a sur son compte en banque",
    indexForfait: 4,

  },{
    duree: "La formation dure 7 mois",
    theorique: "Le code de la route tu vois",
    pratique: "Tokyo Drift TMTC",
    horaire: "Toute la journéé t'es un fois",
    tarif: "Autant de thune qu'Oussamma Amar a sur son compte en banque",
    indexForfait: 4,

  },{
    duree: "La formation dure 8 mois",
    theorique: "Le code de la route tu vois",
    pratique: "Tokyo Drift TMTC",
    horaire: "Toute la journéé t'es un fois",
    tarif: "Autant de thune qu'Oussamma Amar a sur son compte en banque",
    indexForfait: 4,
  },
]

export function getPageForfait(index: number) : PageForfait {
  return listForfaitPage[index]
}

export const histoire1: string = `
So'Permis est une auto-école havraise fondée en 2022 par Sonia Lepiller. Située au cœur du quartier Caucriauville au Havre, notre auto-école familiale met l'accent sur un enseignement de qualité et un suivi personnalisé de nos élèves.
`
export const histoire2: string =`
Passionnée par son métier, Sonia a créé So'Permis après plusieurs années d'expérience en tant que monitrice d'auto-école. Son objectif : proposer des formations au permis B accessibles à tous, dans une ambiance conviviale et avec des méthodes pédagogiques efficaces.
`
export const histoire3: string =`

Chez So'Permis, nous mettons à profit notre expérience du terrain pour former les futurs conducteurs havrais. Grâce à notre approche flexible et individuelle, nous adapterons votre parcours d'apprentissage à votre rythme.
`
export const histoire4: string =`

Notre équipe jeune et dynamique saura vous mettre en confiance tout au long de votre formation. Nos moniteurs diplômés et passionnés auront à cœur de vous transmettre leur savoir-faire et leur expérience de la route.
`
export const histoire5: string =`
En optant pour So'Permis, vous rejoignez une auto-école à taille humaine où prime avant tout l'écoute et le dialogue. Notre objectif commun ? Vous garantir l'obtention de votre permis de conduire dans les meilleures conditions !
`


const reponsePermisB = await axios.get('http://localhost:3333/forfaits/PERMIS_B');
export const reponsePermisBList: [] = reponsePermisB.data;
const reponsePermisBExpress = await axios.get('http://localhost:3333/forfaits/PERMIS_B_EXPRESS');
export const reponsePermisBExpressList: [] = reponsePermisBExpress.data;
const reponseConduite = await axios.get('http://localhost:3333/forfaits/CONDUITE');
export const reponseConduiteList: [] = reponseConduite.data;
const reponseCode = await axios.get('http://localhost:3333/forfaits/CODE');
export const reponseCodeList: [] = reponseCode.data;


const permisBLst = []
const permisBExprLst =[]
const permisConduiteLst= []
const permisCodeLst =[]

for (let i = 0; i < reponsePermisBList.length; i++) {
  const element = reponsePermisBList[i];
  const permis = {
    id : element["id"],
    nom : element["titre"],
    prix : element["tarif"],
    description : element["sousTitre"]
  }
  permisBLst.push(permis)
  
}


for (let i = 0; i < reponsePermisBExpressList.length; i++) {
  const element = reponsePermisBExpressList[i];
  const permis = {
    id : element["id"],
    nom : element["titre"],
    prix : element["tarif"],
    description : element["sousTitre"]
  }
  permisBExprLst.push(permis)
  
}


for (let i = 0; i < reponseConduiteList.length; i++) {
  const element = reponseConduiteList[i];
  const permis = {
    id : element["id"],
    nom : element["titre"],
    prix : element["tarif"],
    description : element["sousTitre"]
  }
  permisConduiteLst.push(permis)
  
}

for (let i = 0; i < reponseCodeList.length; i++) {
  const element = reponseCodeList[i];
  const permis = {
    id : element["id"],
    nom : element["titre"],
    prix : element["tarif"],
    description : element["sousTitre"]
  }
  permisCodeLst.push(permis)
  
}


export 	const donnees: DataForfait = {
  permisB: permisBLst,
  permisBExpress : permisBExprLst,
  conduiteAccompagnee : permisConduiteLst,
  codeDeLaRoute : permisCodeLst
}

export const tabs: Tab[] = [
  {
    label: 'Forfait Permis B',
    content: generateTableData({ caption: 'Forfait Permis B', items: donnees.permisB }),
  },
  {
    label: 'Forfait Permis B express',
    content: generateTableData({ caption: 'Forfait Permis B express', items: donnees.permisBExpress }),
  },
  {
    label: 'Conduite Accompagnée',
    content: generateTableData({ caption: 'Conduite Accompagnée', items: donnees.conduiteAccompagnee }),
  },
  {
    label: 'Code de la route',
    content: generateTableData({ caption: 'Code de la route', items: donnees.codeDeLaRoute }),
  },
];