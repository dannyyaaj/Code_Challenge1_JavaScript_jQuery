$(document).ready(docReady);
let clickCount = 1;

function docReady() {
  handleEvents();
}

function handleEvents() {
  $('.generateBtn').on('click', makeDiv);
  $('.generateBtn').on('click', countClick);
  $('main').on('click', '.swapBtn', changeBackgroundColor);
  $('main').on('click', '.deleteBtn', removeDiv);
}

function makeDiv() {
  const newDiv = $('<div class="newDiv bgRed"></div>');
  $('main').append(newDiv);
  $(newDiv).append($(`<button class ="swapBtn btn btn-light">Swap Colors</button>`));
  $(newDiv).append($(`<button class = "deleteBtn btn btn-dark float-right">Delete</button>`));
  newDiv.prepend(`<p class="count">${clickCount}</p>`)
}

function countClick() {
  clickCount++
  return clickCount
}

function changeBackgroundColor() {
  $(this).parent().toggleClass('bgRed');
  $(this).parent().toggleClass('bgYellow');
}

function removeDiv() {
  $(this).parent().remove();
}