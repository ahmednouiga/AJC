const burger = document.querySelector('.burger')
const cancel = document.querySelector('.cancel')
const nav = document.querySelector('.nav-links')
const logo = document.querySelector('#log')
const butt = document.querySelector('.join')
const co = document.querySelector('.countdowndivs')


burger.addEventListener('click',show)


function show() {
    nav.style.display = 'flex'
    nav.style.transform = 'translate(0%)'
    logo.style.opacity = '0'
    butt.style.display = 'none'
    burger.style.display = 'none'
    cancel.style.display = 'block'
    co.style.display = 'none'
}


cancel.addEventListener('click', closes)

function closes() {
    nav.style.transform = 'translate(-100%)'
    cancel.style.display = 'none'
    burger.style.display = 'block'
    logo.style.opacity = '100'
    butt.style.display = 'flex'
    co.style.display = 'flex'
}


 


var countDownDate = new Date("June 25, 2022 13:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
document.querySelector('.d1').innerHTML = days < 10 ? `0${days}`+'d' : days +'d';
document.querySelector('.h1').innerHTML = hours < 10 ? `0${hours}`+'h' : hours +'h';
document.querySelector('.m1').innerHTML = minutes < 10 ? `0${minutes}`+'m' : minutes +'m';
document.querySelector('.s1').innerHTML = seconds < 10 ? `0${seconds}` +'s' : seconds +'s';

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector('.d1').innerHTML = '00d';
    document.querySelector('.h1').innerHTML = '00h';
    document.querySelector('.m1').innerHTML = '00m';
    document.querySelector('.s1').innerHTML = '00s';
    document.querySelector('.finish').innerHTML = ' لقد انتهى الوقت المرجو الانتظار حتى اعلان اخر'
;
  }
}, 1000);



var countDownDate2 = new Date("June 27, 2022 19:00:25").getTime();

// Update the count down every 1 second
var y = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate2 - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
document.querySelector('.d2').innerHTML = days < 10 ? `0${days}`+'d' : days +'d';
document.querySelector('.h2').innerHTML = hours < 10 ? `0${hours}`+'h' : hours +'h';
document.querySelector('.m2').innerHTML = minutes < 10 ? `0${minutes}`+'m' : minutes +'m';
document.querySelector('.s2').innerHTML = seconds < 10 ? `0${seconds}` +'s' : seconds +'s';

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(y);
    document.querySelector('.d2').innerHTML = '00d';
    document.querySelector('.h2').innerHTML = '00h';
    document.querySelector('.m2').innerHTML = '00m';
    document.querySelector('.s2').innerHTML = '00s';
    document.querySelector('.finish2').innerHTML = ' لقد انتهى الوقت المرجو الانتظار حتى اعلان اخر'
;
  }
}, 1000);