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

function generateQuestion() {
    questionTitle.textContent = quizQuestions[0].question;
    for(i=0; i<quizQuestions[0].choices.length; i++){
        let button = document.createElement("button");
        button.textContent = quizQuestions[0].choices[i];
        choicesContainer.append(button)
    }
    
}

function startTimer(){
    var count = 5;
    var timer = setInterval(function(){
        count--;
        timeElement.textContent = count
        console.log(timer);

        if(count === 0) {
            clearInterval(timer)
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
    generateQuestion()
    

    // display first question
}

startButton.addEventListener('click', startQuiz);
