// DOM Elements
var startScreen = document.getElementById('start-screen');
var startButton = document.getElementById('start');
var questionsDiv = document.getElementById('questions');
var questionTitle = document.getElementById("question-title");
var choicesContainer = document.getElementById('choices');
var endScreen = document.getElementById('end-screen');
var finalScore = document.getElementById('final-score');
var initialsInput = document.getElementById('initials');
var submitInitialsButton = document.getElementById('submit');
var feedback = document.getElementById("feedback");
var timeElement = document.getElementById("time")

// Quiz Elements
let currentQuestionIndex = 0;
let score = 0 ;
let timeLeft = 60; // 60 secs time limit
let timer;

function generateQuestion() {
    questionTitle.textContent = quizQuestions[0].question;
    for(i=0; i<quizQuestions[0].choices.length; i++){
        let button = document.createElement("button");
        button.textContent = quizQuestions[0].choices[i];
        choicesContainer.append(button)
    }
    
}

function endQuiz() {
    questionsDiv.style.display = "none"
    endScreen.style.display = "block"
    finalScore.textContent = timeLeft
}

function startTimer(){
    timeLeft = 60;
    timer = setInterval(function(){
        timeLeft--;
        timeElement.textContent = timeLeft
        console.log(timer);

        if(timeLeft === 0) {
            clearInterval(timer)
            endQuiz()
        }

    }, 1000);
}

function startQuiz() {
    // hide the start screen to show questions instead
    startScreen.style.display = 'none';
    
    // start the timer
    startTimer()
    
    // display question container
    questionsDiv.style.display = 'block';

    // display questions
    generateQuestion()
    

    // display first question
}

startButton.addEventListener('click', startQuiz);
