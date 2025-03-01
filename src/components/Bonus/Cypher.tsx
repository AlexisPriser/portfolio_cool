import React, { useEffect, useState } from "react";
import styled from "styled-components";
import WordField from "./WordField";
import img_day_cypher from "../../images/7day_cypher.png";

const Cypher = () => {
  const [lock, setlock] = useState([false]);
  const [word, setWord] = useState("");
  const [cypher, setCypher] = useState([""]);
  const [offset, setOffset] = useState(0);
  const base = 97;
  const base_max = 122;
  //a=97 z=122
  const updateWord = (nword: string) => {
    setWord(nword);
  };

  useEffect(() => {
    console.log("lock", lock);
  }, [lock]);
  const handleLock = (index: number) => {
    const _lock = [...lock];
    _lock[index] = !lock[index];
    setlock(_lock);
  };
  const cleanLock = (size: number) => {
    const _lock = lock.slice(0, size).map((cont) => {
      let r = cont;
      if (!cont) {
        r = false;
      } // clean the 'empty'
      return r;
    });
    setlock(_lock);
  };
  const handleShift = (inc: number) => {
    setOffset(offset + inc);
  };
  const decypher = (_char: string, _offset: number) => {
    const min = 97;
    const max = 122;

    let c = _char.charCodeAt(0) + _offset;

    let gate = true;
    if (_char.charCodeAt(0) === 32) {
      c = 32;
      gate = false;
    }

    if (gate) {
      if (c < min) {
        c += 25;
      }
      if (c > max) {
        c -= 26;
      }
      c = Math.min(c, max);
      c = Math.max(c, min);
    }
    return c;
  };

  useEffect(() => {
    if (word.length > 0) {
      const wlist = word.split("");
      const _word = wlist.map((char, i) => {
        return String.fromCharCode(decypher(char, offset));
      });
      const res = _word.reduce((a, b) => a + b).split(" ");
      const f_res = res.map((cont, i) => {
        let r = cont;
        if (lock[i]) {
          r = cypher[i];
        }
        return r;
      });
      cleanLock(f_res.length);
      setCypher(f_res);
    }
  }, [offset]);
  return (
    <StyledCypher>
      <CypherWrap>
        {cypher.map((cont, i) => {
          return (
            <StyledPre key={i} lock={lock[i]} onClick={() => handleLock(i)}>
              {cont}
            </StyledPre>
          );
        })}
      </CypherWrap>
      <div>
        <StyledButton onClick={() => handleShift(-1)}>{"<"}</StyledButton>
        {offset}
        <StyledButton onClick={() => handleShift(1)}>{">"}</StyledButton>
        <StyledButton onClick={() => setOffset(0)}>reset</StyledButton>
      </div>
      <WordField word={word} updateWord={updateWord} />
      <StyledImg src={img_day_cypher} />
    </StyledCypher>
  );
};

const StyledCypher = styled.div`
  display: flex;
  align-items: center;
  background-color: #e7c997;
  height: 100vh;
  flex-direction: column;
`;
const CypherWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: center;
  margin-bottom: 25px;
`;
const StyledButton = styled.button`
  padding: 8px;
  margin: 3px;
`;
const StyledImg = styled.img`
  margin: 3px;
  width: 100px;
`;
const StyledPre = styled.pre<{ lock: boolean }>`
  margin: 0px;
  width: fit-content;
  padding: 8px;
  border-radius: ${(props) => (props.lock ? "0px" : "8px")};
  border-bottom: 2px solid ${(props) => (props.lock ? " #725236" : "white")};
`;
export default Cypher;
