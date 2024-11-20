import React from "react";
import styled from "styled-components";

const NavButton = ({ _ref, name }: { _ref: any; name: string }) => {
  const handleClick = () => {
    _ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return <NavElem onClick={handleClick}>{name}</NavElem>;
};

const NavElem = styled.div`
  float: left;
  /*display: block;*/
  color: #f2f2f2;
  text-align: center;
  padding: 1% 1%;
  text-decoration: none;
  font-size: 150%;
  &:hover {
    background-color: #ddd;
    color: black;
  }
`;
export default NavButton;
