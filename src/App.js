import "./App.css";
import abstractBlue from "./images/abstract-blue.jpg";
import abstractDark from "./images/abstract-dark.jpg";
import rocket from "./images/rocket.png";
import beach from "./images/beach.jpg";
import greenBackground from "./images/green-bg.jpg";
import { useState } from "react";
import Cards from "./components/Cards";

function App() {
  const [images, setImages] = useState([
    abstractBlue,
    abstractDark,
    rocket,
    beach,
    greenBackground,
  ]);

  const shuffle = (array) => {
    let shuffled = array.sort(() => Math.random() - 0.5);
    console.log(shuffled);
    setImages([...shuffled]);
  };

  return (
    <div className="App">
      <Cards images={images} shuffle={shuffle} />
    </div>
  );
}

export default App;
