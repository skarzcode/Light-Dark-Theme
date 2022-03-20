const toggleSwitch = document.querySelector('input[type="checkbox"]');
const image1 = document.getElementById ('image1');
const image2 = document.getElementById ('image2');
const image3 = document.getElementById ('image3');
const textBox =  document.getElementById ('text-box');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById ('toggle-icon');

// Drk Mode Styles
function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    image1.src = 'img/undraw_businesswoman_re_5n6b_dark.svg'
    image2.src = 'img/undraw_business_shop_qw-5-t_dark.svg'
    image3.src = 'img/undraw_business_plan_re_0v81_dark.svg'
}


// Light Mode Styles
function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    image1.src = 'img/undraw_businesswoman_re_5n6b_light.svg'
    image2.src = 'img/undraw_business_shop_qw-5-t_light.svg'
    image3.src = 'img/undraw_business_plan_re_0v81_light.svg'
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


toggleSwitch.addEventListener('change', switchTheme);

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
    }
} 