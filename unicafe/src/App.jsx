import { useState } from "react";


const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ goods, neutral, bad }) => {
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={goods} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={goods + neutral + bad} />
        <StatisticLine text="average" value={(goods + neutral + bad) / 3} />
        <StatisticLine text="positive" value={((goods + neutral) / (goods + neutral + bad)) * 100 + '%'} />
      </tbody>
    </table >
  )
}

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {
  const [goods, setGoods] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onGoodClick = () => {
    setGoods(goods + 1);
    console.log('hello')
  };
  const onNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const onBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button text="good" onClick={onGoodClick} />
        <Button text="neutral" onClick={onNeutralClick} />
        <Button text="bad" onClick={onBadClick} />

      </div>

      <br />
      <h2>Statistics</h2>

      {goods === 0 && neutral === 0 && bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics goods={goods} neutral={neutral} bad={bad} />
      )}

    </div>
  );
}

export default App;
