const clickParagraph = document.getElementById('click');
 clickParagraph.addEventListener('click', () => console.log('click'));
 clickParagraph.addEventListener('mousedown', () => console.log('down'));
 clickParagraph.addEventListener('mouseup', () => console.log('up'));
 function changeColor(newColor) {
   var elem = document.getElementById('para');
   console.log(elem);
   elem.style.color = newColor;
 }
