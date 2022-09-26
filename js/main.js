let clickscore = document.getElementById('clickscore');
let bluebox = document.getElementById('bluebox');
let redbox = document.getElementById('redbox');
let purplebox = document.getElementById('purplebox');
let yellowbox = document.getElementById('yellowbox');
let currentbox = document.getElementById('currentbox');
let achivmentsscore = document.getElementById('achivmentsscore');
let score100 = document.getElementById('100');
let score200 = document.getElementById('200');
let score300 = document.getElementById('300');
let score500 = document.getElementById('500');

let score = 0;
function totalclick() {
    score += 1;
    clickscore.innerText = score;
    
    
    if(score >= '100'){
    console.log(100);
    score100.classList.remove("none");
    achivmentsscore.innerText="achivments 1/4";
    bluebox.style.display = 'inline';
    score += 1;
}
if(score >= '200'){
    console.log(200);
    score200.classList.remove("none");
    achivmentsscore.innerText="achivments 2/4";
    redbox.style.display = 'inline';
    score += 1;
}
if(score >= '300'){
    console.log(300);
    score300.classList.remove("none");
    achivmentsscore.innerText="achivments 3/4";
    purplebox.style.display = 'inline';
}
if(score >= '500'){
    console.log(500);
    score500.classList.remove("none");
    achivmentsscore.innerText="achivments 4/4";
}
}

function blueboxswitch(){
    currentbox.setAttribute('src', '/images/box2.svg');
    yellowbox.style.display = 'inline';
}
function redboxswitch(){
    currentbox.setAttribute('src', '/images/box3.svg');
    yellowbox.style.display = 'inline';
}
function purpleboxswitch(){
    currentbox.setAttribute('src', '/images/box4.svg');
    yellowbox.style.display = 'inline';
}
function yellowboxswitch(){
    currentbox.setAttribute('src', '/images/box.svg');
    yellowbox.style.display = 'none';
}

