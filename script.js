//Part 1: Variables and conditionals
let name = "Student";
let score = 85;

if (score >= 80) {
  console.log("Excellent work!");
} else {
  console.log("Keep improving!");
}

// Part 2: Custom functions
function changeColor() {
  document.body.style.backgroundColor = "lightblue";
}

function showMessage() {
  document.getElementById("output").innerText = "Welcome, " + name + "!";
}

// Part 3: Loops
for (let i = 1; i <= 3; i++) {
  console.log("Loop #" + i);
}
let fruits = ["Apple", "Banana", "Orange"];
fruits.forEach((fruit) => console.log(fruit));

// Part 4: DOM interactions
document.getElementById("title").addEventListener("mouseover", function () {
  this.style.color = "red";
});

document.getElementById("title").addEventListener("mouseout", function () {
  this.style.color = "black";
});