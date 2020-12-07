let timer = 180;
let runningTimer;
let score = 0;
let qNumber;
let finalScore;
const MAX_HIGH_SCORES = 7;

const startButton = document.getElementById("startButton");
const qContainer = document.getElementById("questionsContainer");
const qElement = document.getElementById("question");
const answerButtons = document.getElementById("answers");
const countdown = document.getElementById("timerArea");
const scoreArea = document.getElementById("scoreArea");
const highScoresButton = document.getElementById("showScoresButton");


startButton.addEventListener("click", startGame);

function startGame() {
  startButton.classList.add("hide");
  scoreArea.classList.add("hide");
  answerButtons.classList.remove("hide");
  qNumber = 0;
  qContainer.classList.remove("hide");
  scoreArea.innerHTML = "";
  startClock();
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
  showQuestion(questions[qNumber]);
}

function showQuestion(question) {
  qElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}

function startClock() {
  countdown.innerHTML = "Tick Tick : " + timer;
  if (timer <= 0) {
    gameOver();
  } else {
    timer -= 1;
    runningTimer = setTimeout(startClock, 1000);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  if (!selectedButton.dataset.correct) {
    timer = timer - 10;
    
  }
  if (qNumber == questions.length - 1) {
    gameOver();
  } else {
    clearQuestion();
    qNumber++;
    showQuestion(questions[qNumber]);
  }
}

function clearQuestion() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function gameOver() {
  clearInterval(runningTimer);
  countdown.innerHTML = "Finished";
  clearQuestion();
  showResults();
  startButton.innerText = "Restart";
  startButton.classList.remove("hide");
  timer = 180;
  score = 0;
}

function showResults() {
  finalScore = timer;
  if (finalScore < 0) {
    finalScore = 0;
  }
  qElement.innerText = "";
  scoreArea.classList.remove("hide");
  answerButtons.classList.add("hide");
  scoreArea.innerHTML = `Your score is ${finalScore}!`;
}


const questions = [
  {
    question: "The word Dorito means “___________” in Spanish.",
    answers: [
      { text: "desert", correct: false },
      { text: "little golden things", correct: true },
      { text: "sweet", correct: false },
      { text: "fruit", correct: false }
    ]
  },
  {
    question: "There are more than ________ different uses for corn and corn is found in anything from your pet’s food to fireworks.",
    answers: [
      { text: "50", correct: false },
      { text: "100", correct: false },
      { text: "2000", correct: false },
      { text: "4000", correct: true }
    ]
  },
  {
    question: "French fries, which were actually created in Belgium, not France, got their name from their French julien cut.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
      { text: "Not Sure", correct: false },
      { text: "OMG!", correct: false },
    ]
  },
  {
    question: '____________ loses its flavor the quickest out of any vegetable, so try to eat it the day of purchase.',
    answers: [
      { text: 'gooseberry', correct: false },
      { text: 'watermelon', correct: false },
      { text: 'pineapple', correct: false },
      { text: 'Asparagus', correct: true }
    ]
  },
  {
    question: "A ______________ can actually have any number of seeds",
    answers: [
      { text: "pomegranate", correct: true },
      { text: "apple", correct: false },
      { text: "banana", correct: false },
      { text: "mango", correct: false }
    ]
  },
  {
    question: 'Mageirocophobia is the fear of ____________.',
    answers: [
      { text: "eating", correct: false },
      { text: "drinking", correct: false },
      { text: "cooking", correct: true },
      { text: "bathing", correct: false }
    ]
  },
  {
    question: "What is made from boiling skin, cartilage, and bones from animals such as pigs, cows, and chickens.",
    answers: [
      { text: "Gelatin", correct: true },
      { text: "Carbs", correct: false },
      { text: "Oats", correct: false },
      { text: "Glucose", correct: false }
    ]
  },
  {
    question: "Almonds are considered _______________.",
    answers: [
      { text: "Vegetable", correct: false },
      { text: "Fruit", correct: false },
      { text: "Nuts", correct: false },
      { text: "Seeds", correct: true }
    ]
  },
  {
    question: "A Substance Needed By The Body For Growth, Energy, Repair And Maintenance Is Called A _______________.",
    answers: [
      { text: "Water", correct: false },
      { text: "Carbs", correct: false },
      { text: "Nutrient", correct: true },
      { text: "Chicken", correct: false }
    ]
  }
];