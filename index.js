let op = document.querySelectorAll("button.op");
let result = document.getElementById("result");
let equalButton = document.getElementById("equal");
let resetButton = document.getElementById("reset");
let delButton = document.getElementById("del");
let colorThemes = document.querySelectorAll('[name="theme"]');

console.log("amen");

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  /* This is to save the user choice into local storage */
}

colorThemes.forEach((theme) => {
  theme.addEventListener("click", () => {
    setTheme(theme.id);
  });
});

const getTheme = function () {
  const activeTheme = localStorage.getItem("theme");
  // get theme already daved my user

  // console.log("adedare");

  colorThemes.forEach((theme) => {
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
  console.log(formatResult());
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

let count = 0;

function formatResult() {
  const Answer = result.value.toString();
  let newResult = new Array();
  let decoyAnswer = Answer.reverse();

  for (let i = Answer.length - 1; i <= 0; i--) {
    count += 1;
    if (count == 3) {
      decoyAnswer.push(",");
    }
    decoyAnswer.push(Answer[i]);
  }

  return decoyAnswer;
}


// // Output: "1,234,567"
// result.value = "";
// result.value = formatNumberWithCommas(result.value);
