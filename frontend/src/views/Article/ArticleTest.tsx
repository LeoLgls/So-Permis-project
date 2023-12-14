import React from "react";
import Article from "./Article";

const ArticleTest: React.FunctionComponent = () => {
  const articleData = {
    title: "Titre de l'article",
    date: "14 decembre 2023",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  return <Article {...articleData} />;
};

export default ArticleTest;
