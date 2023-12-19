import styled from "styled-components";

const ErrorContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ErrorNum = styled.h1``
const ErrorTxt = styled.p``


function Error() {
  return (
    <ErrorContainer>
      <ErrorNum>Erreur 404</ErrorNum>
      <ErrorTxt>Oups ! Cette page n'existe pas </ErrorTxt>
    </ErrorContainer>
  )
}

export default Error