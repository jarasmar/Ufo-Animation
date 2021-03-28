import React, { useEffect, useRef } from 'react';

const Canvas = props => {
  
  // const { draw, ...rest } = props;
  const canvasRef = useRef(null);

  // Resize Canvas
  function resizeCanvasToDisplaySize(canvas) {
    if (canvas.width !== 800 || canvas.height !== 450) {
      canvas.width = 800
      canvas.height = 450
      return true 
    }
    return false
  }

  // Background Drawing Functions
  function createSky(ctx) {
    ctx.beginPath();
    var grd1 = ctx.createLinearGradient(0, 100, 0,300);
    grd1.addColorStop(0, "rgba(71, 0, 68, 1)");
    grd1.addColorStop(1, "rgba(100, 1, 73, 1)");
    ctx.fillStyle = grd1;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  }

  function createLandingPlanet(ctx) {
    ctx.beginPath();
    ctx.ellipse(400, 450, 430, 100, 0, Math.PI, 0);
    var grd2 = ctx.createLinearGradient(0, 300, 0, 400);
    grd2.addColorStop(0, "rgba(247, 185, 80, 1)");
    grd2.addColorStop(1, "rgba(134, 27, 74, 1)");
    ctx.fillStyle = grd2;
    ctx.fill();  
  
    buildLightCraters(ctx) 
    buildDarkCrater(ctx, 700);
    buildDarkCrater(ctx, 0);
  }
  // Functions to Create Craters
  function buildLightCraters(ctx) {
    // Crater A
    ctx.beginPath();
    ctx.ellipse(200, 440, 120, 70, 0, Math.PI, 0);
    ctx.fillStyle = "rgba(134, 27, 74, 1)";
    ctx.fill(); 
    ctx.beginPath();
    ctx.ellipse(200, 380, 60, 10, 0, 2*Math.PI, 0);
    ctx.fillStyle = "rgba(100, 1, 73, 1)";
    ctx.fill(); 
    ctx.beginPath();
    ctx.ellipse(200, 385, 40, 5, 0, 2*Math.PI, 0);
    ctx.fillStyle = "rgba(187, 71, 76, 1)";
    ctx.fill(); 

    // Crater B
    ctx.beginPath();
    ctx.ellipse(500, 430, 90, 50, 0, Math.PI, 0);
    ctx.fillStyle = "rgba(134, 27, 74, 1)";
    ctx.fill(); 
    ctx.beginPath();
    ctx.ellipse(500, 390, 50, 10, 0, 2*Math.PI, 0);
    ctx.fillStyle = "rgba(100, 1, 73, 1)";
    ctx.fill(); 
    ctx.beginPath();
    ctx.ellipse(500, 395, 40, 5, 0, 2*Math.PI, 0);
    ctx.fillStyle = "rgba(187, 71, 76, 1)";
    ctx.fill(); 

    // Crater C
    ctx.beginPath();
    ctx.ellipse(570, 415, 50, 37, 0, Math.PI, 0);
    ctx.fillStyle = "rgba(134, 27, 74, 1)";
    ctx.fill(); 
    ctx.beginPath();
    ctx.ellipse(570, 385, 30, 7, 0, 2*Math.PI, 0);
    ctx.fillStyle = "rgba(100, 1, 73, 1)";
    ctx.fill(); 
    ctx.beginPath();
    ctx.ellipse(570, 390, 20, 4, 0, 2*Math.PI, 0);
    ctx.fillStyle = "rgba(187, 71, 76, 1)";
    ctx.fill(); 
  }
  function buildDarkCrater(ctx, xAxis) {
    ctx.beginPath();
    ctx.ellipse(xAxis, 460, 80, 50, 0, Math.PI, 0);
    ctx.fillStyle = "rgba(71, 0, 68, .2)";
    ctx.fill(); 
    ctx.beginPath();
    ctx.ellipse(xAxis, 420, 50, 10, 0, 2*Math.PI, 0);
    ctx.fillStyle = "rgba(100, 1, 73, 1)";
    ctx.fill(); 
    ctx.beginPath();
    ctx.ellipse(xAxis, 425, 40, 5, 0, 2*Math.PI, 0);
    ctx.fillStyle = "rgba(187, 71, 76, 1)";
    ctx.fill();   
  }

  // Functions for building Sky
  function addPlanets(ctx) {
    // Planet A
    ctx.beginPath()
    ctx.arc(200, 200, 40, 0, 2 * Math.PI)
    var grd3 = ctx.createRadialGradient(190, 210, 30, 200, 220, 90);
    grd3.addColorStop(0, "rgba(247, 185, 80, .1)");
    grd3.addColorStop(1, "rgba(100, 1, 73, 1)");
    ctx.fillStyle = grd3
    ctx.fill()

    // Planet B
    ctx.beginPath()
    ctx.arc(750, 20, 60, 0, 2 * Math.PI)
    var grd4 = ctx.createRadialGradient(750, 110, 20, 740, 120, 120);
    grd4.addColorStop(0, "rgba(247, 185, 80, .3)");
    grd4.addColorStop(1, "rgba(100, 1, 73, 1)");
    ctx.fillStyle = grd4
    ctx.fill()
  }

  // Stars
  function createBlueStar(ctx, x, y, size) {
    ctx.beginPath()
    ctx.arc(x, y, size+3, 0, 2 * Math.PI)
    ctx.fillStyle = 'rgb(60, 55, 126, .1)'
    ctx.fill()
    ctx.beginPath()
    ctx.arc(x, y, size, 0, 2 * Math.PI)
    ctx.fillStyle = 'rgb(60, 55, 126, .3)'
    ctx.fill()
  }
  function createYellowStar(ctx, x, y, size) {
    ctx.beginPath()
    ctx.arc(x, y, size+3, 0, 2 * Math.PI)
    ctx.fillStyle = 'rgb(249, 248, 113, .1)'
    ctx.fill()
    ctx.beginPath()
    ctx.arc(x, y, size, 0, 2 * Math.PI)
    ctx.fillStyle = 'rgb(249, 248, 113, .3)'
    ctx.fill()
  }
  function createPurpleStar(ctx, x, y, size) {
    ctx.beginPath()
    ctx.arc(x, y, size+3, 0, 2 * Math.PI)
    ctx.fillStyle = 'rgb(134, 27, 74, .1)'
    ctx.fill()
    ctx.beginPath()
    ctx.arc(x, y, size, 0, 2 * Math.PI)
    ctx.fillStyle = 'rgb(134, 27, 74, .3)'
    ctx.fill()
  }
  function createPointyStar(ctx, x, y, size, opacity) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+size, y+2*size)
    ctx.lineTo(x+2*size, y)
    ctx.fillStyle = `rgba(249, 248, 113, ${opacity})`
    ctx.fill();  

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+size, y-2*size)
    ctx.lineTo(x+2*size, y)
    ctx.fillStyle = `rgba(249, 248, 113, ${opacity})`
    ctx.fill();  

    ctx.beginPath();
    ctx.moveTo(x+size, y-size);
    ctx.lineTo(x-size, y)
    ctx.lineTo(x+size, y+size)
    ctx.fillStyle = `rgba(249, 248, 113, ${opacity})`
    ctx.fill(); 

    ctx.beginPath();
    ctx.moveTo(x+size, y+size);
    ctx.lineTo(x+3*size, y)
    ctx.lineTo(x+size, y-size)
    ctx.fillStyle = `rgba(249, 248, 113, ${opacity})`
    ctx.fill(); 
  }

  function addStars(ctx, starOpacity1, starOpacity2, starOpacity3, lowStarOpacity) {
    createBlueStar(ctx, 100, 200, 5)
    createBlueStar(ctx, 200, 130, 6)
    createBlueStar(ctx, 210, 260, 4)
    createBlueStar(ctx, 700, 350, 5)
    createBlueStar(ctx, 620, 100, 7)
    createBlueStar(ctx, 10, 60, 6)
  
    createPurpleStar(ctx, 100, 200, 5)
    createPurpleStar(ctx, 230, 100, 6)
    createPurpleStar(ctx, 760, 230, 5)
    createPurpleStar(ctx, 560, 270, 3)
    createPurpleStar(ctx, 3100, 50, 5)
    createPurpleStar(ctx, 620, 170, 7)
  
    createYellowStar(ctx, 100, 300, 3) 
    createYellowStar(ctx, 300, 30, 4) 
    createYellowStar(ctx, 190, 90, 3) 
    createYellowStar(ctx, 720, 240, 4)  
    createYellowStar(ctx, 530, 180, 5) 
    createYellowStar(ctx, 490, 220, 6) 
  
    createPointyStar(ctx, 100, 100, 10, starOpacity2)
    createPointyStar(ctx, 630, 80, 5, starOpacity1)
    createPointyStar(ctx, 700, 300, 2, starOpacity3)
    createPointyStar(ctx, 50, 200, 3, starOpacity1)
    createPointyStar(ctx, 270, 280, 5, starOpacity2)
    createPointyStar(ctx, 560, 310, 4, starOpacity3)
  
    changeStarLight(starOpacity1, starOpacity2, starOpacity3, lowStarOpacity);
  }

  function changeStarLight(starOpacity1, starOpacity2, starOpacity3, lowStarOpacity) {
    if (Math.round(starOpacity1 * 10) / 10 === 0.7) {
      lowStarOpacity = true;
    }
    if (Math.round(starOpacity1 * 10) / 10 === 0.1) {
      lowStarOpacity = false;
    }

    if (lowStarOpacity) {
      starOpacity1 -= 0.02
      starOpacity2 -= 0.01
      starOpacity3 -= 0.01
    }
    if (!lowStarOpacity ) {
      starOpacity1 += 0.02
      starOpacity2 += 0.01
      starOpacity3 += 0.01
    }
  }


  function addBackground(canvas, ctx, starOpacity1, starOpacity2, starOpacity3, lowStarOpacity) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    createSky(ctx);
    createLandingPlanet(ctx);
    addPlanets(ctx);
    addStars(ctx, starOpacity1, starOpacity2, starOpacity3, lowStarOpacity);
  }

  // UFO Drawing Functions 
  // function buildUfoBody(ctx, xBase, yBase){
  //   // UFO Body top half
  //   ctx.beginPath();
  //   ctx.ellipse(xBase, yBase, 100, 30, 0, Math.PI, 0);
  //   ctx.fillStyle = 'rgb(0, 0, 0)'
  //   ctx.fill();
  
  //   // UFO Body bottom half
  //   ctx.beginPath();
  //   ctx.ellipse(xBase, yBase + 2, 100, 10, 0, 0, Math.PI);
  //   ctx.fillStyle = 'rgb(0, 0, 0)'
  //   ctx.fill();
  
  //   // UFO Base
  //   ctx.beginPath();
  //   ctx.ellipse(xBase, yBase + 14, 50, 12, 0, 0, Math.PI);
  //   ctx.fillStyle = 'rgb(0, 0, 0)'
  //   ctx.fill();
  
  //   // UFO Cabin
  //   ctx.beginPath();
  //   ctx.ellipse(xBase, yBase - 20, 40, 50, 0, Math.PI, 0);
  //   ctx.fillStyle = 'rgb(0, 0, 0)'
  //   ctx.lineWidth = 3.0
  //   ctx.stroke();
  // }


  // Right after the canvas is in the dom, get it on JS to take context and draw
  useEffect(() => {
    // Variables for Canvas
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d'); 

    // Variables for Animation timing
    // const interval = setInterval(() => {}, 15)

    // Variables for UFO Placement and Animation
    let xBase = 400;
    let yBase = 100;
    // Variables for Star Animations
    let starOpacity1 = 0.7
    let starOpacity2 = 0.5
    let starOpacity3 = 0.4
    let lowStarOpacity = true;
    
    const interval = setInterval(() => {
      resizeCanvasToDisplaySize(canvas)
      addBackground(canvas, ctx, starOpacity1, starOpacity2, starOpacity3, lowStarOpacity);
    }, 1500)

    return () => {
      clearInterval(interval)
    }
  }, [resizeCanvasToDisplaySize, addBackground])
  

  return <canvas ref={canvasRef} {...props}/>
}

export default Canvas