import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Article from "./Article";
import { ContentType, ExperienceType } from "../data";
import { generateColor } from "../functions/hexGenerator";

const Articles = ({
  data,
  ref_prop,
  backgroundColor,
}: {
  data: ExperienceType;
  ref_prop: React.LegacyRef<any>;
  backgroundColor?: string | undefined;
}) => {
  const [collapse, setCollapse] = useState(true);
  const handleClick = () => {
    setCollapse(!collapse);
  };
  useEffect(() => {
    if (data.content.length == 1) {
      setCollapse(false);
    }
  }, []);

  return (
    <NoOverflow bkgrcolor={backgroundColor}>
      <ArticlesWrap ref={ref_prop}>
        <Title>{data.titre}</Title>
        <ArticlesInside collapse={collapse.toString()}>
          {data.content.map((cont: ContentType, i: number) => {
            return <Article content={cont} i={i} key={i} />;
          })}
        </ArticlesInside>
      </ArticlesWrap>
      {data.content.length > 1 && (
        <Collapser onClick={handleClick}>
          ::before
          <h2>{collapse ? "expand" : "close"}</h2>
        </Collapser>
      )}
    </NoOverflow>
  );
};

export default Articles;

const NoOverflow = styled.div<{ bkgrcolor: string | undefined }>`
  background-color: ${(props) =>
    props.bkgrcolor ? props.bkgrcolor : "#004d4d"};
  overflow: hidden;
`;
const ArticlesWrap = styled.div`
  //min-width: 400px;
  font-family: "Arial", Times;
  text-align: center;
  /*padding-top: 5%;
  //background-color: #004d4d;
  
  line-height: 1.64;*/
  padding: 2% 10% 2%;
  color: black;
`;

const Title = styled.h1`
  color: white;
`;

const ArticlesInside = styled.div<{ collapse: string }>`
  background-size: cover;
  object-fit: fill;
  border: none;
  width: 100%;

  //transition: width 2s;
  height: auto;
  max-height: ${(props) => (props.collapse == "true" ? "350px" : "3000px")};
  transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out; /* For Safari 3.1 to 6.0 */
`;

const Collapser = styled.div`
  height: 100px;
  width: 100%;
  background-color: white;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(rgba(0, 0, 0, 1)),
    to(rgba(0, 0, 0, 0))
  );
  border-top-right-radius: 100px;
  border-top-left-radius: 100px;

  h2 {
    color: black;
    position: relative; //missed
    z-index: 2;
  }
`;
