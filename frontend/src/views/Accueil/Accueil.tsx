import styled from 'styled-components'
import Card from "../../components/Card/card.tsx";
import Forfait from "../../utils/models/models.tsx";

const AccueilTitre = styled.h1`
  font-size: 35px;
`

const ForfaitContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

function Accueil() {

  //A remplacé quand il y aura la connexion au serveur
  const forfaitList: Forfait[] = [
    {
      titre: "Forfait1",
      sousTitre:"SousTitre1",
      titreBtn: "Click",
      lien: '/forfait1'
    },
    {
      titre: "Forfait2",
      sousTitre:"SousTitre2",
      titreBtn: "Click",
      lien: '/forfait1'
    },
    {
      titre: "Forfait2",
      sousTitre:"SousTitre2",
      titreBtn: "Click",
      lien: '/forfait1'
    }
  ]

  return (
    <ForfaitContainer>
      <AccueilTitre>Test Front-end Robin</AccueilTitre>
      {forfaitList.map((forfait, index) => (
        <Card key={`${forfait.titre}-${index}`} {...forfait} />
      ))}
    </ForfaitContainer>
  )
}

export default Accueil
