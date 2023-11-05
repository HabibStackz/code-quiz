var startButton = document.getElementById('start');
var startScreen = document.getElementById('start-screen')
var bodyEl = document.querySelector('body')
var questionContainer = document.getElementById("bodyWrapper")

function startQuiz() {
    startScreen.style.display = 'none';
    var questions = document.createElement('h2')
    questions.textContent = quizQuestions[0]
    questionContainer.append(questions)
}

startButton.addEventListener('click', startQuiz);
