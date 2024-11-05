const container = document.getElementById('apple');
const container1 = document.getElementById('apple1');
const container2 = document.getElementById('apple2');
const text = document.getElementById('tax');
const text1 = document.getElementById('tax1');
const text2 = document.getElementById('tax2');
var intofire = document.getElementById("intofire")
var rootElement = document.documentElement

const totalTime = 16000;
const breatheTime = 4000;
const holdTime = 2000;
const outTime = 8000;

const totalTime1 = 16000;
const breatheTime1 = (totalTime / 5) * 2;
const holdTime1 = totalTime / 5;

const totalTime2 = 7500;
const breatheTime2 = (totalTime / 5) * 2;
const holdTime2 = totalTime / 5;



function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'apple grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'apple shrink';

      setTimeout(() => {
        text.innerText = 'Hold';
    } 
    , outTime)
   }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);

breathAnimation1();

function breathAnimation1() {
  text1.innerText = 'Breathe In!';
  container1.className = 'apple1 grow';

  setTimeout(() => {
    text1.innerText = 'Hold';

    setTimeout(() => {
      text1.innerText = 'Breathe Out!';
      container1.className = 'apple1 shrink';
    }, holdTime1);
  }, breatheTime1);
}

setInterval(breathAnimation1, totalTime1);

breathAnimation2();

function breathAnimation2() {
  text2.innerText = 'Breathe In!';
  container2.className = 'apple2 grow';

  setTimeout(() => {
    text2.innerText = 'Hold';

    setTimeout(() => {
      text2.innerText = 'Breathe Out!';
      container2.className = 'apple2 shrink';
    }, holdTime2);
  }, breatheTime2);
}

setInterval(breathAnimation2, totalTime2);


function IntoFire() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

function IntoApple() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 930,
    behavior: "smooth"
  })
}
