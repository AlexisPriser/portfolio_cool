import React from "react";
import styled from "styled-components";
import { CompType, ContCompType } from "../data";

const Competences = ({
  data,
  ref_prop,
}: {
  data: CompType[];
  ref_prop: React.LegacyRef<any>;
}) => {
  return (
    <CompetencesWrap ref={ref_prop}>
      {data.map((cont: CompType, i: number) => {
        return (
          <div key={i}>
            <h1 key={i}>{cont.titre}:</h1>
            <br />
            <Comp>
              {cont.content.map((ccont: ContCompType, ii: number) => {
                return (
                  <Item key={ii}>
                    <img
                      src={ccont.img}
                      alt={ccont.titre}
                      width="100px"
                      height="100px"
                    />
                    <div>{ccont.titre}</div>
                  </Item>
                );
              })}
            </Comp>
          </div>
        );
      })}
    </CompetencesWrap>
  );
};

export default Competences;
const Item = styled.div`
  padding: 5px;
  min-width: fit-content;
  width: 30%;
`;
const Comp = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const CompetencesWrap = styled.div`
  font-family: "Arial", Times;
  /*display:inline-block;*/
  overflow-x: hidden;
  //min-width: max-content;
  width: auto;
  vertical-align: middle;
  background-color: #006666;
  color: white;
  text-align: center;
  word-break: break-all;
  white-space: normal;
  padding: 5% 0%;
  line-height: 1.64;
`;
