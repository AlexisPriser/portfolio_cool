import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function shuffle(array: string[]) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

const WordTrain = ({ words, speed }: { words: string[]; speed: number }) => {
  const [direction, setDirection] = useState(speed);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;

  useEffect(() => {
    //gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);
    /*
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => {
          direction = e.direction * -1;
        },
      },
      x: "-=300px",
    });*/
  }, []);
  const animation = () => {
    if (Math.abs(xPercent) >= 100) {
      xPercent = 0;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    gsap.set(thirdText.current, { xPercent: xPercent });
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
    //console.log(xPercent);
  };
  const [shuff, setShuff] = useState(shuffle(words).join(" ") + " ");

  return (
    <StyledTrain ref={slider}>
      <pre ref={firstText}>{shuff}</pre>
      <pre ref={secondText}>{shuff}</pre>
      <pre ref={thirdText}>{shuff}</pre>
    </StyledTrain>
  );
};

const StyledTrain = styled.div`
  display: flex;
  white-space: nowrap;
  font-size: 30px;
  overflow-x: hidden;
  background-color: #004545;
  color: white;
  position: relative;
  pre:nth-of-type(3) {
    position: absolute;
    right: 100%;
  }
`;

export default WordTrain;
