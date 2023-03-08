var activeImage = "";
var zIndex = 0;

// Drag Functions

// you can drag the Card class, supports draging img, and restricts dragging to the visible window without scrolling
$( ".Card" ).draggable({
    containment: [0, 0, $(document).width()-100, $(document).height()-140],
    scroll: false
});

$(document).keyup(function(e) {
    // f key
    if (e.keyCode == 70 && activeImage != "") {
      flip(document.getElementById(activeImage));
    }
});

//monitors object for hover, hover and hover off functions
$('.Card').hover(function(){
   activeImage = this.id;
   this.style.border = "solid 3px orange";
  console.log("ddddd");
   
}, function () {
   activeImage = ""; // not active
   this.style.border = "solid 3px green";
  console.log("eeeee");
});

// click card to send to front
$('.Card').mousedown(function(){
  zIndex++;  
  $(this).css('zIndex', zIndex);
});

// flip card by pressing f
function flip(obj) {
  console.log(obj.src);
  if(obj.src != "https://pile-drag.ericwang3.repl.co/cards/Reverse.png") {
    obj.src = "https://pile-drag.ericwang3.repl.co/cards/Reverse.png";
    console.log(obj.src);
  }
  else {
    obj.src = "https://pile-drag.ericwang3.repl.co/cards/" + obj.id + ".png";
    console.log(obj.src);
  }
}

