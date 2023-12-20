import {AnnulationCode, Article, DataArticle, Forfait, PageForfait} from "../utils/models/models.tsx";
import {Avis} from "../utils/models/models.tsx";
import {Image} from "../utils/models/models.tsx";
import {CarouselItem} from "../components/Carousel/carousel.tsx";
import img1 from "../assets/img/imgTest1.jpg";
import img2 from "../assets/img/imgTest2.jfif";
import img3 from "../assets/img/imgTest3.jpg";
import {generateTableData} from "../views/Admin/InterfaceAdminPage.tsx";
import {Tab} from "../components/Tabs/tab.tsx";


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
    lien: '/forfait/1'
  },
  {
    titre: "FORFAIT B",
    sousTitre:"20 leçons de conduite (sans code)",
    titreBtn: "890€",
    lien: '/forfait/2'
  },
  {
    titre: "FORFAIT B COMPLET",
    sousTitre:"Code + 25 leçons de conduite",
    titreBtn: "1210€",
    lien: '/forfait/3'
  },
  {
    titre: "FORFAIT B",
    sousTitre:"25 leçons de conduite (sans conduite)",
    titreBtn: "1110€",
    lien: '/forfait/4'
  },
  {
    titre: "FORFAIT B COMPLET",
    sousTitre:"Code + 30 leçons de conduite",
    titreBtn: "1430€",
    lien: '/forfait/5'
  },
  {
    titre: "FORFAIT B",
    sousTitre:"30 leçons de conduite (sans conduite)",
    titreBtn: "1330€",
    lien: '/forfait/6'
  },
  {
    titre: "FORFAIT B EXPRESS",
    sousTitre:"Formation au permis B Classique accéléré en 1 mois",
    titreBtn: "1200€",
    lien: '/forfait1'
  },
  {
    titre: "CONDUITE SUPERVISÉE",
    sousTitre:"",
    titreBtn: "1110€",
    lien: '/forfait/7'
  }
]

export function getPermis(index: number) {return permisList[index]}
export const permisExpressList: Forfait[] = [
  {
    titre: "FORFAIT B EXPRESS",
    sousTitre:"Formation au permis B Classique accéléré en 1 mois",
    titreBtn: "1200€",
    lien: '/forfait/1'
  }
]

export const conduiteAccompagneeList: Forfait[] = [
  {
    titre: "FORFAIT CONDUITE ACCOMPAGNÉE CODE + 20 LEÇONS + CODE",
    sousTitre:"",
    titreBtn: "1200€",
    lien: '/forfait/1'
  },
  {
    titre: "FORFAIT CONDUITE ACCOMPAGNÉE + 20 LEÇONS",
    sousTitre:"",
    titreBtn: "1110€",
    lien: '/forfait/1'
  }
]

export const backgroundImage : string = "https://static.vecteezy.com/system/resources/thumbnails/022/575/456/small/chamomile-flower-field-camomile-in-the-nature-field-of-camomiles-at-sunny-day-at-nature-camomile-daisy-flowers-in-summer-day-chamomile-flowers-field-wide-background-in-sun-light-generative-ai-photo.jpg"
export const backgroundImagePermis : string = "https://www.justifit.fr/wp-content/uploads/2021/04/le-permis-de-conduire-est-il-une-piece-d-identite.jpeg"

export const txtHistoire: string = "Chez So'Permis, nous redéfinissons l'expérience de l'auto-école au Havre. Notre engagement envers une formation de conduite personnalisée, proposée par des instructeurs dévoués, fait de nous le choix idéal. En tant qu'auto-école locale, nous comprenons les besoins spécifiques de nos élèves. Optez pour So'Permis et bénéficiez d'une formation efficace avec une approche moderne et des tarifs transparents."

export const txtPermisExpress: string = "Le permis B en 1 mois, c'est comme un marathon. C'est un challenge qui demande de la motivation, de la concentration et de la persévérance. Mais c'est aussi une expérience fun et enrichissante. En 7 semaines, tu apprendras à conduire en sécurité, mais aussi à t'adapter à des situations de conduite variées."
export const txtPermisExpress2: string = "Alors, si tu es prêt à relever le défi, lance-toi !"


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


export 	const donnees: DataArticle = {
  permisB: [
    {id: 0, nom: 'Forfait B', prix: 890, description: '20 leçon de conduite (sans code)'},
    {id: 1, nom: 'Forfait B Complet', prix: 990, description: 'Code + 20 leçons de conduite'},
  ],
  permisBExpress: [
    {id: 0, nom: 'Forfait B Express', prix: 890, description: '20 leçon de conduite'},
    {id: 1, nom: 'Forfait B Express EXPRESS', prix: 10, description: '2H SUR GTA'},
  ],
  conduiteAccompagnee: [
    {id: 0, nom: 'Conduite Accompagnée', prix: 550, description: 'Chipi Chipi Chaba Chaba'},
    {id: 1, nom: 'Conduite Accompagnée Rapide', prix: 1, description: 'Ta cru ?'},
  ],
  codeDeLaRoute: [
    {id: 0, nom: 'Code de la route', prix: 1945, description: 'Qui est William ?'},
    {id: 1, nom: 'Code du site', prix: 9999, description: 'Oussamma Amar'},
  ],
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