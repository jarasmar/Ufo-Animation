import React from 'react';
import Canvas from './Canvas';
import './App.css';

function App() {

  // const canvas = document.getElementById("app-canvas")
  // const ctx = canvas.getContext("2d");

  // function createBee() {
  //   ctx.beginPath();
  //   ctx.arc(200, 200, 60, 0, 2 *  Math.PI)
  //   ctx.fillStyle = 'rgb(0, 0, 0)'
  //   ctx.fill()
  // }
  
  // setInterval(createBee, 15)

  return (
    <Canvas />
  );
}

export default App;
