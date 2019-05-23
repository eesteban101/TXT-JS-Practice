// controls for changing the background
// create your event listener here
// add the background image change code inside of the event listener
document.getElementById('background-btn').addEventListener('click', fback);
document.getElementById('left').addEventListener('click', leftb);
document.getElementById('right').addEventListener('click', rightb);

// this is the code for changing a background image
function fback() {
    document.getElementById('background').style.backgroundImage = "url('./assets/smash.png')";
}

// BUTTON CONTROLS
// controls for the left button
function leftb() {
  var position = document.getElementById('ball').style.left;
  var newPosition = parseInt(position) - 10;
  if (newPosition >= 0){
    document.getElementById('ball').style.left = newPosition + 'px';
  }
}

// controls for the right button
function rightb() {
    var position = document.getElementById('ball').style.left;
    var newPosition = parseInt(position) + 10;
    document.getElementById('ball').style.left = newPosition + 'px';
}
