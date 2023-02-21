import React, {useState} from "react";

function CounterButton(props) {
  const [clickAmount, setCllickAmount] = useState(0);
  const handleClick = () => {
    setCllickAmount(clickAmount + 1)
  } 
  return (
    <button onClick={handleClick} className="CounterButton">
      You clicked me {clickAmount} amount of times
    </button>
  );
}

export default CounterButton;