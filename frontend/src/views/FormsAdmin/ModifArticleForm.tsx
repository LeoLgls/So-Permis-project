import { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from "../../utils/style/colors.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {Article} from "../../utils/models/models.tsx";
import {NewArticle} from "../../utils/models/models.tsx";
import {getArticle} from "../../services/service.tsx";
import axios from 'axios';



/* STYLES */
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

/* Données qui sont données à la fonction ArticleForm ( c'est surtout pour typé les données transmises )*/
interface ArticleFormProps {
  articleToEdit?: Article | null;
}


//Un article prend donc soit un article existant : Article ou rien pour créer un nouvelle article : null
function ArticleForm({ articleToEdit }: ArticleFormProps) {

  //Méthode set liées à la variable image, prenant soit un fichier image soit rien
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  //Méthode set liées à la variable image, prenant soit un fichier image soit rien pour prévisualiser l'image téléchargé
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  //Variables et setter pour entrer les données du forms
  const [titre, setTitre] = useState('');
  const [contenu, setContenu] = useState('');
  const [sources, setSources] = useState('');
  const [date, setDate] = useState('');

  //Lien de l'image à définir dans la bado
  const [urlImage, setUrlImage] = useState<string>(''); // Nouvel état pour stocker le lien de l'image

  //Prend l'ID de l'article ( existant si existe, ou généré si non existant ) pour ajouter ou modifier l'article
  const {id} = useParams()

  //Permet la redirection
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
    //Si l'article existe on met dans le formulaire les données
    if (articleToEdit) {
      setTitre(articleToEdit.titre);
      setContenu(articleToEdit.contenu);
      setSources(articleToEdit.sources);

      // On vérifie que la date est un type Date
      if (articleToEdit.date instanceof Date) {
        //On met en fr la date et en string
        const dateString = articleToEdit.date.toLocaleDateString('fr-FR');
        setDate(dateString); // On met la date
      } else {
        setDate(''); // Sinon rien
      }


      //On défini l'url de l'image si elle existe déjà
      setUrlImage(articleToEdit.urlImage);


    } else {
      //Sinon formulaire vide
      setTitre('');
      setContenu('');
      setSources('');
      setDate('');
      setUrlImage('');
    }
    //Maj des vars quand l'article apparait
  }, [articleToEdit]);
  
  //TODO : A modifier pour stocker l'article passé en param dans la bado
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

  //Fonction active quand on submit le form
  function handleSave() {

    const newArticle = {

      titre: `${titre}`,
      contenu: `${contenu}`,
      sources: `${sources}`,
      date: parsedDate,
      urlImage: urlImage,
    };

    //On sauvegarde l'article
    onSave(newArticle);

    //Reset du formulaire
    setTitre('');
    setContenu('');
    setSources('');
    setDate('');

    setUrlImage('');

    //Redirection vers la page article
    navigate('/admin/article');
  }

  //Fonction quand on change l'image, prenant en param un event ( change je présume ? )
  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {

    //On récupère le fichier de l'input
    const file = event.target.files?.[0];

    //Si le fichier existe
    if (file) {
      //On autorise que les images dans ces formats là
      const allowedExtensions = ['jpg', 'jpeg', 'png'];
      //On récupère l'extension du fichier
      const extension = file.name.split('.').pop()?.toLowerCase() || '';

      //Si le fichier commence par "image" dans la base64 ( donc pas une url ), et que l'extension est bonne
      if (allowedExtensions.includes(extension) && file.type.startsWith('image/')) {
        //On met à la variable selectedImage, la valeur de file
        setSelectedImage(file);

        //On fait la preview de l'image
        const previewURL = URL.createObjectURL(file);
        setImagePreview(previewURL);
        setUrlImage(previewURL); // Mettez à jour le lien de l'image
      } else {
        //Sinon erreur
        console.error('Veuillez sélectionner un fichier image avec une extension .jpg, .jpeg ou .png.');
      }
    }
  }

  //Fonction pour revenir à la page précédente
  function handleBack() {
    navigate(-1);
  }



  //HTML de la page
  return (
    <MainContainer>
      <FormContainer>
        {/*Formulaire pour modifier l'article, avec la value donné dans titre ( donc soit '' soit le titre de l'article existant
        Quand il y a un changement, on change la valeur de la variable */}
        <FormLabel>Titre :</FormLabel>
        <FormInput type="text" value={titre} onChange={(e) => setTitre(e.target.value)} />

        <FormLabel>Sources :</FormLabel>
        <FormInput type="text" value={sources} onChange={(e) => setSources(e.target.value)} />

        <TextareaContainer>
            <FormLabel>Description:</FormLabel>
            <FormInputTextarea value={contenu} onChange={(e) => setContenu(e.target.value)} />
        </TextareaContainer>

        <ImageContainer>
          {/* Même principe pour l'image*/}
            <FormLabel>Sélectionner une image :</FormLabel>
            <input type="file" accept="image/*" onChange={handleImageChange} />

            {imagePreview && (
            <img src={imagePreview} alt="Prévisualisation" style={{ maxWidth: '100%', maxHeight: '200px' }} />
            )}
        </ImageContainer>

        <ButtonContainer>
            {/* Si l'article existe, on met modifier sinon ajouter */}
            <FormButton onClick={handleSave}>{articleToEdit ? 'Modifier' : 'Ajouter'}</FormButton>
            <BoutonRetour onClick={handleBack}> Retour </BoutonRetour>
        </ButtonContainer>

      </FormContainer>
    </MainContainer>


  );
}

export default ArticleForm;
