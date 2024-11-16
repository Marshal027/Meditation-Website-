const container = document.getElementById('apple');
// const container1 = document.getElementById('apple1');
// const container2 = document.getElementById('apple2');
// const text = document.getElementById('tax');
// const text1 = document.getElementById('tax1');
// const text2 = document.getElementById('tax2');
var intofire = document.getElementById("intofire")
var rootElement = document.documentElement



// Array of breathing stages with corresponding text and duration (in milliseconds)
const stages = [
  { text: "Breathe In", duration: 4000 },  // 4 seconds inhale
  { text: "Hold", duration: 2000 },        // 2 seconds hold
  { text: "Breathe Out", duration: 8000 }, // 8 seconds exhale
  { text: "Hold", duration: 2000 }         // 2 seconds hold
];

const breathText = document.getElementById("breath-text");
const startButton = document.getElementById("start-button");

let currentStage = 0;
let interval;

function updateBreathingText() {
  breathText.textContent = stages[currentStage].text;
  interval = setTimeout(() => {
    currentStage = (currentStage + 1) % stages.length; // Loop through stages
    updateBreathingText();
  }, stages[currentStage].duration);
}

function startBreathingAnimation() {
  // Clear any previous animation interval
  clearTimeout(interval);
  currentStage = 0; // Reset stage
  breathText.textContent = stages[currentStage].text; // Reset to initial text

  // // Reset the animation by forcing a reflow
  // breathingCircle.style.animation = 'none';
  // void breathingCircle.offsetWidth; // Trigger reflow
  // breathingCircle.style.animation = ''; // Re-apply animation

  // breathingCircle.style.animationPlayState = "running"; // Start the breathing animation
  updateBreathingText(); // Start text updates
}

// Add event listener to start button to restart animation every time
startButton.addEventListener("click", startBreathingAnimation);


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
