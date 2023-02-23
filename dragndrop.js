//let ball = document.querySelectorAll("[data-item = '0']")
let cards = document.querySelectorAll('.card')
cards.forEach(function (ball) {
  ball.ondragstart = function() {
  return false;
};
ball.onmousedown = function(event) {
  //ball.style.backgroundColor = "yellow";
  ball.style.borderColor = "yellow";
  let shiftX = event.clientX - ball.getBoundingClientRect().left;
  let shiftY = event.clientY - ball.getBoundingClientRect().top;
  // (1) prepare to moving: make absolute and on top by z-index
  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;

  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(ball);

  // centers the ball at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    ball.style.left = pageX - shiftX + 'px';
    ball.style.top = pageY - shiftY + 'px';
  }

  // move our absolutely positioned ball under the pointer
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    // in a mouse event handler
    ball.hidden = true; // (*) hide the element that we drag

    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    // elemBelow is the element below the ball, may be droppable

    ball.hidden = false;
    // mousemove events may trigger out of the window (when the ball is dragged off-screen)
    // if clientX/clientY are out of the window, then elementFromPoint returns null
    //if (!elemBelow) return;
    moveAt(event.pageX, event.pageY);
  }

  // (2) move the ball on mousemove
  document.addEventListener('mousemove', onMouseMove);

  // (3) drop the ball, remove unneeded handlers
  ball.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball.style.borderColor = "red";
    ball.onmouseup = null;
  };

};
});

/*
// in a mouse event handler
ball.hidden = true; // (*) hide the element that we drag

let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
// elemBelow is the element below the ball, may be droppable

ball.hidden = false;
// mousemove events may trigger out of the window (when the ball is dragged off-screen)
  // if clientX/clientY are out of the window, then elementFromPoint returns null
  if (!elemBelow) return;
*/