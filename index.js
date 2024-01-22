let op = document.querySelectorAll("button.op");
let result = document.getElementById("result");
let equalButton = document.getElementById("equal");
let resetButton = document.getElementById("reset");
let delButton = document.getElementById("del");

for (let i = 0; i < op.length; i++) {
  op[i].addEventListener("click", () => {
    result.value += op[i].innerHTML;
  });
}

equalButton.addEventListener("click", () => {
  result.value = eval(result.value);
});

delButton.addEventListener("click", () => {
  result.value = result.value.toString().slice(0, -1);
});

resetButton.addEventListener("click", () => {
  result.value = "";
});
