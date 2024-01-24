let op = document.querySelectorAll("button.op");
let result = document.getElementById("result");
let equalButton = document.getElementById("equal");
let resetButton = document.getElementById("reset");
let delButton = document.getElementById("del");

const modeLink = document.querySelector("link[href='css/style.css']");
const darkModeLink = document.querySelector("link[href='css/dark-mode.css']");
const lightModeLink = document.querySelector("link[href='css/light-mode.css']");
const defaul = document.querySelectorAll("input");

const themeToggle = document.querySelectorAll("span.checkmark");
for (let i = 0; i < themeToggle.length; i++) {
  themeToggle[i].addEventListener("click", () => {
    disableAllExcept(mode[i]);
    console.log("ade");
  });
}


const mode = [modeLink, darkModeLink, lightModeLink];

function disableAllExcept(activeLink) {
  lightModeLink.disabled = lightModeLink !== activeLink;
  darkModeLink.disabled = darkModeLink !== activeLink;
  modeLink.disabled = modeLink !== activeLink;
}

for (let i = 0; i < op.length; i++) {
  op[i].addEventListener("click", () => {
    result.value += op[i].innerHTML;
  });
}

equalButton.addEventListener("click", () => {
  if (eval(result.value).toString()[0] == 0) {
    result.value = result.value.toString().slice(0);
  }
  result.value = eval(result.value);
});

delButton.addEventListener("click", () => {
  result.value = result.value.toString().slice(0, -1);
});

resetButton.addEventListener("click", () => {
  result.value = "";
});
