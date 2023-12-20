import React from 'react';
import {MainContainer} from "../../utils/style/elements.tsx";
import styled from "styled-components";

const FormContainer = styled.div`
    padding-top: 150px;
    
`

function ModifArticleForm() {

  return (
    <React.StrictMode>
      <MainContainer theme={'blanc'}>
        <FormContainer>
          <h1>COUCOU</h1>
        </FormContainer>
      </MainContainer>
    </React.StrictMode>
  )
}

export default ModifArticleForm;
