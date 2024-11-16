const container = document.getElementById('apple');
var intofire = document.getElementById("intofire")
var rootElement = document.documentElement

//4282 Breathing start
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

  // breathingCircle.style.animationPlayState = "running"; // Start the breathing animation
  updateBreathingText(); // Start text updates
}

// Add event listener to start button to restart animation every time
startButton.addEventListener("click", startBreathingAnimation);

//4282 Breathing end


//Alter Nostril Breathing start

// Array of breathing stages with corresponding text and duration (in milliseconds)
const stages1 = [
  { text: "Breathe In\nThrough the Left Nostril", duration: 4000 },  // 4 seconds inhale
  { text: "Breathe Out\nThrough the Right Nostril", duration: 4000 },        // 4 seconds exhale
  { text: "Breathe In\nThrough the Right Nostril", duration: 4000 }, // 4 seconds inhale
  { text: "Breathe Out\nThrough the Left Nostril", duration: 4000 }         // 2 seconds exhale
];

const breathText1 = document.getElementById("breath-text1");
const startButton1 = document.getElementById("start-button1");

let currentStage1 = 0;
let interval1;

function updateBreathingText1() {
  breathText1.textContent = stages1[currentStage1].text;
  interval1 = setTimeout(() => {
    currentStage1 = (currentStage1 + 1) % stages1.length; // Loop through stages
    updateBreathingText1();
  }, stages1[currentStage1].duration);
}

function startBreathingAnimation1() {
  // Clear any previous animation interval
  clearTimeout(interval1);
  currentStage1 = 0; // Reset stage
  breathText1.textContent = stages1[currentStage1].text; // Reset to initial text

  // breathingCircle.style.animationPlayState = "running"; // Start the breathing animation
  updateBreathingText1(); // Start text updates
}

// Add event listener to start button to restart animation every time
startButton1.addEventListener("click", startBreathingAnimation1);

//Alter Nostril Breathing end

//4-7-8 Breathing start

// Array of breathing stages with corresponding text and duration (in milliseconds)
const stages2 = [
  { text: "Breathe In\nThrough your Nose", duration: 4000 },  // 4 seconds inhale
  { text: "Hold", duration: 7000 },        // 2 seconds hold
  { text: "Breathe Out\nThrough your Mouth", duration: 8000 }         // 2 seconds hold
];

const breathText2 = document.getElementById("breath-text2");
const startButton2 = document.getElementById("start-button2");

let currentStage2 = 0;
let interval2;

function updateBreathingText2() {
  breathText2.textContent = stages2[currentStage2].text;
  interval2 = setTimeout(() => {
    currentStage2 = (currentStage2 + 1) % stages2.length; // Loop through stages
    updateBreathingText2();
  }, stages2[currentStage2].duration);
}

function startBreathingAnimation2() {
  // Clear any previous animation interval
  clearTimeout(interval2);
  currentStage2 = 0; // Reset stage
  breathText2.textContent = stages2[currentStage2].text; // Reset to initial text

  // breathingCircle.style.animationPlayState = "running"; // Start the breathing animation
  updateBreathingText2(); // Start text updates
}

// Add event listener to start button to restart animation every time
startButton2.addEventListener("click", startBreathingAnimation2);
//4-7-8 Breathing end



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
