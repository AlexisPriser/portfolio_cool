import React from "react";
import { LinksType } from "../data";
import styled from "styled-components";
import AsciiFire from "./AsciiFire";

const Links = ({
  data,
  ref_prop,
}: {
  data: LinksType[];
  ref_prop: React.LegacyRef<any>;
}) => {
  return (
    <LinksWrap ref={ref_prop}>
      {data.map((cont: LinksType, i: number) => {
        return (
          <Link key={i} href={cont.link} target="_blank">
            <img
              src={cont.img.src}
              alt={cont.titre}
              width="100px"
              height="100px"
            />
            {/*<h2>{cont.titre}</h2>*/}
          </Link>
        );
      })}
      <AsciiFire />
    </LinksWrap>
  );
};

const LinksWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const Link = styled.a`
  color: white;
  display: flex;
  align-items: center;
  padding-top: 10%;
`;
export default Links;
