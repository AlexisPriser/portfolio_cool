import React, { ReactElement, useState } from "react";
import styled from "styled-components";

const WordField = ({
  word,
  updateWord,
}: {
  word: string;
  updateWord: (val: string) => void;
}) => {
  const [nword, setNword] = useState(word);
  const handleChange = (val: string) => {
    setNword(val);
    updateWord(val);
  };
  return (
    <StyledInput
      value={nword}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange(e.currentTarget.value)
      }
    />
  );
};

const StyledInput = styled.input`
  height: 30px;
  margin: 25px 3px;
`;
export default WordField;
