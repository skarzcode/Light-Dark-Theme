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

// event listeners
toggleSwitch.addEventListener('change', switchTheme);
menuBars.addEventListener('click', toggleNav);

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
createEventListener()