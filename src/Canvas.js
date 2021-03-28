import React, { useEffect, useRef } from 'react';

const Canvas = props => {
  
  const canvasRef = useRef(null);

  // Resize Canvas
  function resizeCanvasToDisplaySize(canvas) {

    if (canvas.width !== 800 || canvas.height !== 400) {
      canvas.width = 800
      canvas.height = 400
      return true 
    }

    return false
  }


  function buildUfoBody(ctx, xBase, yBase){
    // UFO Body top half
    ctx.beginPath();
    ctx.ellipse(xBase, yBase, 100, 30, 0, Math.PI, 0);
    ctx.fillStyle = 'rgb(0, 0, 0)'
    ctx.fill();
  
    // UFO Body bottom half
    ctx.beginPath();
    ctx.ellipse(xBase, yBase + 2, 100, 10, 0, 0, Math.PI);
    ctx.fillStyle = 'rgb(0, 0, 0)'
    ctx.fill();
  
    // UFO Base
    ctx.beginPath();
    ctx.ellipse(xBase, yBase + 14, 50, 12, 0, 0, Math.PI);
    ctx.fillStyle = 'rgb(0, 0, 0)'
    ctx.fill();
  
    // UFO Cabin
    ctx.beginPath();
    ctx.ellipse(xBase, yBase - 20, 40, 50, 0, Math.PI, 0);
    ctx.fillStyle = 'rgb(0, 0, 0)'
    ctx.lineWidth = 3.0
    ctx.stroke();
  }


  // Right after the canvas is in the dom, get it on JS to take context and draw
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d'); 

    // Variables for UFO Placement and Animation
    let xBase = 400;
    let yBase = 100;

    // Draw
    resizeCanvasToDisplaySize(canvas)
    buildUfoBody(ctx, xBase, yBase);
  }, [resizeCanvasToDisplaySize, buildUfoBody])
  

  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas