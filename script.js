$(document).ready(docReady);
let clickCount = 1;

function docReady() {
  console.log('jQuery is ready');
  handleEvents();
}

function handleEvents() {
  $('.generateBtn').on('click', makeDiv);
  $('.generateBtn').on('click', countClick);
}

function countClick() {
  clickCount++

  return clickCount
}

function makeDiv() {
  let newDiv = $('<div class="bgRed"></div>');
  $('main').append(newDiv);
  $('main').append($(`<button class = "deleteButton"> Swap </button>`));
  $('main').append($(`<button class = "deleteButton"> Delete </button>`));
  newDiv.append(`<p class="count">${clickCount}</p>`)

}