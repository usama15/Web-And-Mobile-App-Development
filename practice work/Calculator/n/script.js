var Display = document.getElementById("subScreen");
var Screen = document.getElementById("Screen");
var keycodes = [96,97,98,99,100,101,102,103,104,105,107,109,106,111,];
var symbol = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/"];

document.addEventListener("keydown", function (event) {
  console.log(event.keyCode);
  for (a = 0; a <= keycodes.length; a++) {
    if (keycodes[a] == event.keyCode) {
      Display.innerHTML += symbol[a];
    }
  }
  if (event.keyCode == 13) {
    Screen.innerHTML = eval(Display.innerHTML);
  if (Screen.innerHTML.length >= 8) {
    Screen.innerHTML = Screen.innerHTML.slice(0, 5);
  }
  Display.innerHTML = "";
}
});

function sendValue(number) {
  Display.innerHTML += number;
}
function reset() {
  Display.innerHTML = "";
  Screen.innerHTML = 00;
}
function Calculate() {
  console.log(Display.innerHTML);
  Screen.innerHTML = eval(Display.innerHTML);
  if (Screen.innerHTML.length >= 8) {
    Screen.innerHTML = Screen.innerHTML.slice(0, 5);
  }
  Display.innerHTML = "";
}
