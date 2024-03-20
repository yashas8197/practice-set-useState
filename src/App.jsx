import "./App.css";
import { useState } from "react";

function SelectImage() {
  const images = [
    "https://placehold.co/100x100?text=Image1",
    "https://placehold.co/100x100?text=Image2",
    "https://placehold.co/100x100?text=Image3",
  ];
  const [selectImg, setSelectImg] = useState(0);

  const mapImages = images.map((image, index) => {
    return (
      <img key={index} src={`${image}`} onClick={() => setSelectImg(index)} />
    );
  });

  return (
    <div>
      <div>
        <img src={`${images[selectImg]}`} />
      </div>
      {mapImages}
    </div>
  );
}

function AddItem() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = { text: `Item ${items.length + 1}` };
    setItems([...items, newItem]);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

function ChangeBackground() {
  const colors = [
    "lightblue",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightyellow",
  ];

  const [color, setColor] = useState(colors[0]);

  return (
    <div style={{ background: color }}>
      <p>Background color is {color}</p>
      <button onClick={() => setColor(colors[Math.floor(Math.random() * 5)])}>
        Change Color
      </button>
    </div>
  );
}

function ToggleLoading() {
  const [text, setText] = useState("Content is loaded");

  return (
    <div>
      <p>{text}</p>
      <button
        onClick={() =>
          setText(
            text === "Content is loaded" ? "loading...." : "Content is loaded",
          )
        }
      >
        Toggle Loading
      </button>
    </div>
  );
}

function SelectedItem() {
  const items = ["Item 1", "Item 2", "Item 3"];

  const [selectedItem, setSelectedItem] = useState(null);

  const createList = items.map((item, index) => (
    <li
      key={index}
      style={{
        cursor: "pointer",
        color: selectedItem === item ? "blue" : "black",
      }}
      onClick={() => setSelectedItem(item)}
    >
      {item}
    </li>
  ));

  return (
    <div>
      <ul>{createList}</ul>
      <p>Selected Item: {selectedItem}</p>
    </div>
  );
}

export default function App() {
  return (
    <main>
      <SelectImage />
      <hr />
      <AddItem />
      <hr />
      <ChangeBackground />
      <hr />
      <ToggleLoading />
      <hr />
      <SelectedItem />
    </main>
  );
}
