// console.log(document.getElementsByTagName("p"));

// const elements = document.getElementsByTagName("p");

// console.log(elements.length);

// for (let i of elements) {
//   console.log(i);
// }

// console.log(document.getElementsByClassName("para1"));
// console.log(document.getElementById("para2"));

// querySelector //
// console.log(document.querySelector("h1"));

// console.log(document.querySelector("p"));
// console.log(document.querySelectorAll("p"));

//Styles //
// document.querySelector("p").style.backgroundColor = "pink";
// document.querySelectorAll("p")[1].style.backgroundColor = "pink";

// ////////////////////////// <button>Make h1 BG green</button> ////////////////////////////////
// document.querySelector("h1").style.backgroundColor = "green";

// let btn1 = document.querySelector(".h1-bg");
// // console.log(btn1);

// btn1.addEventListener("click", () => {
//   document.querySelector("h1").style.backgroundColor = "green";
// });

// ////////////////////////// <button>Make para1 BG red</button> ////////////////////////////////
// document.querySelector(".para1").style.backgroundColor = "red";
// let btn2 = document.querySelector(".para1-bg");
// console.log(btn2);

// const makeBgRed = () => {
//   document.querySelector(".para1").style.backgroundColor = "red";
// };
// btn2.addEventListener("click", makeBgRed);

// ////////////////////////// <button>Make para2 BG blue</button> ////////////////////////////////
// document.querySelector("#para2").style.backgroundColor = "blue";
// let btn3 = document.querySelector(".para2-bg");
// console.log(btn3);

// const makeBgBlue = () => {
//   document.querySelector("#para2").style.backgroundColor = "blue";
// };
// btn3.addEventListener("mouseover", () => makeBgBlue());

// //////////////////// Add Todo /////////////////////////////////
// let todos = document.querySelector(".todos ul");
// console.log(todos);
// let input = document.querySelector(".input");
// let li = document.querySelector(".todos ul li");
// // console.log(input.value);

// let todoBtn = document.querySelector(".todo-btn");

// todoBtn.addEventListener("click", () => {
//   let taskItems = document.createElement("li");
//   taskItems.innerHTML = input.value;
//   taskItems.addEventListener("click", function () {
//     // click handler
//     this.style.textDecoration = "line-through";
//   });
//   todos.appendChild(taskItems);
// });

///////////Counter /////////////////
// const plusBtn = document.querySelector(".plus");
// const minusBtn = document.querySelector(".minus");
// const counterValue = document.querySelector(".counter-value");

// plusBtn.addEventListener("click", () => {
//   counterValue.innerHTML = Number(counterValue.innerHTML) + 1;
// });

// minusBtn.addEventListener("click", () => {
//   counterValue.innerHTML = Number(counterValue.textContent) - 1;
// });
