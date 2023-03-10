
import './App.css';
import React, {useState} from "react";
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';

function App() {
  const [light, setLight] = useState('off');
  const dark = (light === 'off') ? 'dark' : '';
  return (
    <div className={`App ${dark}`}>
      <h1>Fancy Buttons!</h1>
      <section>
        <AngryButton></AngryButton>
        <CounterButton></CounterButton>
        <LightSwitchButton light={light} setLight={setLight}></LightSwitchButton>
        <TextRepeaterButton></TextRepeaterButton>
      </section>
    </div>
  );
}

export default App;