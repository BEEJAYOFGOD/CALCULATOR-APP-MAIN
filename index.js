let op = document.querySelectorAll("button.op");
let result = document.getElementById("result");
let equalButton = document.getElementById("equal");
let resetButton = document.getElementById("reset");
let delButton = document.getElementById("del");
let themes = document.querySelectorAll('[name="theme"]');

console.log("amen");

function setTheme(theme) {
  localStorage.setItem("theme", theme);
}

themes.forEach((theme) => {
  theme.addEventListener("click", () => {
    setTheme(theme.id);
  });
});

const getTheme = function () {
  const activeTheme = localStorage.getItem("theme");

  console.log("adedare");

  themes.forEach((theme) => {
    if (theme.id == activeTheme) {
      theme.checked = true;
    }
  });
};

document.onload = getTheme();

op.forEach((oper) =>
  oper.addEventListener("click", () => {
    result.value += oper.innerHTML;
  })
);

equalButton.addEventListener("click", () => {
  result.value = eval(result.value);

  console.log(result.value.length);
});

delButton.addEventListener("click", () => {
  result.value = result.value.toString().slice(0, -1);
});

resetButton.addEventListener("click", () => {
  result.value = "";
});

console.log("900");

let myarr = [2, 4, 5];
myarr.push(3);
console.log(myarr);
