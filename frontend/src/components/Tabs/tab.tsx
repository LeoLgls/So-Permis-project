/**
 * Composant : Tabs
 * 
 * Ce composant React crée une interface à onglets simple. Il se compose d'un conteneur pour les onglets,
 * chaque onglet ayant un libellé, et une zone de contenu qui affiche le contenu de l'onglet actuellement actif.
 * 
 * Composants :
 * - TabsContainer : Un conteneur stylisé pour contenir les éléments d'onglet.
 * - Tab : Un élément d'onglet stylisé représentant un onglet individuel. Il devient visuellement distinct lorsqu'il est actif.
 * - TabContent : Un conteneur stylisé pour afficher le contenu de l'onglet actif.
 * 
 * Propriétés :
 * - tabs : Un tableau d'objets représentant chaque onglet. Chaque objet a un 'label' (chaîne) pour le titre de l'onglet
 *          et 'content' (React.ReactNode) pour le contenu à afficher lorsque l'onglet est actif.
 * 
 * État :
 * - activeTab : Une variable d'état indiquant l'index de l'onglet actuellement actif.
 * 
 * Méthodes :
 * - handleTabClick(index) : Fonction gestionnaire d'événements pour définir l'état activeTab lorsqu'un onglet est cliqué.
 * 
 */


import React, { useState } from 'react';
import styled from 'styled-components';

interface TabProps {
  isActive: boolean;
}

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
`;

const Tab = styled.div<TabProps>`
    padding: 10px 15px;
    cursor: pointer;
    border-bottom: ${(props) => (props.isActive ? '2px solid #000' : 'none')};
`;

const TabContent = styled.div`
    padding: 20px;
    display: flex;
`;

export interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

function Tabs ({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <TabsContainer>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            isActive={index === activeTab}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </Tab>
        ))}
      </TabsContainer>
      <TabContent>{tabs[activeTab].content}</TabContent>
    </div>
  );
}

export default Tabs;
