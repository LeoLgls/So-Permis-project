import React from "react";
import styled from "styled-components";

interface ArticleProps {
  title: string;
  date: string;
  content: string;
}

const ArticleContainer = styled.div`
  
`;

const ArticleContent = styled.div`
  
`;

const ArticleTitle = styled.h1`

`;

const ArticleMeta = styled.div`

`;

const ArticleBody = styled.div`
  
`;

const Article: React.FunctionComponent<ArticleProps> = ({ title, date, content }) => {
  return (
    <ArticleContainer>
      <ArticleContent>
        <ArticleTitle>{title}</ArticleTitle>
        <ArticleMeta>
          <span>publier le : {date}</span>
        </ArticleMeta>
        <ArticleBody>
          <span>{content}</span>
        </ArticleBody>
      </ArticleContent>
    </ArticleContainer>
  );
};

export default Article;
