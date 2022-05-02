/* eslint-disable no-lone-blocks */
import "./App.css";
import { useEffect, useState } from "react";
////////////////

const App = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const choices = ["rock", "paper", "scissors"];

  const handleClick = (value) => {
    setUserChoice(value);
    generateComputerChoice();
  };

  const generateComputerChoice = () => {
    const randomNumber = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomNumber);
  };
  ////////////////

  useEffect(() => {
    switch (userChoice + computerChoice) {
      case "scissorspaper":
      case "rockscissors":
      case "paperrock":
        setResult("WINNER!");
        break;

      case "paperscissors":
      case "scissorsrock":
      case "rockpaper":
        setResult("LOSER!");
        break;

      case "rockrock":
      case "paperpaper":
      case "scissorsscissors":
        setResult("DRAW!");
        break;

      default:
    }
  }, [computerChoice, userChoice]);
  ////////////////

  return (
    <div className="App">
      <h1>YOU: {userChoice}</h1>
      <h1>computer: {computerChoice}</h1>
      {choices.map((choice, index) => (
        <button key={index} onClick={() => handleClick(choice)}>
          {choice}
        </button>
      ))}
      <h1>{result}</h1>
    </div>
  );
  ////////////////
};
////////////////

export default App;
