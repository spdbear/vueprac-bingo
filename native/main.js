var numbers = [];

function appendToList(text) {
  var e = document.getElementById("numberList");
  var elemLi = document.createElement("li");
  elemLi.textContent = text;
  e.appendChild(elemLi);
}

function drawLots(array) {
  if (array.length != 0) {
    appendToList(array.pop());
  }
  return array;
}

function draw() {
  numbers = drawLots(numbers);
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = array[i];
    array[i] = array[r];
    array[r] = tmp;
  }
  return array;
}

function createArray() {
  var numbers = [];
  for (var i = 1; i <= 75; i++) {
    numbers.push(i);
  }
  return numbers;
}

window.onload = function() {
  var button = document.getElementById("draw");
  numbers = createArray();
  numbers = shuffleArray(numbers);
  button.addEventListener("click", draw, false);
};
