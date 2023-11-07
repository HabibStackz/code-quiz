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

startButton.addEventListener('click', startQuiz);

function generateQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        questionTitle.textContent = currentQuestion.question;
        choicesContainer.innerHTML = "";

        displayAnswerChoices(currentQuestion.choices);

    } else {
        endQuiz();
    }
}

// This function has no global variables but one parameter which is to be replaced by the array of answer choices as an argument in the parenthesis when function is called
function displayAnswerChoices(choices){
    for(let i=0; i<choices.length; i++){
        const choice = choices[i];
        
        // create buttons for choices
        const choiceButton = document.createElement('button');
        choiceButton.textContent = choice;
        choicesContainer.appendChild(choiceButton);

        // add event listener to check for correct and wrong answers
        choiceButton.addEventListener('click', function(){
            checkAnswer(i);
        });
    }
}

function checkAnswer(selectedChoice){
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if(currentQuestion.correctAnswer.includes (selectedChoice)){
        feedback.style.display = 'block';
        feedback.textContent = "Correct!";
        // set timer for how long feedback shows on screen
        setTimeout(function(){
            feedback.style.display = 'none';
        }, 500)
        
    } else {
        timeLeft -= 10; // deducts 10 seconds from time left
        
        // displays feedback
        feedback.style.display = 'block';
        feedback.textContent = "Wrong!";

        // set timer for how long feedback shows on screen
        setTimeout(function(){
            feedback.style.display = 'none';
        }, 500)
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        generateQuestion(currentQuestionIndex);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);
    questionsDiv.style.display = "none"
    endScreen.style.display = "block"
    finalScore.textContent = timeLeft
}

function startTimer(){
    timeLeft;
    timer = setInterval(function(){
        timeLeft--;
        timeElement.textContent = timeLeft;
        console.log(timer);

        if(timeLeft === 0) {
            clearInterval(timer);
            endQuiz();
        }

    }, 1000);
}

function startQuiz() {
    // hide the start screen to show questions instead
    startScreen.style.display = 'none';
        
    // display question container
    questionsDiv.style.display = 'block';
    
    // start the timer
    startTimer()
    
    // display questions
    generateQuestion()
    
    // display first question
}


