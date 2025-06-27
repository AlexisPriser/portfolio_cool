import React, { useRef, useState, useEffect } from "react";
import Articles from "./components/Articles";
import Competences from "./components/Competences";
import Links from "./components/Links";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import data, { NavType, ExperienceType } from "./data";
import { getColour } from "./functions/gradientGenerator";
import styled from "styled-components";

function Base() {
  const ref_profile = useRef();
  const ref_etd = useRef();
  const ref_pro = useRef();
  const ref_comp = useRef();
  const ref_proj = useRef();
  const ref_links = useRef();

  const navdata = {
    Profile: ref_profile,
    Competences: ref_comp,
    Professionnel: ref_pro,
    Projets: ref_proj,
    Etudes: ref_etd,
    Liens: ref_links,
  } as NavType;

  const [colors, setColors] = useState<string[]>();
  useEffect(() => {
    const i_max = data.experiences.length;
    const _colors = [];
    for (let i = 0; i < i_max; i++) {
      _colors.push(getColour("#009999", "#000000", 0, 4, i));
    }
    setColors(_colors);
  }, []);

  return (
    <div className="App">
      <CSSprops>
        {/* 
        <Header>
          <h1>Portfolio Alexis PRISER</h1>
        </Header>
        */}
        <NavBar data={navdata} />
        <Profile data={data.profil} ref_prop={ref_profile} />
        <Competences data={data.competences} ref_prop={ref_comp} />
        <ExpBox>
          {data.experiences.map((cont: ExperienceType, i: number) => {
            let next_color = "#000000";
            if (i <= data.experiences.length - 2 && colors) {
              next_color = colors[i + 1];
            }
            return (
              <Articles
                data={cont}
                ref_prop={navdata[cont.titre]}
                backgroundColor={colors && colors[i]}
                nextBackgroundColor={next_color}
                key={i}
              />
            );
          })}
        </ExpBox>
        <Links data={data.liens} ref_prop={ref_links} />
      </CSSprops>

      {/*<AsciiFire />*/}
    </div>
  );
}

const Header = styled.div`
  /*background-color:#4d4d4d;*/
  background-color: #339966;
  color: white;
  padding: 0px;
  /*height:60px;*/
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  /*line-height: 50px;*/
  width: 100%;
  white-space: nowrap;
  overflow: auto;
  text-wrap: auto;
  font-family: "Verdana", Times;
`;

const ExpBox = styled.div`
  font-family: "Arial", Times;
  //display: inline-block;
  vertical-align: middle;

  background-color: #009999;
  color: white;
  text-align: center;
  word-break: break-all;
  white-space: normal;
  line-height: 1.64;
`;
const CSSprops = styled.div`
  font-family: "Arial", Times;
  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 200%;
    font-weight: normal;
  }

  h4,
  h5,
  h6,
  h4,
  h5,
  h6 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export default Base;
