var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.setAttribute('class', className);

  if (text) {
    element.textContent = text;
  }

  return element;
};


let all = [];
let cakes = [
  {
    title: `Cake Items`,
    img: ``,
    cost: `$5`
  },
  {
    title: `Cake Items`,
    img: ``,
    cost: `$10`
  },
  {
    title: `Cake Items`,
    img: ``,
    cost: `$15`
  }
];
let cupcakes = [
  {
    title: `Cupcake Item`,
    img: ``,
    cost: `$5`
  },
  {
    title: `Cupcake Item`,
    img: ``,
    cost: `$10`
  },
  {
    title: `Cupcake Item`,
    img: ``,
    cost: `$10`
  },
];
let sweets = [
  {
    title: `Sweets Item`,
    img: ``,
    cost: `$5`
  },
    {
    title: `Sweets Item`,
    img: ``,
    cost: `$10`
  },
    {
    title: `Sweets Item`,
    img: ``,
    cost: `$15`
  },
];
let doughnuts = [
  {
    title: `Dougnut Item`,
    img: ``,
    cost: `$5`
  },
    {
    title: `Dougnut Item`,
    img: ``,
    cost: `$10`
  },
    {
    title: `Dougnut Item`,
    img: ``,
    cost: `$15`
  },
];


let elNavOpenBtn = $_('.nav-open-btn');
let elNav = $_('.nav');


function openNav () {
  elNav.classList.toggle('nav--open');
}


elNavOpenBtn.addEventListener('click', openNav);