import { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from "../../utils/style/colors.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {Article} from "../../utils/models/models.tsx";
import {NewArticle} from "../../utils/models/models.tsx";
import {getArticle} from "../../services/service.tsx";
import axios from 'axios';

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
  const [sources, setSources] = useState('');
  const [date, setDate] = useState('');

  const [urlImage, setUrlImage] = useState<string>(''); // Nouvel état pour stocker le lien de l'image
  const {id} = useParams()
  const navigate = useNavigate()

  // Chercher l'article dans la base de données
  useEffect(() => {
    if (id) {
      getArticle(parseInt(id)).then((article) => {
        if (article) {
          setTitre(article.titre);
          setContenu(article.contenu);
          setSources(article.sources);

          if (article.date instanceof Date) {
            const dateString = article.date.toLocaleDateString('fr-FR');
            setDate(dateString);
          } else {
            setDate('');
          }

          setUrlImage(article.urlImage); // Mettez à jour le lien de l'image
        }
      });
    }
  }, [id]);

  useEffect(() => {
    if (articleToEdit) {
      setTitre(articleToEdit.titre);
      setContenu(articleToEdit.contenu);
      setSources(articleToEdit.sources);

      if (articleToEdit.date instanceof Date) {
        const dateString = articleToEdit.date.toLocaleDateString('fr-FR');
        setDate(dateString);
      } else {
        setDate('');
      }


      setUrlImage(articleToEdit.urlImage); // Mettez à jour le lien de l'image


    } else {
      setTitre('');
      setContenu('');
      setSources('');
      setDate('');
      setUrlImage('');
    }
  }, [articleToEdit]);

  async function onSave(newArticle: NewArticle) {
    console.log(newArticle);

    //Si id existe : modifier
    axios.post(`http://localhost:3333/admin/article/create`, newArticle)
  }



  // Convertir la chaîne de date en objet Date
  let parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) {
    // Si la date n'est pas valide, utilisez la date actuelle
    parsedDate = new Date();
  }

  function handleSave() {

    const newArticle = {
      titre: `${titre}`,
      contenu: `${contenu}`,
      sources: `${sources}`,
      date: parsedDate,
      urlImage: urlImage,
    };

    onSave(newArticle);
    setTitre('');
    setContenu('');
    setSources('');
    setDate('');

    setUrlImage('');

    navigate('/admin/article');
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {

    const file = event.target.files?.[0];

    if (file) {
      const allowedExtensions = ['jpg', 'jpeg', 'png'];
      const extension = file.name.split('.').pop()?.toLowerCase() || '';

      if (allowedExtensions.includes(extension) && file.type.startsWith('image/')) {
        setSelectedImage(file);
        const previewURL = URL.createObjectURL(file);
        setImagePreview(previewURL);
        setUrlImage(previewURL); // Mettez à jour le lien de l'image
      } else {
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

        <FormLabel>Sources :</FormLabel>
        <FormInput type="text" value={sources} onChange={(e) => setSources(e.target.value)} />

        <TextareaContainer>

            <FormLabel>Description:</FormLabel>
            <FormInputTextarea value={contenu} onChange={(e) => setContenu(e.target.value)} />
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
