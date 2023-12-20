import React from "react";
import {
  ContainerFooterLiens,
  MainContainer, PFooterLiens,
  SectionsFooterLiens,
  TitreFooterLiens,
  TitreSection
} from "../../utils/style/elements.tsx";
import {LiRow, UlList } from "../../utils/style/elements.tsx";

function RGPD() {
  return(
    <React.StrictMode>
      <MainContainer theme={'blanc'}>
        <ContainerFooterLiens>
          <TitreSection theme={'blanc'}>Politique de confidentialité</TitreSection>
          <SectionsFooterLiens>
            <TitreFooterLiens>Introduction</TitreFooterLiens>
            <PFooterLiens>
              So’Permis s'engage à protéger la vie privée de ses clients et des utilisateurs de son site web. Cette politique de confidentialité décrit la manière dont nous collectons, utilisons et partageons les informations personnelles vous concernant.
            </PFooterLiens>
          </SectionsFooterLiens>
          <SectionsFooterLiens>
            <TitreFooterLiens>Collecte de vos informations personnelles</TitreFooterLiens>
            <PFooterLiens>
              Nous collectons les informations personnelles suivantes vous concernant lorsque vous utilisez notre site web :
              Informations que vous nous fournissez : Nous collectons les informations que vous nous fournissez lorsque vous créez un compte, vous inscrivez à un cours ou nous contactez. Ces informations peuvent inclure votre nom, votre adresse e-mail, votre numéro de téléphone, votre adresse postale et d'autres informations de contact.
              Informations que nous collectons automatiquement : Nous collectons également des informations automatiquement lorsque vous utilisez notre site web. Ces informations peuvent inclure votre adresse IP, le type de navigateur que vous utilisez, la page web que vous visitez et les pages web que vous consultez sur notre site web.            </PFooterLiens>
          </SectionsFooterLiens>
          <SectionsFooterLiens>
            <TitreFooterLiens>Utilisation de vos informations personnelles</TitreFooterLiens>
            <PFooterLiens>
              Nous utilisons vos informations personnelles aux fins suivantes :
              Pour fournir nos services : Nous utilisons vos informations personnelles pour fournir nos services, notamment pour vous permettre de créer un compte, de vous inscrire à un cours et de nous contacter.
              Pour améliorer nos services : Nous utilisons vos informations personnelles pour améliorer nos services, notamment pour analyser le trafic sur notre site web et comprendre les besoins de nos clients.
              Pour vous envoyer des communications marketing : Nous pouvons vous envoyer des communications marketing, telles que des e-mails promotionnels, si vous nous en avez donné l'autorisation.            </PFooterLiens>
          </SectionsFooterLiens>
          <SectionsFooterLiens>
            <TitreFooterLiens>Partage de vos informations personnelles</TitreFooterLiens>
            <PFooterLiens>
              Nous ne partageons vos informations personnelles avec des tiers que dans les cas suivants :
              <UlList>
                <LiRow>Avec nos prestataires de services : Nous partageons vos informations personnelles avec nos prestataires de services qui nous aident à fournir nos services. Ces prestataires de services sont tenus de protéger vos informations personnelles conformément à la loi.
                </LiRow>
                <LiRow>Avec votre consentement : Nous pouvons partager vos informations personnelles avec des tiers si vous nous en avez donné l'autorisation.
                </LiRow>
              </UlList>
            </PFooterLiens>
          </SectionsFooterLiens>
          <SectionsFooterLiens>
            <TitreFooterLiens>Sécurité de vos informations personnelles</TitreFooterLiens>
            <PFooterLiens>
              Nous prenons des mesures de sécurité pour protéger vos informations personnelles contre la perte, le vol et l'accès non autorisé. Ces mesures comprennent des pare-feu, des contrôles d'accès et des protocoles de cryptage.            </PFooterLiens>
          </SectionsFooterLiens>
          <SectionsFooterLiens>
            <TitreFooterLiens>Vos droits</TitreFooterLiens>
            <PFooterLiens>
              Vous avez les droits suivants en matière de protection de vos données personnelles :
              <UlList>
                <LiRow>Le droit d'accès : Vous avez le droit d'accéder à vos informations personnelles que nous détenons.
                </LiRow>
                <LiRow>Le droit de rectification : Vous avez le droit de rectifier toute information personnelle inexacte ou incomplète que nous détenons.
                </LiRow>
                <LiRow>Le droit d'effacement : Vous avez le droit de nous demander d'effacer vos informations personnelles, sous réserve de certaines exceptions.
                </LiRow>
                <LiRow>Le droit à la limitation du traitement : Vous avez le droit de nous demander de limiter le traitement de vos informations personnelles, sous réserve de certaines exceptions.
                </LiRow>
                <LiRow>Le droit à la portabilité des données : Vous avez le droit de recevoir vos informations personnelles dans un format structuré, couramment utilisé et lisible par machine.
                </LiRow>
                <LiRow>Le droit d'opposition : Vous avez le droit de vous opposer au traitement de vos informations personnelles, sous réserve de certaines exceptions.
                </LiRow>
              </UlList>

              Pour exercer vos droits, veuillez nous contacter à l'adresse suivante :
              sopermis76@gmail.com ou directement au 20 Rue Jean Lurçat, 76610 Le Havre
            </PFooterLiens>
          </SectionsFooterLiens>
          <SectionsFooterLiens>
            <TitreFooterLiens>Modifications de cette politique de confidentialité</TitreFooterLiens>
            <PFooterLiens>
              Nous pouvons modifier cette politique de confidentialité de temps à autre. La version la plus récente de la politique de confidentialité sera toujours publiée sur notre site web.            </PFooterLiens>
          </SectionsFooterLiens>
        </ContainerFooterLiens>

      </MainContainer>
    </React.StrictMode>
  )

}

export default RGPD