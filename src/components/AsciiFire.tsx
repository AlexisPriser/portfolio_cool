import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { flip } from "../FlipSlice";
import flipSlice from "../FlipSlice";
import { RootState } from "../store";

const randVal = (size: number) => {
  let res = Math.floor(Math.random() * size);
  if (res === size) {
    res--;
  }
  return res;
};

const getFireChar = () => {
  return " ,;+ltgti!l?/\\|)(1}{][rczjftJUOQocxfXWB8&%$#@";
};

function gamble(stake: number, win: number, loss: number) {
  var dice = randVal(stake);
  var res = loss;
  if (dice >= stake - 1) {
    res = win;
  }
  return res;
}

const GenerateFire = (f_array: number[]) => {
  const fireChar = getFireChar();
  const fc_size = fireChar.length;
  const width = 128;
  const height = 40;
  let firePixelArray = [0] as number[];
  let base = [];

  const sp_st = width * (height - 1);
  for (let i = 0; i < width * height; i++) {
    firePixelArray[i] = 0;
    if (f_array.length > 0) {
      firePixelArray = [...f_array];
    }

    if (i > sp_st) {
      base.push(randVal(fc_size));
    }
  }

  firePixelArray = firePixelArray.splice(0, sp_st);
  firePixelArray = firePixelArray.concat(base);

  let fireString = "";
  const fpa_length = firePixelArray.length;
  const offset = 2;
  const imax = fpa_length - width - offset;
  for (let i = 0; i < imax; i++) {
    const inv = Math.max((fpa_length - i) / fpa_length, 0);
    const cur_off = randVal(offset);
    let avgChar = Math.floor(
      (firePixelArray[i] +
        firePixelArray[i - cur_off] +
        firePixelArray[width + i] +
        firePixelArray[width + i + cur_off] -
        1) /
        (3.41 + Math.random())
    );
    if (avgChar < 0) {
      const rd_fc = randVal(fc_size);
      avgChar = gamble(
        Math.pow(inv * 100, 2),
        Math.floor(rd_fc / 2 + fc_size / 2),
        0
      );
    }
    if (avgChar >= fc_size) {
      avgChar -= fc_size;
    }
    avgChar = gamble(i, 0, avgChar);

    firePixelArray[i] = Math.max(Math.floor(avgChar), 0);
    if (i < imax / 1.5) {
      fireString += fireChar[avgChar];
      if (i % width === 0) {
        fireString += `\n`;
      }
    }
  }

  return [fireString, firePixelArray];
};

const AsciiFire = () => {
  const [fire, setFire] = useState("");
  const [fireNum, setFireNum] = useState([0]);

  const pause = useSelector((state: RootState) => state.flip.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pause) {
      const timer = setTimeout(() => {
        const res = GenerateFire(fireNum);
        setFire(res[0] as string);
        setFireNum(res[1] as number[]);
      }, 1);
      return () => clearTimeout(timer);
    }
  });

  const handleClick = () => {
    //console.log("pause", pause);
    //setPause(!pause);
    dispatch(flip());
  };

  return (
    <FirePlace onClick={handleClick}>
      <WrapFire>{fire}</WrapFire>
    </FirePlace>
  );
};
const FirePlace = styled.div`
  z-index: -100;
  width: 100%;
  height: 80vh;
  margin: 0;
  padding: 0;
  background: black;
  position: absolute;
`;

const Pause = styled.img`
  z-index: 3;
  left: 0;
  top: 0;
  position: absolute;
`;

const WrapFire = styled.pre`
  z-index: -101;

  background-image: linear-gradient(to top, white, yellow, red, red);
  -webkit-background-clip: text;
  color: transparent;
  margin: 0;
  padding: 0;
  width: 100%;
  font-size: 11px;
  letter-spacing: 0.3vw;
  line-height: 1.5;
  overflow: hidden;
  position: absolute;
  bottom: 0;
`;

export default AsciiFire;
