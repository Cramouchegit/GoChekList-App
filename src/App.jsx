import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import CheckList from "./components/CheckList";
import Stats from "./components/Stats";
import "./App.css";

const initialItems = [
  {
    id: 1,
    title: "Coding",
    checked: false,
  },
  {
    id: 2,
    title: "Sleep",
    checked: true,
  },
];

// Function Stats

function App() {
  const [items, setItems] = useState(initialItems);

  const addItem = (title) => {
    const newItem = {
      id: items.length + 1,
      title,
      checked: false,
    };
    setItems([...items, newItem]);
  };

  const toggleCheck = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Logo />
      <Form addItem={addItem} />
      <CheckList
        items={items}
        toggleCheck={toggleCheck}
        removeItem={removeItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
