const container = document.getElementById('apple');
const text = document.getElementById('tax');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'apple grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'apple shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);