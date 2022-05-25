const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
    }
};

document.getElementById("changeBlue").addEventListener("click", function () {
  var elem = document.querySelectorAll(".ball");

  for (var i = 0; i < elem.length; i++) {
    elem[i].style.background = "#c0f8fb";
  }
});

document.getElementById("changeBrown").addEventListener("click", function () {
  var elem = document.querySelectorAll(".ball");

  for (var i = 0; i < elem.length; i++) {
    elem[i].style.background = "brown";
  }
});

document.getElementById("changeGreen").addEventListener("click", function () {
  var elem = document.querySelectorAll(".ball");

  for (var i = 0; i < elem.length; i++) {
    elem[i].style.background = "#206d19";
  }
});