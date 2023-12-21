import {AnnulationCode, Article, DataForfait, Forfait, Newsletter, PageForfait} from "../utils/models/models.tsx";
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
    id: element["id"],
    titre: element["titre"],
    date: element["date"],
    contenu: element["texte"],
    source: element["sources"],
    urlImage: element["idImage"],

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


export const carouselData: CarouselItem[] = [
  { index: 1, src: img1, alt: 'Image 1', lien: '/article/1' },
  { index: 2, src: img2, alt: 'Image 2', lien: '/article/2' },
  { index: 3, src: img3, alt: 'Image 3', lien: '/article/3' },
]

const responseForfait = await axios.get('http://localhost:3333/forfaits');

export const permisListFull: Forfait[] = responseForfait.data;







//FORFAIT B EXPRESS
const ForfaitBExpress : Forfait = permisListFull.find(Forfait => Forfait.titre === "FORFAIT B EXPRESS") || { titre: "", sousTitre: "", titreBtn: "", lien: "" }
export const permisExpressList: Forfait[] = [
  ForfaitBExpress
]

//FORFAIT CONDUITE ACCOMPAGNÉE CODE + 20 LEÇONS + CODE / FORFAIT CONDUITE ACCOMPAGNÉE + 20 LEÇONS
const ConduiteAcc20LeconCode : Forfait = permisListFull.find(Forfait => Forfait.titre === "FORFAIT CONDUITE ACCOMPAGNÉE CODE + 20 LEÇONS + CODE") || { titre: "", sousTitre: "", titreBtn: "", lien: "" }
const ConduiteAcc20Lecon : Forfait = permisListFull.find(Forfait => Forfait.titre === "FORFAIT CONDUITE ACCOMPAGNÉE + 20 LEÇONS") || { titre: "", sousTitre: "", titreBtn: "", lien: "" }

export const conduiteAccompagneeList: Forfait[] = [
  ConduiteAcc20LeconCode, ConduiteAcc20Lecon
]

//FORFAIT CODE SEUL  / FORFAIT CODE EXPRESS
const ForfaitCodeSeul : Forfait = permisListFull.find(Forfait => Forfait.titre === "FORFAIT CODE SEUL") || { titre: "", sousTitre: "", titreBtn: "", lien: "" }
const ForfaitCodeExpress : Forfait = permisListFull.find(Forfait => Forfait.titre === "FORFAIT CODE EXPRESS") || { titre: "", sousTitre: "", titreBtn: "", lien: "" }
export const codeForfaitList: Forfait[] = [
  ForfaitCodeSeul, ForfaitCodeExpress
]

const responseHistoire = await axios.get('http://localhost:3333/histoires');
export const histoireList: [] = responseHistoire.data;
//map the hisoire with the ["txtCourt"]
const mapHistoire : any = {}


for (let i = 0; i < histoireList.length; i++) {
  const element = histoireList[i];
  mapHistoire[element["txtCourt"]] = element["txtComplet"]
  
}




export const txtHistoire: string = mapHistoire["Histoire"]
export const histoire1: string = mapHistoire["histoire1"]
export const histoire2: string =mapHistoire["histoire2"]
export const histoire3: string =mapHistoire["histoire3"]
export const histoire4: string =mapHistoire["histoire4"]
export const histoire5: string =mapHistoire["histoire5"]                                                                     


export const txtPermisExpress: string = mapHistoire["txtPermisExpress"]   
export const txtPermisExpress2: string = mapHistoire["txtPermisExpress2"]  






export const  horairesMatin = ['Fermé', '9H-12H', '9H-12H', '9H-12H', '9H-12H', '9H-12H', 'Fermé'];
export const horairesAprem = ['14H-18H', '14H-18H', '14H-18H', '14H-18H', '14H-18H', 'Fermé', 'Fermé'];

//intitule

const reponseAnnulation = await axios.get('http://localhost:3333/annulationcodes');
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

// NEWSLETTER

const responseNewsletter = await axios.get('http://localhost:3333/newsletters');
export const newsletterList:Newsletter [] = responseNewsletter.data;

// ARTICLES

const responseArticles = await axios.get('http://localhost:3333/articles');
export const articlesList: Article[] = responseArticles.data;

export const permisList: any[] = []
for (let i = 0; i < reponsePermisBList.length; i++) {

  const element = reponsePermisBList[i];

  const permis = {
    titre : element["titre"],
    sousTitre : element["sousTitre"],
    titreBtn : element["titreBtn"],
    lien : element["lien"],
    duree : element["duree"],
    theorique : element["theorique"],
    pratique : element["pratique"],
    horaire : element["horaireLecon"],
    tarif : element["tarif"],
  }
  permisList.push(permis);
  
}

for (let i = 0; i < reponsePermisBExpressList.length; i++) {

  const element = reponsePermisBExpressList[i];
  const permis = {
    titre : element["titre"],
    sousTitre : element["sousTitre"],
    titreBtn : element["titreBtn"],
    lien : element["lien"],
    duree : element["duree"],
    theorique : element["theorique"],
    pratique : element["pratique"],
    horaire : element["horaireLecon"],
    tarif : element["tarif"],
  }
  permisList.push(permis);
  
}


export const conduiteCodeList: any[] = []
for (let i = 0; i < reponseConduiteList.length; i++) {

  const element = reponseConduiteList[i];
  const permis = {
    titre : element["titre"],
    sousTitre : element["sousTitre"],
    titreBtn : element["titreBtn"],
    lien : element["lien"],
    duree : element["duree"],
    theorique : element["theorique"],
    pratique : element["pratique"],
    horaire : element["horaireLecon"],
    tarif : element["tarif"],
  }
  conduiteCodeList.push(permis);
  
}
for (let i = 0; i < reponseCodeList.length; i++) {

  const element = reponseCodeList[i];
  const permis = {
    titre : element["titre"],
    sousTitre : element["sousTitre"],
    titreBtn : element["titreBtn"],
    lien : element["lien"],
    duree : element["duree"],
    theorique : element["theorique"],
    pratique : element["pratique"],
    horaire : element["horaireLecon"],
    tarif : element["tarif"],
  }
  conduiteCodeList.push(permis);
  
}

export function getPermis(index: number) {return permisListFull[index]}

export const listForfaitPage: PageForfait[] = []


for(let i = 0; i < permisList.length; i++) {
  const element = permisList[i];
  const forfait: PageForfait = {
    duree: element["duree"],
    theorique: element["theorique"],
    pratique: element["pratique"],
    horaire: element["horaire"],
    tarif: element["tarif"],
    indexForfait: listForfaitPage.length+1
  }
  listForfaitPage.push(forfait)

}

for(let i = 0; i < conduiteCodeList.length; i++) {
  const element = conduiteCodeList[i];
  const forfait: PageForfait = {
    duree: element["duree"],
    theorique: element["theorique"],
    pratique: element["pratique"],
    horaire: element["horaire"],
    tarif: element["tarif"],
    indexForfait: listForfaitPage.length+1
  }
  listForfaitPage.push(forfait)
}


export function getPageForfait(index: number) : PageForfait {
  return listForfaitPage[index]
}