import React, { useState } from "react";
import { Container, Area, Header } from "./App.styles";
import { Item } from "./Types/Item";
import { ListItem } from "./components/ListItem/ListItem";
import NewItem from "./components/AddArea/NewItem";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Order some food", done: false },
    { id: 2, name: "Clean the house", done: false },
    { id: 3, name: "Get good at GIT", done: false },
    { id: 4, name: "Learn Typescript", done: false },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: newList.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  return (
    <Container>
      <Area>
        <Header>Todo List</Header>
        <NewItem onEnter={handleAddTask} />
        {list.map((item, index) => (
          <ListItem key={index} item={item}></ListItem>
        ))}
      </Area>
    </Container>
  );
};

export default App;
