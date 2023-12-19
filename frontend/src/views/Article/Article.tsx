import styled from "styled-components";
import {useParams} from "react-router-dom";
import {Article} from "../../utils/models/models.tsx";
import {articleList} from "../../services/service.tsx";
import imgTest from '../../assets/img/imgTest3.jpg'
import colors from "../../utils/style/colors.tsx";
import {MainContainer, TitreSection} from "../../utils/style/elements.tsx";

const ArticleContainer = styled.div`
    background-color: ${colors.backgroundBlanc};
`;

const HeroArticle = styled.div`
    height: 25rem;
    pointer-events: none;
    position: relative;
    width: 100%;
    margin-bottom: 2rem;
    
`

const TransitionArticle = styled.div`
    background: linear-gradient(0, rgba(241,241,241,1) 0%, rgba(241,241,241,0.66) 50%, rgba(241,241,241,0) 100%);    
    height: 25rem;
    position: absolute;
    bottom: 0;
    width: 100%;

`

const ImgArticle = styled.img`
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 25rem;
`

const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ArticleTitle = styled.h1`
    position: absolute;
    bottom: 0;
    padding-left: 15vw;
    padding-right: 15vw;

    @media (max-width: 1090px) {
        padding-left: 5vw;
        padding-right: 5vw;
    }
`;

const ArticleMeta = styled.div`
    height: 1rem;
`;

const ArticleBody = styled.div`
    min-height: 50vh;
`;

const PublicationSpan = styled.span`
    color: ${colors.vert};
`

const PContenu = styled.p`
    
`

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
          <HeroArticle>
            <ImgArticle src={imgTest} alt={"HeroImg"}/>
            <TransitionArticle />
            <ArticleTitle>{data.titre}</ArticleTitle>
          </HeroArticle>

          <MainContainer theme={'blanc'}>
            <ArticleMeta>
              <PublicationSpan>Publication le : {`${data.date.toLocaleDateString()}`}</PublicationSpan>
            </ArticleMeta>
            <ArticleBody>
              <TitreSection theme={'blanc'}>Contenu</TitreSection>
              <PContenu>{data.contenu}</PContenu>
              <TitreSection theme={'blanc'}>Source</TitreSection>
              <PContenu>{data.source}</PContenu>
            </ArticleBody>
          </MainContainer>

        </ArticleContent>
      //)
      }
    </ArticleContainer>
  );
}

export default ArticlePage;
