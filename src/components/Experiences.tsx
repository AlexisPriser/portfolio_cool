import React from "react";
import Experience from "./Experience";
import { ContentType, ExperienceType } from "../data";
import styled from "styled-components";

const Experiences = ({
  data,
  titre,
}: {
  data: ExperienceType;
  titre: string;
}) => {
  return (
    <ExperiencesWrap>
      <h2>{titre}</h2>
      {data.content.map((cont: ContentType, i: number) => {
        return <Experience data={cont} key={i} />;
      })}
    </ExperiencesWrap>
  );
};

const ExperiencesWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  text-align: left;
  float: left;
  width: 100%;
  padding-right: 2%;
  padding-left: 2%;
`;
export default Experiences;
