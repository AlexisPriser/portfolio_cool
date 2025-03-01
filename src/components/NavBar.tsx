import React from "react";
import { NavType } from "../data";
import styled from "styled-components";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

const NavBar = ({ data }: { data: NavType }) => {
  const _data = Object.entries(data);
  return (
    <>
      <NavBarWrap>
        {_data.map(([k, v], i: number) => {
          return <NavButton _ref={v} name={k} key={i} />;
        })}
        <Link to={"/cypher"}>
          <SquareLink>?</SquareLink>
        </Link>
      </NavBarWrap>
      <Spacer />
    </>
  );
};

const SquareLink = styled.a`
  display: inline-block;
  margin: 1%;
  border: 2px solid white;
  width: 20px;
  height: 20px;
  color: white;
`;
const Spacer = styled.div`
  height: 100px;
  background-color: #006666;
`;

const NavBarWrap = styled.div`
  font-family: "Arial", Times;
  z-index: 2;
  //height: 2%;
  width: 100%;
  overflow: hidden;
  background-color: #333;
  display: block;
  text-align: center;
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 10px;
`;

export default NavBar;
