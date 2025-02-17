$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500, 0, 20, 290);
    createPlatform(1100, 600, 50, 50, "black");
    createPlatform(900, 500, 50, 50, "black");
    createPlatform(1300, 400, 50, 50, "black");
    createPlatform(1100, 300, 50, 50, "black");
    createPlatform(1000, 700, 50, 50, "black");
    createPlatform(700, 500, 50, 50, "black");
    createPlatform(550, 400, 50, 50, "black");
    createPlatform(800, 300, 50, 50, "black");


    // TODO 3 - Create Collectables
    createCollectable("steven", 350, 5.0, 0.5);
    createCollectable("diamond", 200, 170, 0.5, 0.7);
    createCollectable("grace", 500, 300, 0.7, 0.6);



    
    // TODO 4 - Create Cannons
    createCannon("top", 300, 1500);
    createCannon("right", 600, 700);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
