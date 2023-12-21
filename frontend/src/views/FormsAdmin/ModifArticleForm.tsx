import { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from "../../utils/style/colors.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {Article} from "../../utils/models/models.tsx";
import {getArticle} from "../../services/service.tsx";

interface ArticleFormProps {
  articleToEdit?: Article | null;
}

const MainContainer = styled.main`
    padding-left: 15vw;
    padding-right: 15vw;
    background-color: ${colors.backgroundBlanc};
    min-height: 105vw;

    @media (max-width: 1090px) {
        padding-left: 5vw;
        padding-right: 5vw;
    }
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    padding-top: 200px;
    height: 100vh;
    margin: auto;
`;

const FormLabel = styled.label`
  margin-bottom: 8px;
`;

const TextareaContainer = styled.div`
  margin-left: -15vw;
  margin-right: -15vw;
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`;

const FormInputTextarea = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
  height: 20vw;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10% 0%;
`;

const FormButton = styled.button`
  padding: 8px;
  background-color: ${colors.vert};
  color: ${colors.txtBlanc};
  cursor: pointer;
`;

const BoutonRetour = styled.button`
  padding: 8px;
  background-color: red;
  color: ${colors.txtBlanc};
  cursor: pointer;
`;

const ImageContainer = styled.div`
  input{
    padding-bottom: 5%;
  }
`

function ArticleForm({ articleToEdit }: ArticleFormProps) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [titre, setTitre] = useState('');
  const [contenu, setContenu] = useState('');
  const [source, setSource] = useState('');
  const [date, setDate] = useState('');
  const {id} = useParams()
  const navigate = useNavigate()

  //Chercher le forfait dans la bado
  if (typeof id === "string") {
    articleToEdit = getArticle(parseInt(id))
  }

  useEffect(() => {
    if (articleToEdit) {
      setTitre(articleToEdit.titre);
      setContenu(articleToEdit.contenu);
      setSource(articleToEdit.source);
      // Formatage de la date en une chaîne (exemple de format)
      const dateString = articleToEdit.date.toLocaleDateString('fr-FR');
      setDate(dateString);

    } else {
      setTitre('');
      setContenu('');
      setSource('');
      setDate('');
    }
  }, [articleToEdit]);

  //Si id existe : modifier
  //Sinon add
  function onSave(article: Article) {
    console.log(article)
  }


  // Convertir la chaîne de date en objet Date
  const parsedDate = new Date(date);

  function handleSave() {
    console.log(id)
    const newArticle: Article = {
      titre: `${titre}`,
      contenu: `${contenu}`,
      source: `${source}`,
      date: parsedDate,
    }


    onSave(newArticle);
    setTitre('');
    setContenu('');
    setSource('');
    setDate('');

    navigate('/admin')

  }



  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    // Vérifiez s'il y a un fichier sélectionné
    const file = event.target.files?.[0];

    if (file) {
      const allowedExtensions = ['jpg', 'jpeg', 'png'];
      const extension = file.name.split('.').pop()?.toLowerCase() || '';

      if (allowedExtensions.includes(extension) && file.type.startsWith('image/')) {
        setSelectedImage(file);

        // Créer une URL d'objet pour la prévisualisation
        const previewURL = URL.createObjectURL(file);
        setImagePreview(previewURL);
      } else {
        // Gérez le cas où l'utilisateur sélectionne un fichier non autorisé
        console.error('Veuillez sélectionner un fichier image avec une extension .jpg, .jpeg ou .png.');
      }
    }
  }

  function handleBack() {
    // Utilisez la fonction goBack pour revenir à la page précédente
    navigate(-1);
  }


  return (
    <MainContainer>
      <FormContainer>
        <FormLabel>Titre :</FormLabel>
        <FormInput type="text" value={titre} onChange={(e) => setTitre(e.target.value)} />

        <FormLabel>Source :</FormLabel>
        <FormInput type="text" value={contenu} onChange={(e) => setContenu(e.target.value)} />

        <TextareaContainer>
            <FormLabel>Description:</FormLabel>
            <FormInputTextarea value={source} onChange={(e) => setSource(e.target.value)} />
        </TextareaContainer>

        <ImageContainer>
            <FormLabel>Sélectionner une image :</FormLabel>
            <input type="file" accept="image/*" onChange={handleImageChange} />

            {imagePreview && (
            <img src={imagePreview} alt="Prévisualisation" style={{ maxWidth: '100%', maxHeight: '200px' }} />
            )}
        </ImageContainer>

        <ButtonContainer>
            <FormButton onClick={handleSave}>{articleToEdit ? 'Modifier' : 'Ajouter'}</FormButton>
            <BoutonRetour onClick={handleBack}> Retour </BoutonRetour>
        </ButtonContainer>

      </FormContainer>
    </MainContainer>

  );
}

export default ArticleForm;
