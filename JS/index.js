function loading() {
    for (element of document.getElementsByClassName("LoadingScreen")){
        element.classList.add("EndLoading");
    }
    for (element of document.getElementsByClassName("LoadingScreenTitle")){
        element.classList.add("EndLoading");
    }
    

    var element = document.getElementById("LoadingScreenBody");
    element.style.overflowY = "visible";
}

var element = document.getElementById("block1");
element.onmouseenter = function(event) {mouseenter(event)};
element.onmouseleave = function(event) {mouseleave(event)};

var trait = document.getElementById("traitblock2");

function resetTrait(){
  trait.style.marginRight = "20vw";
  trait.style.marginLeft = "20vw";
  trait.style.width = "60%";
  window.setTimeout(   mouseenterBLOCK2, 4000);
}

var element2 = document.getElementById("informatique");
element2.onmouseenter = function(event) {mouseenterBLOCK2(event)};

function mouseenterBLOCK2(event) {
  trait.style.marginRight = "25vw";
  trait.style.marginLeft = "25vw";
  trait.style.width = "50%";
  window.setTimeout( resetTrait, 4000);
}


function mouseenter(event) { 
    var element = document.getElementById("pseudo");
    element.classList.add("pseudohover");
}
function mouseleave(event) {
    var element = document.getElementById("pseudo");
    element.classList.remove("pseudohover");
}
// Wrap every letter in a span

var scrollanimation = true;

var element = document.getElementById("ml13");
document.onscroll = function(event) {
if (scrollanimation == true) {
  var hauteurdict = element.getBoundingClientRect();
  var hauteur = hauteurdict.bottom-285;

  console.log(hauteur);
  if (hauteur <= window.scrollY) {
      informatique();
      scrollanimation = false;
    }
}}

function informatique(){
var textWrapper = document.querySelector('.ml13');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml13 .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  });
}