import React, { useState } from "react";
import Modal from "./Modal";
import { ContentType } from "../data";
import styled from "styled-components";
import Links from "./Links";

interface ArticleType {
  content: ContentType;
  i: number;
}

const Article = ({ content, i }: ArticleType) => {
  const [openClose, setOpenClose] = useState(false);
  const handleModal = () => {
    setOpenClose(!openClose);
  };
  return (
    <ArticleWrap onClick={handleModal} i={i}>
      <Picture src={content.img} width="500" height="300" />
      <FloatDesc i={i}>
        <XP_name>
          <h4>{content.lieu}</h4>
          <p>{content.duree}</p>
        </XP_name>
        <XP_desc>
          <h4>{content.titre}</h4>
          <p>{content.description}</p>
          {content.link && (
            <a href={content.link.url} target="_blank">
              {content.link.text}
            </a>
          )}
        </XP_desc>
      </FloatDesc>
      {/*openClose && (
        <Modal
          title={content.titre}
          text={content.description}
          handleModal={handleModal}
        />
      )*/}
    </ArticleWrap>
  );
};

const ArticleWrap = styled.div<{ i: number }>`
  display: flex;
  flex-direction: ${(props) => (props.i % 2 ? "row" : "row-reverse")};
  align-items: center;
  padding: 10px;

  &:hover {
    & > :nth-child(1) {
      transform: ${(props) =>
        props.i % 2 ? "translateX(-5%)" : "translateX(5%)"};
    }
    & > :nth-child(2) {
      transform: ${(props) =>
        props.i % 2 ? "translateX(-5%)" : "translateX(5%)"};
    }
  }
`;
const FloatDesc = styled.div<{ i: number }>`
  min-width: 400px;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  word-break: normal;
  white-space: pre-line;
  background-color: white;
  transition: all 0.5s ease-in-out;
  transform: ${(props) =>
    props.i % 2 ? "translateX(-25%)" : "translateX(25%)"};
`;

const XP_name = styled.div`
  margin-left: 2%;
  margin-right: 2%;
  //float: left;
  word-break: normal;
  //width: 30%;
`;
const XP_desc = styled.div`
  margin-left: 2%;
  margin-right: 2%;
  //float: left;
  //width: 60%;
  word-break: normal;

  p {
    text-align: left;
  }
`;

const Picture = styled.img`
  object-fit: contain;
  transition: all 0.5s ease-in-out;
`;

export default Article;
