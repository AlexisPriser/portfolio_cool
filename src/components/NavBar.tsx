import React from "react";
import { NavType } from "../data";
import styled from "styled-components";
import NavButton from "./NavButton";

const NavBar = ({ data }: { data: NavType }) => {
  const _data = Object.entries(data);
  return (
    <NavBarWrap>
      {_data.map(([k, v], i: number) => {
        return <NavButton _ref={v} name={k} key={i} />;
      })}
    </NavBarWrap>
  );
};

const NavBarWrap = styled.div`
  font-family: "Arial", Times;
  z-index: 2;
  height: 2%;
  width: 100%;
  overflow: hidden;
  background-color: #333;
  display: block;
  text-align: center;
`;

export default NavBar;
