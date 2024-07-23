import React, { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max);
  };

  const getNextAnecdote = () => {
    let newSelected;
    do {
      newSelected = getRandomNumber(anecdotes.length);
    } while (newSelected === selected);
    setSelected(newSelected);
  };

  const getVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);

  const getMostVotes = () => {
    const maxVotes = Math.max(...votes);
    return votes.indexOf(maxVotes);
  };

  const mostVoted = getMostVotes();

  return (
    <div>
      <h1>{anecdotes[selected]}</h1>
      <p>Has {votes[selected]} votes</p>
      <button onClick={getVote}>Vote</button>
      <button onClick={getNextAnecdote}>Next anecdote</button>
      <h2>Anecdote with the most votes</h2>
      {votes[mostVoted] > 0 && (
        <div>
          <p>{anecdotes[mostVoted]}</p>
          <p>Has {votes[mostVoted]} votes</p>
        </div>
      )}
    </div>
  );
};

export default App;