const text = document.querySelector(".qualities-span");
const l = ["Undergrad Student", "Web Developer", "Programmer"];
var i = 0;
function loop(){
    text.style.display="block";
    text.textContent = l[i];
    i = (i+1)%3;
    setWidth();
    text.style.animation="typing 1s steps(17), cursor 0.4s step-end infinite alternate, backspace 1s steps(17) 3s forwards";
    setTimeout(() => {
        text.style.animation = 'none';
        text.style.display="none";
        setTimeout(() => {
            text.style.animation = '';
            loop();
        }, 100);
    }, 4000);
}
function setWidth() {
    if(text.textContent == "Undergrad Student"){
        text.style.width = "295px";
    }
    else if (text.textContent == "Programmer"){
        text.style.width = "200px";
    }
    else if (text.textContent == "Web Developer"){
        text.style.width = "235px";
    }
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        var topBarHeight = document.querySelector('#header').offsetHeight;
        if (sectionId === 'home-content') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            var sectionTop = section.offsetTop - topBarHeight - 10;

            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            });
        }
    }
}

window.addEventListener('scroll', function () {
    var topBar = document.querySelector('.top-bar');
    var sections = document.querySelectorAll('section');

    sections.forEach(function (section, index) {
        var top = section.offsetTop - topBar.offsetHeight + parseInt(getComputedStyle(section).marginTop)+100;
        var bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
            // Highlight the corresponding top bar item
            var topBarItem = topBar.children[index];
            topBar.querySelector('.active').classList.remove('active');
            topBarItem.classList.add('active');
        }
    });
});