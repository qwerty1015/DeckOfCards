

function drag_over(event) {
	event.preventDefault();
	return false;
}

function drag_start(event) {
  this.style.opacity = '0.4';
  var style = window.getComputedStyle(event.target, null);
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData("text/plain", (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"), 10) - event.clientY) + ',' + event.target.getAttribute('data-item'));
}

function drag_end(event) {
  this.style.opacity = '0.5';
}

function drop(event) {
  event.stopPropagation();
  var offset = event.dataTransfer.getData("text/plain").split(',');
  let allcards = document.getElementsByClassName('card');
  console.log(offset);
  allcards[parseInt(offset[2])].style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
  allcards[parseInt(offset[2])].style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
  event.preventDefault();
  return false;
}

let cards= document.querySelectorAll('.card');
cards.forEach(function (card) {
card.addEventListener('dragstart', drag_start);
card.addEventListener('dragend', drag_end); document.body.addEventListener('dragover', drag_over, false); document.body.addEventListener('drop', drop, false); });

