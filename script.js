const text = document.querySelector(".text");

let n = 0;
const setInnerText = (text) => {
  text.innerText = n;
  n++;
};

setInterval(setInnerText, 1, text);
