import React from "react";
import {
  ContainerFooterLiens, LiRow,
  MainContainer, PFooterLiens,
  SectionsFooterLiens,
  TitreFooterLiens,
  TitreSection, UlList
} from "../../utils/style/elements.tsx";



function Cookies() {
  return(
    <React.StrictMode>
      <MainContainer theme={'blanc'}>
        <ContainerFooterLiens>
          <TitreSection theme={'blanc'}>Politique de cookies</TitreSection>
          <SectionsFooterLiens>
            <TitreFooterLiens>Qu'est-ce qu'un cookie ?
            </TitreFooterLiens>
            <PFooterLiens>
              Un cookie est un petit fichier texte qui est stocké sur votre ordinateur ou votre appareil mobile lorsque vous visitez un site web. Les cookies sont utilisés pour collecter des informations sur votre navigation sur le site web.
            </PFooterLiens>
          </SectionsFooterLiens>
          <SectionsFooterLiens>
            <TitreFooterLiens>Pourquoi utilisons-nous des cookies ?</TitreFooterLiens>
            <PFooterLiens>

              Nous utilisons des cookies pour améliorer votre expérience sur notre site web. Les cookies nous permettent de :
              Se souvenir de vos préférences de navigation, telles que la langue et la taille de la police.
              Vous proposer des contenus et des offres adaptés à vos intérêts.
              Analyser le trafic sur notre site web afin d'améliorer son contenu et sa performance.
            </PFooterLiens>
          </SectionsFooterLiens>
          <SectionsFooterLiens>
            <TitreFooterLiens>Quels types de cookies utilisons-nous ?</TitreFooterLiens>
            <PFooterLiens>
              Nous utilisons deux types de cookies :
              <UlList>
                <LiRow>Les cookies nécessaires : Ces cookies sont essentiels au fonctionnement de notre site web. Ils vous permettent de naviguer sur le site web et d'utiliser ses fonctionnalités.
                </LiRow>
                <LiRow>Les cookies facultatifs : Ces cookies ne sont pas essentiels au fonctionnement de notre site web. Ils sont utilisés pour améliorer votre expérience sur le site web, par exemple en vous proposant des contenus et des offres adaptés à vos intérêts.
                </LiRow>
              </UlList>
            </PFooterLiens>
          </SectionsFooterLiens>
          <SectionsFooterLiens>
            <TitreFooterLiens>Comment gérer les cookies ?</TitreFooterLiens>
            <PFooterLiens>
              Vous pouvez gérer les cookies à l'aide des paramètres de votre navigateur. La plupart des navigateurs vous permettent de bloquer les cookies, de supprimer les cookies existants ou de recevoir une notification lorsque des cookies sont envoyés à votre ordinateur.

              Pour plus d'informations sur les cookies, veuillez consulter le site de la CNIL            </PFooterLiens>
          </SectionsFooterLiens>
          <SectionsFooterLiens>
            <TitreFooterLiens>Consentement</TitreFooterLiens>
            <PFooterLiens>
              En continuant à utiliser notre site web, vous acceptez l'utilisation des cookies décrits dans cette politique.            </PFooterLiens>
          </SectionsFooterLiens>
        </ContainerFooterLiens>
      </MainContainer>
    </React.StrictMode>
  )

}

export default Cookies