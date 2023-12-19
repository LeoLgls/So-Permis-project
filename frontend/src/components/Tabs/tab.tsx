// Tabs.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

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
`;

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

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
};

export default Tabs;
