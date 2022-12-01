// function callFunc() {
//     console.log('8765433456789')
//     //console.log('qqqqq')
//     document.getElementById("listDropdownId").style.visibility = "visible"
//    }
   
   // window.addEventListener("scroll", stickyFunc);
   // function stickyFunc() {
   //  console.log('sticky')
   // }
   
   // $(function () {
   //  $(document).scroll(function () {
   //   var $nav = $(".fixed-top");
   //   $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
   //  });
   // });
   
   // $(window).on("scroll", function () {
   //  if ($(window).scrollTop() > 50) {
   //   $(".header").addClass("active");
   //  } else {
   //   //remove the background property so it comes transparent again (defined in your css)
   //   $(".header").removeClass("active");
   //  }
   // });
 

   var className = "inverted";
   var scrollTrigger = 60;
   
   window.onscroll = function () {
    // We add pageYOffset for compatibility with IE.
    console.log('masterrrrrrrrrrrrrrrrrrrrrrrrrr');
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
     document.getElementsByTagName("header")[0].classList.add('active');
     document.getElementsByTagName("nav")[0].classList.add('active2');
    } else {
     document.getElementsByTagName("header")[0].classList.remove('active');
     document.getElementsByTagName("nav")[0].classList.remove('active2');
    }
   };

   ///////////////////////////////////////////////

   function reveal() {

    var revealsSection = document.querySelectorAll('.reveal-section')
    revealsSection.forEach((items) => {
     // var distanceToTop = window.pageYOffset + items.getBoundingClientRect().top;
     // var elementHeight = items.offsetHeight;
     // var scrollTop = document.documentElement.scrollTop;
     var temp = items.getBoundingClientRect().top;
     var windowHeight = window.innerHeight;
     let elementVisible = 500;
     let revealAll = items.querySelectorAll('.reveal')
     if (temp < windowHeight - (temp - elementVisible)) {
      revealAll.forEach((items) => {
       items.classList.add('active3')
      })
     } else {
      revealAll.forEach((items) => {
       items.classList.remove('active3')
      })
     }
    })
   }
   window.addEventListener("scroll", reveal);



   /////////////////////////////


  

/////////////////////////////////////////////////////////////////////
// var className = "inverted";
// var scrollTrigger = 60;

// window.onscroll = function () {
//     console.log('downnnnnnnnnnnnnnnnnnn');
//   // We add pageYOffset for compatibility with IE.
//   if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    
//   } else {
//     document.getElementsByTagName("nav")[0].classList.remove('active2');
//   }
// };
