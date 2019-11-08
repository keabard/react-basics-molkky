import React, { useState } from "react";
import Pin from "./components/Pin/Pin";
import "./App.css";

const App = () => {
  const [fallenPins, updateFallenPins] = useState([]);

  const handlePinStatusUpdate = (number, fallen) => {
    if (fallen) {
      updateFallenPins(fallenPins.filter(pin => pin !== number));
    } else {
      updateFallenPins(fallenPins.concat(number));
    }
  };

  const calculateScore = () => {
    if (fallenPins.length === 1) {
      return fallenPins[0];
    } else {
      return fallenPins.length;
    }
  };

  return (
    <div className="App">
      <div className="App__row">
        <Pin number={7} onPinStatusUpdate={handlePinStatusUpdate} />
        <Pin number={9} onPinStatusUpdate={handlePinStatusUpdate} />
        <Pin number={8} onPinStatusUpdate={handlePinStatusUpdate} />
      </div>
      <div className="App__row">
        <Pin number={5} onPinStatusUpdate={handlePinStatusUpdate} />
        <Pin number={11} onPinStatusUpdate={handlePinStatusUpdate} />
        <Pin number={12} onPinStatusUpdate={handlePinStatusUpdate} />
        <Pin number={6} onPinStatusUpdate={handlePinStatusUpdate} />
      </div>
      <div className="App__row">
        <Pin number={3} onPinStatusUpdate={handlePinStatusUpdate} />
        <Pin number={10} onPinStatusUpdate={handlePinStatusUpdate} />
        <Pin number={4} onPinStatusUpdate={handlePinStatusUpdate} />
      </div>
      <div className="App__row">
        <Pin number={1} onPinStatusUpdate={handlePinStatusUpdate} />
        <Pin number={2} onPinStatusUpdate={handlePinStatusUpdate} />
      </div>
      <div className="App__score">Score : {calculateScore()}</div>
    </div>
  );
};

export default App;
