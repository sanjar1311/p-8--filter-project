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

let elNavOpenBtn = $_('.nav-open-btn');
let elNav = $_('.nav');


function openNav () {
  elNav.classList.toggle('nav--open');
}


elNavOpenBtn.addEventListener('click', openNav);