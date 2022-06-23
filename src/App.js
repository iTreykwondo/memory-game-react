import "./App.css";
import abstractBlue from "./images/abstract-blue.jpg";
import abstractDark from "./images/abstract-dark.jpg";
import rocket from "./images/rocket.png";
import beach from "./images/beach.jpg";
import greenBackground from "./images/green-bg.jpg";
import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Scoreboard from "./components/Scoreboard";

function App() {
  const [images, setImages] = useState([
    abstractBlue,
    abstractDark,
    rocket,
    beach,
    greenBackground,
  ]);

  const [imageArray, setImageArray] = useState([]);
  const [score, setScore] = useState(0);

  const resetGame = () => {
    setImageArray([]);
    setScore(0);
  };

  function containsDuplicates(arr) {
    return arr.some(function (item) {
      return arr.indexOf(item) !== arr.lastIndexOf(item);
    });
  }

  const getImage = (e) => {
    let newArray = [e.target.currentSrc];
    setImageArray(imageArray.concat(newArray));
    setScore(score + 1);
  };

  const shuffle = (array) => {
    let shuffled = array.sort(() => Math.random() - 0.5);
    setImages([...shuffled]);
  };

  useEffect(() => {
    shuffle(images);
  }, []);

  useEffect(() => {
    if (containsDuplicates(imageArray)) {
      resetGame();
    }
  }, [imageArray]);

  return (
    <div className="App">
      <Scoreboard score={score} />
      <Cards images={images} shuffle={shuffle} getImage={getImage} />
    </div>
  );
}

export default App;
