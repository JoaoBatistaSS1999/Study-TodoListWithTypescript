import { connected } from "process";
import React, { useState, KeyboardEvent } from "react";
import { Container } from "./NewArea.style";

type Props = {
  onEnter: (taskName: string) => void;
};

const NewItem = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState("");
  const submitHandler = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText.trim().length !== 0) {
      onEnter(inputText);
      setInputText("");
    }
    console.log("Type something, input shouldnt be empty");
  };

  return (
    <Container>
      <div className='image'>➕</div>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type='text'
        placeholder='Add new item'
        onKeyUp={submitHandler}
      />
    </Container>
  );
};

export default NewItem;
