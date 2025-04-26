import { useState } from 'react'
import './App.css'
import React from 'react'

function App() {
  const choices = ['rock', 'paper', 'scissors']
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  const playgame = (playerChoice) => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const compChoice = choices[randomIndex];
    setPlayerChoice(playerChoice);
    setComputerChoice(compChoice);

    if (playerChoice === compChoice) {
      setResult('It\'s a tie!');
    } else if (
      (playerChoice === 'rock' && compChoice === 'scissors') ||
      (playerChoice === 'paper' && compChoice === 'rock') ||
      (playerChoice === 'scissors' && compChoice === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('You lose!');
    }
  }

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      <div>
        {choices.map(choice => (
          <button key={choice} onClick={() => playgame(choice)}>
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </button>
        ))}
      </div>
      <div>
        <p>Your choice: {playerChoice}</p>
        <p>Computer's choice: {computerChoice}</p>
        <h2>{result}</h2>
      </div>
    </div>
  )
}

export default App