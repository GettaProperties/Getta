var carouselWidth = $('.carousel-inner')[0].scrollWidth;
var cardWidth = $('.carousel-item').width();
var scrollPosition = 0;

$('.carousel-control-next').on('click', function () {
  if (scrollPosition < (carouselWidth - (cardWidth * 4))) {
    console.log('next')
    scrollPosition = scrollPosition + cardWidth;
    $('.carousel-inner').animate({ scrollLeft: scrollPosition },
      600);
  }
});


$('.carousel-control-prev').on('click', function () {
  if (scrollPosition > 0) {
    console.log('next')
    scrollPosition = scrollPosition - cardWidth;
    $('.carousel-inner').animate({ scrollLeft: scrollPosition },
      600);
  }
});

/////////////////////////////////////////////////////////////////////////////////////

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "white";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
function closeNav1() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
///////////////////////////////////////////////////////

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName('btn')
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", "");
    this.className += " active1";
  });
}

/////////////////////////////////////////////////////////////////////
