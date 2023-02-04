let player1 = document.getElementById("player1");
let button = document.getElementById("start2");
let button2 = document.getElementById("start3");
let winButton = document.getElementById("winwin");

let boxStop = document.getElementById("rect1_1");
let boxStop2 = document.getElementById("rect1_2");
let boxStop3 = document.getElementById("rect1_3");

let level2Box1 = document.getElementById("level2NotReady1")
let level2Box2 = document.getElementById("level2NotReady2")
let level2Box3 = document.getElementById("level2NotReady3")
let level2Box4 = document.getElementById("level2NotReady4")

let level3Box1 = document.getElementById("level3NotReady1")
let level3Box2 = document.getElementById("level3NotReady2")
let level3Box3 = document.getElementById("level3NotReady3")
let level3Box4 = document.getElementById("level3NotReady4")

alert("Yo!")
confirm("I need some help! Can you help me??")
alert("Thanks! We don't have much time to clear these 'bugs' but I have faith in you!" )
alert("If you're ready...Press OK!")

let timer = document.getElementById("timer")
let timeTime = 0
function updateTime(){
  
  timeTime +=1
  timer.innerText = timeTime
}

setInterval(updateTime,1000)




// initialize move control + current position of player that we will reference the entire game in order to set position back

let move = 10;
let currentPositionX = 450;
let currentPositionY = 0;



// set player left and top poisitions to be referenced later on

player1.style.left = "450px";
player1.style.top = "0px";
 

// give player 1 the ability to move the sprite within the scope of the box it's contained in 
window.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "d" && parseInt(player1.style.left) < 450) {
    currentPositionX += move;
    player1.style.left = currentPositionX + "px";
    // console.log(player1.style.left);
    console.log(`player1 offset left is ${player1.offsetLeft} and offset top is ${player1.offsetTop}`);

  } else if (e.key.toLowerCase() === "a" && parseInt(player1.style.left) > 0) {
    currentPositionX -= move;
    player1.style.left = currentPositionX + "px";
    // console.log(player1.style.left);
    console.log(`player1 offset left is ${player1.offsetLeft} and offset top is ${player1.offsetTop}`);

  } else if (e.key.toLowerCase() === "s" && parseInt(player1.style.top) < 450) {
    currentPositionY += move;
    player1.style.top = currentPositionY + "px";
    // console.log(player1.style.top);
    console.log(`player1 offset left is ${player1.offsetLeft} and offset top is ${player1.offsetTop}`);

  } else if (e.key.toLowerCase() === "w" && parseInt(player1.style.top) > 0) {
    currentPositionY -= move;
    player1.style.top = currentPositionY + "px";
    // console.log(player1.style.top);
    console.log(`player1 offset left is ${player1.offsetLeft} and offset top is ${player1.offsetTop}`);

  }
});


// resets the player position & current position variables of the player
function setBack1() {
  player1.style.left = "450px";
  player1.style.top = "0px";
  currentPositionX = 450;
  currentPositionY = 0;
}





// this stops level 1 once we reach the end.
let firstLevelStopped = false;
let secondLevelStart = false
let thirdLevelStart = false;


//button to go to level 2
button.addEventListener("click", (e) => {
  // alert("you won!");
  firstLevelStopped = true;
  boxStop.remove();
  boxStop2.remove();
  boxStop3.remove();
  button.remove();

  document.getElementById("level2NotReady1").setAttribute("id", "level2Ready1");
  document.getElementById("level2NotReady2").setAttribute("id", "level2Ready2");
  document.getElementById("level2NotReady3").setAttribute("id", "level2Ready3");
  document.getElementById("level2NotReady4").setAttribute("id", "level2Ready4");
  setBack1();
  
  clearInterval(runLevel1)
  secondLevelStart = true;
  button2.style.display = "initial";
  console.log(secondLevelStart);


  
 });




//this checks the position of the player and resets it accordingly depending on if the player is within the region of the "divs" or maze walls
function runLevel1() {
  if (firstLevelStopped) return;
  if (
    // checks first bar far left
    player1.offsetTop < 400 && player1.offsetLeft < 50 || 
    // checks second bar middle screen
    (player1.offsetTop < 190 && player1.offsetLeft > 50) && 
    (player1.offsetTop > 100 && player1.offsetLeft > 50) ||
    //checks very bottom box
    (player1.offsetTop < 450 && player1.offsetLeft > 50) && 
    (player1.offsetTop > 360 && player1.offsetLeft > 50)
    ){
      setBack1();
    }
  }
  


  
  // second level conditions
  function runLevel2() {
        if (secondLevelStart == true) {
        if (
          // checks bright red bar 
          ((player1.offsetTop < 90 && player1.offsetLeft > 100) && 
          (player1.offsetTop > 0 && player1.offsetLeft > 100)) ||
          // // checks dark red bar 
          ( (player1.offsetTop < 240 && player1.offsetLeft < 350) && 
          (player1.offsetTop > 150 && player1.offsetLeft < 350) && 
          (player1.offsetTop > 150 && player1.offsetLeft > 100) && 
          (player1.offsetTop < 240 && player1.offsetLeft > 100)) ||
          // //checks green box
          ((player1.offsetTop < 450 && player1.offsetLeft > 50) && 
          (player1.offsetTop < 450 && player1.offsetLeft < 150) &&
          (player1.offsetTop > 100 && player1.offsetLeft < 150) &&
          (player1.offsetTop > 100 && player1.offsetLeft > 50)) ||
          // // // checks black box
          ((player1.offsetTop < 450 && player1.offsetLeft > 200) &&
          (player1.offsetTop > 360 && player1.offsetLeft > 200)) 
          ){
            setBack1();
          }
        }
    }
  

  // third level conditions
  function runLevel3() {
      if (thirdLevelStart == true) {
      if (
        ((player1.offsetLeft > 50 && player1.offsetTop > 50) &&
        (player1.offsetLeft > 50 && player1.offsetTop < 140)) ||
        ((player1.offsetLeft < 400 && player1.offsetTop < 240) &&
        (player1.offsetLeft < 400 && player1.offsetTop > 150)) ||
        ((player1.offsetLeft > 50 && player1.offsetTop > 250) &&
        (player1.offsetLeft > 50 && player1.offsetTop < 340)) ||
        ((player1.offsetLeft < 450 && player1.offsetTop > 360) &&
        (player1.offsetLeft < 450 && player1.offsetTop < 440))
      ) {
        setBack1()
      }
    }
  }



// level 1 win
  function checkLevel1WinPosition() {
    if (player1.offsetLeft == 450 && player1.offsetTop == 450) {
      document.body.style.backgroundColor = "#7ea150";
      boxStop.style.backgroundColor = "blue"
      boxStop2.style.backgroundColor = "blue"
      boxStop3.style.backgroundColor = "blue"
      
      button.disabled = false;
    } else {
      button.disabled = true;
      document.body.style.backgroundColor = "black";
      boxStop.style.backgroundColor = "#ee5700"
      boxStop2.style.backgroundColor = "#ee5700"
      boxStop3.style.backgroundColor = "#ee5700"
    }
  }
  
  //  level 2 win
function checkLevel2WinPosition() {
  if (player1.offsetLeft == 450 && player1.offsetTop == 450 ) {
    document.body.style.backgroundColor = "#7ea150";
    boxStop.style.backgroundColor = "blue"
    boxStop2.style.backgroundColor = "blue"
    boxStop3.style.backgroundColor = "blue"
    
    button2.disabled = false;
  } else {
    button2.disabled = true;
    document.body.style.backgroundColor = "black";
    boxStop.style.backgroundColor = "#ee5700"
    boxStop2.style.backgroundColor = "#ee5700"
    boxStop3.style.backgroundColor = "#ee5700"
  }
}

button2.addEventListener("click", (e) =>{
  level2Box1.remove()
  level2Box2.remove()
  level2Box3.remove()
  level2Box4.remove()
  button2.remove();
  winButton.style.display = "initial";
  secondLevelStart = false
  thirdLevelStart = true

  document.getElementById("level3NotReady1").setAttribute("id", "level3Ready1");
  document.getElementById("level3NotReady2").setAttribute("id", "level3Ready2");
  document.getElementById("level3NotReady3").setAttribute("id", "level3Ready3");
  document.getElementById("level3NotReady4").setAttribute("id", "level3Ready4");
  clearInterval(runLevel2)
  setBack1()
})
// level 3 win
function checkLevel3WinPosition() {
  if (player1.offsetLeft == 450 && player1.offsetTop == 450 ) {
    document.body.style.backgroundColor = "#7ea150";
    boxStop.style.backgroundColor = "blue"
    boxStop2.style.backgroundColor = "blue"
    boxStop3.style.backgroundColor = "blue"
    
    winButton.disabled = false
  } else {
    winButton.disabled = true
    document.body.style.backgroundColor = "black";
    boxStop.style.backgroundColor = "#ee5700"
    boxStop2.style.backgroundColor = "#ee5700"
    boxStop3.style.backgroundColor = "#ee5700"
  }
}

winButton.addEventListener("click", (e)=>{
  alert("Wow! You cleared all the bugs! Congrats! You're a software engineer!")
  winButton.style.display = "initial";
  location.reload()
})
 
setInterval(checkLevel1WinPosition, 50);
setInterval(checkLevel2WinPosition, 50);
setInterval(checkLevel3WinPosition, 50);
setInterval(runLevel1, 1);
setInterval(runLevel2, 1);
setInterval(runLevel3, 1);



console.log(secondLevelStart);

