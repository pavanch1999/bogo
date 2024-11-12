function _f(id) {
  return document.getElementById(id);
}

let div = _f("box");
let b1 = _f("unit1");
let b2 = _f("unit2");
let b3 = _f("unit3");
b1.onclick = function () {
  ex1.classList.remove("box");
  ex1.classList.add("ex");
  // ex1.innerHTML += dropdownHTML;
  ex2.classList.remove("ex");
  ex2.classList.add("box");
  ex3.classList.remove("ex");
  ex3.classList.add("box");
};
b2.onclick = function () {
  ex2.classList.remove("box");
  ex2.classList.add("ex");
  // ex2.innerHTML += dropdownHTML;
  ex1.classList.remove("ex");
  ex1.classList.add("box");
  ex3.classList.remove("ex");
  ex3.classList.add("box");
};
b3.onclick = function () {
  ex3.classList.remove("box");
  ex3.classList.add("ex");
  // ex3.innerHTML += dropdownHTML;
  ex2.classList.remove("ex");
  ex2.classList.add("box");
  ex1.classList.remove("ex");
  ex1.classList.add("box");
};
