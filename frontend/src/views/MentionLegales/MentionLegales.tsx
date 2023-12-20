import React from "react";
import {
  ContainerFooterLiens,
  MainContainer, PFooterLiens,
  SectionsFooterLiens,
  TitreFooterLiens,
  TitreSection
} from "../../utils/style/elements.tsx";


function MentionsLegales() {
  return(
    <React.StrictMode>
      <MainContainer theme={'blanc'}>
        <ContainerFooterLiens>
          <TitreSection theme={'blanc'}>Mentions légales</TitreSection>
          <SectionsFooterLiens>
            <TitreFooterLiens>Editeur du site</TitreFooterLiens>
            <PFooterLiens>
              So’Permis, auto école du Havre
              20 Rue Jean Lurçat
              76610 Le Havre
            </PFooterLiens>
          </SectionsFooterLiens>
          <SectionsFooterLiens>
            <TitreFooterLiens>Directeur de la publication</TitreFooterLiens>
            <PFooterLiens>
              Sonia So’Permis
            </PFooterLiens>
          </SectionsFooterLiens>
          <SectionsFooterLiens>
            <TitreFooterLiens>Responsable de la rédaction</TitreFooterLiens>
            <PFooterLiens>
              Équipe de développement du site
            </PFooterLiens>
          </SectionsFooterLiens>
          <SectionsFooterLiens>
            <TitreFooterLiens>Données personnelles</TitreFooterLiens>
            <PFooterLiens>
              L'auto-école du Havre s'engage à protéger les données personnelles de ses clients. Les données collectées sont nécessaires au traitement de la demande et à la gestion de la relation client. Elles sont conservées pendant une durée de trois ans à compter de la dernière interaction avec le client.
              Le client dispose d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition au traitement de ses données. Il peut exercer ces droits en contactant l'auto-école du Havre par email ou par courrier.
            </PFooterLiens>
          </SectionsFooterLiens>
          <SectionsFooterLiens>
            <TitreFooterLiens>Propriété intellectuelle</TitreFooterLiens>
            <PFooterLiens>
              L'ensemble du contenu du site est la propriété de l'auto-école du Havre. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord préalable écrit de l'auto-école du Havre.
            </PFooterLiens>
          </SectionsFooterLiens>
          <SectionsFooterLiens>
            <TitreFooterLiens>Liens hypertextes</TitreFooterLiens>
            <PFooterLiens>
              Le site peut contenir des liens hypertextes vers d'autres sites. L'auto-école du Havre n'a pas de contrôle sur ces sites et ne peut être tenu responsable de leur contenu.
            </PFooterLiens>
          </SectionsFooterLiens>
          <SectionsFooterLiens>
            <TitreFooterLiens>Loi applicable</TitreFooterLiens>
            <PFooterLiens>
              Les présentes mentions légales sont régies par la loi française.
            </PFooterLiens>
          </SectionsFooterLiens>
          <SectionsFooterLiens>
            <TitreFooterLiens>Date de dernière mise à jour</TitreFooterLiens>
            <PFooterLiens>
              Les présentes mentions légales seront toujours à jour sur ce site
            </PFooterLiens>
          </SectionsFooterLiens>
        </ContainerFooterLiens>

      </MainContainer>
    </React.StrictMode>
  )

}

export default MentionsLegales