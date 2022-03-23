const toggleSwitch = document.querySelector('input[type="checkbox"]');
const textBox =  document.getElementById ('text-box');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById ('toggle-icon');
const menuBars = document.getElementById('menu-bars');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const nav4 = document.getElementById('nav4');



function toggleNav(){
    //toggle menu bars open/closed
    menuBars.classList.toggle('change');
    nav.classList.toggle('toggle-class');

}

function createEventListener() {
  if (nav1) {
nav1.addEventListener('click', toggleNav);
  }
  if (nav2) {
    nav2.addEventListener('click', toggleNav);
      }
      if (nav3) {
        nav3.addEventListener('click', toggleNav);
          }
          if (nav4) {
            nav4.addEventListener('click', toggleNav);
              }};








// Drk Mode Styles
function darkMode(){
    nav.style.backgroundColor = '#222222';
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
}


// Light Mode Styles
function lightMode(){
    nav.style.backgroundColor = 'whitesmoke';
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
}


// Switch theme Dynamically
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }

    
}


// checking local storage for theme
const currentTheme = localStorage.getItem('theme');

if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark'){
        toggleSwitch.checked = true;
        darkMode();
    } else if(currentTheme === 'light'){
        toggleSwitch.checked = false;
        lightMode();
    } else if(!currentTheme){
        lightMode()
    };
} 

// Js on scroll Animation

function reveal() {
    var reveals = document.querySelectorAll(".reveal")
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals[i].getBoundingClientRect().top;
        var revealPoint = 0;

        if (revealTOP < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function reveal2() {
    var reveals2 = document.querySelectorAll(".reveal2")
    for (var i = 0; i < reveals2.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals2[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTOP < windowHeight - revealPoint) {
            reveals2[i].classList.add("active2");

        } else {
            reveals2[i].classList.remove("active2");
        }
    }
};


function reveal3() {
    var reveals3 = document.querySelectorAll(".reveal3")
    for (var i = 0; i < reveals3.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals3[i].getBoundingClientRect().top;
        var revealPoint = 0;

        if (revealTOP < windowHeight - revealPoint) {
            reveals3[i].classList.add("active3");

        } else {
            reveals3[i].classList.remove("active3");
        }
    }
};

function reveal4() {
    var reveals4 = document.querySelectorAll(".reveal4")
    for (var i = 0; i < reveals4.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals4[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTOP < windowHeight - revealPoint) {
            reveals4[i].classList.add("active4");

        } else {
            reveals4[i].classList.remove("active4");
        }
    }
};

function reveal5() {
    var reveals5 = document.querySelectorAll(".reveal5")
    for (var i = 0; i < reveals5.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals5[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTOP < windowHeight - revealPoint) {
            reveals5[i].classList.add("active5");

        } else {
            reveals5[i].classList.remove("active5");
        }
    }
};








// event listeners
toggleSwitch.addEventListener('change', switchTheme);
menuBars.addEventListener('click', toggleNav);
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal2);
window.addEventListener("scroll", reveal3);
window.addEventListener("scroll", reveal4);
window.addEventListener("scroll", reveal5);


createEventListener()