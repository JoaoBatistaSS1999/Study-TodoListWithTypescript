import React, { useState } from "react";
import { Container } from "./ListItem.styles";
import { Item } from "../../Types/Item";

type Props = {
  item: Item;
};

export const ListItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <Container done={isChecked}>
      <input
        id='check'
        type='checkbox'
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
          item.done = !item.done;
        }}
      />
      <label htmlFor='check'>
        {item.name}
        {item.done.toString()}
      </label>
    </Container>
  );
};
