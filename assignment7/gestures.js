var downX = 0;
var upX = 0;
var clicks = 0;

$('#gestureArea').mousedown(function(event) {
  $('#gestureResult').text("Mouse Down");
  downX = event.pageX;
})

$('#gestureArea').mouseup(function(event) {
  upX = event.pageX;
  if ( upX < downX ) {
    $('#gestureResult').text("Swipe Left");
  } else if ( upX > downX ) {
    $('#gestureResult').text("Swipe Right");
  } else {
    $('#gestureResult').text("Mouse Up");
  }
})

$('#gestureArea').click(function() {
  clicks = clicks + 1;
  if ( clicks == 3 ) {
    $('#gestureResult').text("Triple Click!");
    clicks = 0;
  }
})
