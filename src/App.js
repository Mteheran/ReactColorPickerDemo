import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function ColorContainer({ color }) {
  const className =
    "color-container color-" + color;
  return (
    <div className={className}></div>
  );
}

function ColorPicker() {
  const [color, setColor] =
    useState("black");

  return (
    <div className="color-picker">
      <div className="button-container">
        <button
          className="color-blue"
          onClick={() =>
            setColor('blue')
          }
        ></button>
        <button
          className="color-green"
          onClick={() =>
            setColor('green')
          }
        ></button>
        <button
          className="color-red"
          onClick={() =>
            setColor('red')
          }
        ></button>
        <button
          className="color-yellow"
          onClick={() =>
            setColor('yellow')
          }
        ></button>
        <button
          className="color-brown"
          onClick={() =>
            setColor('brown')
          }
        ></button>
      </div>
      <ColorContainer color={color} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <p>Color Picker Challange</p>
      </header>
      <ColorPicker />
    </div>
  );
}

export default App;
