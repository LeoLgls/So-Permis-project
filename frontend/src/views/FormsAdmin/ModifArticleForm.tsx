import { useState, useEffect } from 'react';
import styled from 'styled-components';
import {MainContainer} from "../../utils/style/elements.tsx";
import colors from "../../utils/style/colors.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {Forfait} from "../../utils/models/models.tsx";
import {getForfait} from "../../services/service.tsx";
  interface ForfaitFormProps {
  forfaitToEdit?: Forfait | null;
}

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

const FormInput = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`;

const FormButton = styled.button`
  padding: 8px;
  background-color: ${colors.vert};
  color: ${colors.txtBlanc};
  cursor: pointer;
`;

function ForfaitForm({ forfaitToEdit }: ForfaitFormProps) {
  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState('');
  const [description, setDescription] = useState('');
  const {id} = useParams()
  const navigate = useNavigate()

  //Chercher le forfait dans la bado
  if (typeof id === "string") {
    forfaitToEdit = getForfait(parseInt(id))
  }

  useEffect(() => {
    if (forfaitToEdit) {
      setNom(forfaitToEdit.titre);
      setPrix(forfaitToEdit.titreBtn);
      setDescription(forfaitToEdit.sousTitre);
    } else {
      setNom('');
      setPrix('');
      setDescription('');
    }
  }, [forfaitToEdit]);

  //Si id existe : modifier
  //Sinon add
  function onSave(forfait: Forfait) {
    console.log(forfait)
  }

  function handleSave() {
    console.log(id)
    const newForfait: Forfait = {
      titre: `${nom}`,
      sousTitre: `${description}`,
      titreBtn: `${prix}`,
      lien:`/forfait/${id}`
    }


    onSave(newForfait);
    setNom('');
    setPrix('');
    setDescription('');

    navigate('/admin')

  }

  return (
    <MainContainer theme={'blanc'}>
      <FormContainer>
        <FormLabel>Nom:</FormLabel>
        <FormInput type="text" value={nom} onChange={(e) => setNom(e.target.value)} />

        <FormLabel>Prix:</FormLabel>
        <FormInput type="text" value={prix} onChange={(e) => setPrix(e.target.value)} />

        <FormLabel>Description:</FormLabel>
        <FormInput type="text" value={description} onChange={(e) => setDescription(e.target.value)} />

        <FormButton onClick={handleSave}>{forfaitToEdit ? 'Modifier' : 'Ajouter'}</FormButton>
      </FormContainer>
    </MainContainer>

  );
}

export default ForfaitForm;
