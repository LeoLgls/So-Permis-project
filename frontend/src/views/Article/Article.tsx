import styled from "styled-components";
import {useParams} from "react-router-dom";
import {Article} from "../../utils/models/models.tsx";
import {articleList} from "../../services/service.tsx";

const ArticleContainer = styled.div`
  height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ArticleContent = styled.div`
  
`;

const ArticleTitle = styled.h1`

`;

const ArticleMeta = styled.div`

`;

const ArticleBody = styled.div`
  
`;

function ArticlePage() {


  const { articleNumberParam } = useParams();
  const articleNumberAsNumber: number     = Number(articleNumberParam);

  console.log(useParams())
  console.log(articleNumberAsNumber)

  function getDataArticle(index: number): Article {
    return articleList[index]
  }

  //const { data, isLoading, error } = useFetch(`http://localhost:8000/article/${articleNumber}`)
  // const articleData = data?.articleData

  /*if (error) {
    return <span>Il y a un problème</span>
  }*/

  const data: Article = getDataArticle(articleNumberAsNumber-1)

  return (
    <ArticleContainer>
      {/*isLoading ? (
        <Loader/>
      ) : (*/
        <ArticleContent>
          <ArticleTitle>{data.titre}</ArticleTitle>
          <ArticleMeta>
            <span>publier le : {`${data.date.toLocaleDateString()}`}</span>
          </ArticleMeta>
          <ArticleBody>
            <span>{data.contenu}</span>
          </ArticleBody>
        </ArticleContent>
      //)
      }
    </ArticleContainer>
  );
}

export default ArticlePage;
