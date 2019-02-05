// Bus Image
let busImage = document.querySelector('.busImage');
let logoHeading = document.querySelector('.logo-heading');

busImage.addEventListener('click', function(e) {
    logoHeading.innerHTML = "THAT'S THE FUN BUS!!"
});

// Nav
let nav = document.querySelector('.main-navigation');
let navAnchor = document.querySelectorAll('.nav-link');

nav.addEventListener('mousedown', function(e){
    nav.style.backgroundColor = '#00FFFF';
    logo.style.fontSize = '4em';
    navAnchor.forEach(navAnchor => navAnchor.style.fontSize = '2em');
});




// Intro

let intro = document.querySelector('.intro');

intro.addEventListener('mouseover', function(e){
    e.target.style.fontWeight = '900';
});

intro.addEventListener('mouseout', function(e){
    e.target.style.fontWeight = '';
});


let elem = document.querySelectorAll('h2');

elem.forEach(function(index, i) {
    elem[i].addEventListener('select', function(){
        alert('Selection changed!');
    });
});