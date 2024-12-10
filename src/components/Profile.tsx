import React from "react";
import { ProfilType } from "../data";
import styled from "styled-components";
import profil_pic from "../images/profil_pic.jpg";

const Profile = ({
  data,
  ref_prop,
}: {
  data: ProfilType;
  ref_prop: React.LegacyRef<any>;
}) => {
  const content = data.details.content;
  return (
    <ProfilWrap ref={ref_prop}>
      <ProfilRow>
        <h3>{data.resume.titre}</h3>
        <p style={{ whiteSpace: "pre-line" }}>{data.resume.description}</p>
      </ProfilRow>
      <ProfilRow>
        <ProfilPic src={profil_pic.src} />
      </ProfilRow>
      <ProfilRow>
        <h3>{data.details.titre}</h3>
        {Object.keys(content).map((cont: string, i: number) => {
          return (
            <div key={i}>
              <strong>{cont}</strong>:<br />
              {content[cont]}
            </div>
          );
        })}
      </ProfilRow>
    </ProfilWrap>
  );
};

const ProfilWrap = styled.div`
  font-family: "Arial", Times;
  display: flex;
  flex-wrap: wrap;
  vertical-align: middle;
  background-color: #006666;
  color: white;
  text-align: center;
  word-break: break-all;
  white-space: normal;
  padding: 5% 15%;
  line-height: 1.64;
  //width: 100%;
`;

const ProfilRow = styled.div`
  text-align: left;
  word-break: auto-phrase;
  padding: 0 15px;
  max-width: 30%;
  min-width: 200px;
`;

const ProfilPic = styled.img`
  border-radius: 50%;
`;

export default Profile;
