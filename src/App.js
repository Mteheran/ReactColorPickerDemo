import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function ColorContainer({color}) {
  const className = "color-container color-" + color;
  return <div className={className}></div>
}

const COLORS = ['blue', 'green', 'red', 'yellow', 'violet'];

function ColorDropdown({ color, onChange }) {
  return (
    <div className="color-dropdown-container">
      <select
        className="color-dropdown"
        value={color}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="black" disabled>Select a color</option>
        {COLORS.map((c) => (
          <option key={c} value={c}>
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </option>
        ))}
      </select>
      <div
        className="color-dropdown-preview"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black"
    }
  }

  render() {
    return(
      <div className="color-picker">
        <ColorDropdown
          color={this.state.color}
          onChange={(color) => this.setState({ color })}
        />
        <div className="button-container">
          <button className="color-blue"   onClick={() => this.setState({ color: 'blue'})}></button>
          <button className="color-green"  onClick={() => this.setState({ color: 'green'})}></button>
          <button className="color-red"    onClick={() => this.setState({ color: 'red'})}></button>
          <button className="color-yellow" onClick={() => this.setState({ color: 'yellow'})}></button>
          <button className="color-violet" onClick={() => this.setState({ color: 'violet'})}></button>
        </div>
        <ColorContainer color={this.state.color}/>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Color Picker Challange</p>
        </header>
        <ColorPicker />
      </div>
    );
  }
}

export default App;
