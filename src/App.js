import "./App.css";
import abstractBlue from "./images/abstract-blue.jpg";
import abstractDark from "./images/abstract-dark.jpg";
import rocket from "./images/rocket.png";
import beach from "./images/beach.jpg";
import greenBackground from "./images/green-bg.jpg";
import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Scoreboard from "./components/Scoreboard";
import BestScore from "./components/BestScore";

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
  const [bestScore, setBestScore] = useState(0);

  const resetGame = () => {
    setImageArray([]);
    setScore(0);
  };

  const checkBestScore = (arr) => {
    if (bestScore < arr.length) {
      setBestScore(arr.length - 1);
    }
  };

  const containsDuplicates = (arr) => {
    return arr.some(function (item) {
      return arr.indexOf(item) !== arr.lastIndexOf(item);
    });
  };

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
      checkBestScore(imageArray);
      resetGame();
    } else if (score === 5) {
      alert(`You win with a score of ${score}`);
      setBestScore(score);
      resetGame();
    }
  }, [imageArray]);

  return (
    <div className="App">
      <Scoreboard score={score} />
      <BestScore bestScore={bestScore} />
      <Cards images={images} shuffle={shuffle} getImage={getImage} />
    </div>
  );
}

export default App;
