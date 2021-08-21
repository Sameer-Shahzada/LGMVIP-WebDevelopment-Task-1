
// script for image slider
// var counter =1;
// setInterval(function(){
//     document.getElementById('radio'+ counter).checked = true;
//     counter++;
//     if(counter>4){
//         counter =1;
//     }
// },5000);


// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
// window.onscroll = function() {scrollFunction()};

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      document.getElementById("navbar").style.backgroundColor="black";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}

// Script for Life in zippy section 

let pictures = document.getElementsByClassName('pictures')

for (var i = 0; i < pictures.length; i++) {
  pictures[i].addEventListener('mouseover', function () {
    document.getElementById('show-images').src = this.src
  })
}
// ------ For Left Arrow ------ 
let leftArrow = document.getElementById('leftArrow');
leftArrow.addEventListener('click', function () {
  document.getElementById('move').scrollLeft -= 80
})

// ------ For Right Arrow ------ 
let rightArrow = document.getElementById('rightArrow');
rightArrow.addEventListener('click', function () {
  document.getElementById('move').scrollLeft += 80
})