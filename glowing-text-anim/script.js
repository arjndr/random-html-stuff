const allSpanElements = document.querySelectorAll('#namecontainer span');
let index = 0;
window.setInterval(() => {
  allSpanElements[index].classList.remove('active');
  if (index == (allSpanElements.length - 1)) {
    index = 0;
  } else {
    index += 1;
  }
  allSpanElements[index].classList.add('active');
}, 300);
