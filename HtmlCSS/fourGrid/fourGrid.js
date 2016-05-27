(function(){
  var counter = 0,
  //pause squares for 2 seconds after color picked
  psquares = [], 
  squares = document.getElementsByClassName("squareGrid"),
  randomSquare;
  isPaused = false;

  function gridColor() {
    // every 2 seconds remove square recently colored to be able to
    // change color again as long as list not empty
    if(psquares!== null){
      setInterval(function(){psquares.shift();}, 2000);
    }

    // used this site for generating Random Color
    // http://qnimate.com/generating-random-colors-in-javascript/
    var r = getRandomInt(0, 255);
    var g = getRandomInt(0, 255);
    var b = getRandomInt(0, 255);

    do {
      giveRandomSquare();
    } while(psquares.indexOf(randomSquare) != -1);

    isPaused = isInArray(randomSquare, psquares);
    // gives the block a random color
    if(!isPaused){
      squares[randomSquare].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
      psquares.push(randomSquare);
    }
  }
  // function to pick a random square
  function giveRandomSquare() {
    randomSquare = Math.floor(Math.random() * squares.length);
  }

  /* A function to return random number from min to max */
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // checks to see if in array
  function isInArray(value, array){
    return array.indexOf(value) > -1;
  }

  //interval of every 250 milliseconds
  setInterval(gridColor, 250);
})();