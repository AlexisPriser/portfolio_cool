import React, { Children, Component } from "react";
import { ContentType } from "../data";
import Experiences from "./Experiences";
import styled from "styled-components";

const Experience = ({ data }: { data: ContentType }) => {
  return (
    <ExperienceWrap>
      <XP_name>
        <h4>{data.lieu}</h4>
        <p>{data.duree}</p>
      </XP_name>
      <XP_desc>
        <h4>{data.titre}</h4>
        <p>{data.description}</p>
      </XP_desc>
    </ExperienceWrap>
  );
};

const ExperienceWrap = styled.div`
  position: relative;
  box-sizing: border-box;
  text-align: left;
  float: left;
  width: 100%;
  padding-right: 2%;
  padding-left: 2%;
`;
const XP_name = styled.div`
  margin-left: 2%;
  margin-right: 2%;
  float: left;
  word-break: normal;
  width: 30%;
`;
const XP_desc = styled.div`
  margin-left: 2%;
  margin-right: 2%;
  float: left;
  width: 60%;
  word-break: normal;
`;

export default Experience;
